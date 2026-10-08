// src/pages/api/cron/expiry-reminder.js
// Vercel Cron (vercel.json)이 매일 호출 → 만료 1일 전(앞으로 30시간 이내 만료) 이용권을
// 운영자(ADMIN_NOTIFY_EMAIL)에게만 한 통으로 알린다. 고객에게는 발송하지 않음.
// 중복 방지: entitlement 문서에 expiryReminderSentAt 기록 (재결제 시 문서가 덮어써져 초기화됨).
// 보안: Vercel이 CRON_SECRET 환경변수가 있으면 Authorization: Bearer <CRON_SECRET> 헤더를 붙여 호출.

export const prerender = false;

import { getAdminDb } from '../../../lib/firebaseAdmin.js';
import { sendMail, getAdminRecipients, wrapAdminHtml, escapeHtml, formatKstDateTime } from '../../../lib/mailer.js';

const WINDOW_MS = 30 * 60 * 60 * 1000;

export async function GET({ request }) {
  const secret = import.meta.env.CRON_SECRET;
  if (!secret) return new Response('CRON_SECRET not configured', { status: 500 });
  if (request.headers.get('authorization') !== `Bearer ${secret}`) {
    return new Response('unauthorized', { status: 401 });
  }

  const db = getAdminDb();
  const now = Date.now();
  const limit = now + WINDOW_MS;
  const due = []; // { email, channel, tier, source, expiresAt, ref }

  // users 하위 문서가 없는(서브컬렉션만 있는) 경우도 포함하도록 listDocuments 사용
  const userRefs = await db.collection('users').listDocuments();
  for (const uref of userRefs) {
    const snap = await uref.collection('entitlements').get();
    snap.forEach((d) => {
      const x = d.data();
      if (x.expiresAt > now && x.expiresAt <= limit && !x.expiryReminderSentAt) {
        due.push({ email: uref.id, channel: x.channel || d.id, tier: x.tier, source: x.source, expiresAt: x.expiresAt, ref: d.ref });
      }
    });
  }

  if (!due.length) return new Response(JSON.stringify({ ok: true, count: 0 }), { status: 200 });

  due.sort((a, b) => a.expiresAt - b.expiresAt);
  const rows = due.map((e) => [
    escapeHtml(e.email),
    `${escapeHtml(e.channel)} · ${escapeHtml(e.tier || '')} · ${e.source === 'coupon' ? '쿠폰' : '유료'}<br/>만료 ${formatKstDateTime(e.expiresAt)}`,
  ]);
  const html = wrapAdminHtml(`이용권 만료 임박 ${due.length}건 (약 1일 이내)`, rows);

  const sent = await sendMail({
    to: getAdminRecipients(),
    subject: `[TAERIJAY·운영] 이용권 만료 1일 전 알림 (${due.length}건)`,
    html,
  });

  // 메일이 실제 발송됐을 때만 발송 기록 (키 미설정/오류 시 다음 실행에서 재시도)
  if (!sent.skipped && !sent.error) {
    const batch = db.batch();
    due.forEach((e) => batch.update(e.ref, { expiryReminderSentAt: now }));
    await batch.commit();
  }

  return new Response(JSON.stringify({ ok: true, count: due.length, mailed: !sent.skipped && !sent.error }), {
    status: 200,
    headers: { 'content-type': 'application/json' },
  });
}
