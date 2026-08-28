// src/pages/api/paddle-webhook.js
// Paddle → 우리 서버로 결제/구독 이벤트를 알려주는 웹훅 수신 엔드포인트.
// Paddle Dashboard > Developer Tools > Notifications 에서 이 URL을 등록해야 동작합니다.
//   URL: https://taerijay.com/api/paddle-webhook

export const prerender = false;

import crypto from 'node:crypto';
import { getAdminDb } from '../../lib/firebaseAdmin.js';
import { resolveEntitlement, PRICE_TO_TIER } from '../../lib/entitlements.js';
import { sendPaymentConfirmationEmail } from '../../lib/sendPaymentEmail.js';

// Paddle-Signature 헤더 형식: "ts=1671552777;h1=abcdef..."
function verifyPaddleSignature(rawBody, signatureHeader, secret) {
  if (!signatureHeader) return false;
  const parts = Object.fromEntries(
    signatureHeader.split(';').map((p) => p.split('=').map((s) => s.trim()))
  );
  const { ts, h1 } = parts;
  if (!ts || !h1) return false;

  const signedPayload = `${ts}:${rawBody}`;
  const expected = crypto.createHmac('sha256', secret).update(signedPayload).digest('hex');

  try {
    return crypto.timingSafeEqual(Buffer.from(expected, 'hex'), Buffer.from(h1, 'hex'));
  } catch {
    return false;
  }
}

export async function POST({ request }) {
  const secret = import.meta.env.PADDLE_WEBHOOK_SECRET;
  if (!secret) {
    console.error('[paddle-webhook] PADDLE_WEBHOOK_SECRET 미설정');
    return new Response('server not configured', { status: 500 });
  }

  const rawBody = await request.text();
  const signatureHeader = request.headers.get('paddle-signature');

  if (!verifyPaddleSignature(rawBody, signatureHeader, secret)) {
    console.warn('[paddle-webhook] 서명 검증 실패 — 위조된 요청일 수 있음');
    return new Response('invalid signature', { status: 401 });
  }

  let event;
  try {
    event = JSON.parse(rawBody);
  } catch {
    return new Response('invalid json', { status: 400 });
  }

  // 결제 완료 이벤트만 처리
  if (event.event_type !== 'transaction.completed') {
    return new Response('ignored', { status: 200 });
  }

  const txn = event.data;
  const email = (txn.customer?.email || txn.customer_email || '').toLowerCase().trim();
  const items = txn.items || [];
  const grandTotal = txn.details?.totals?.grand_total ?? txn.details?.totals?.total ?? null;
  const isFree = grandTotal === '0' || grandTotal === 0;
  const purchasedAtMs = txn.billed_at ? new Date(txn.billed_at).getTime() : Date.now();

  if (!email) {
    console.error('[paddle-webhook] 이메일 없음, 처리 불가', txn.id);
    return new Response('missing customer email', { status: 200 });
  }

  const db = getAdminDb();
  const batch = db.batch();

  // 이메일 발송용으로 이번 트랜잭션에서 열린 채널/등급/만료일을 모아둔다
  const allChannels = [];
  let emailTier = 'basic';
  let emailExpiresAtMs = purchasedAtMs;
  const tierRank = { basic: 1, standard: 2, pro: 3 };

  for (const item of items) {
    const priceId = item.price?.id;
    if (!priceId) continue;

    const { channels, durationDays, expiresAtMs } = resolveEntitlement(priceId, isFree, purchasedAtMs);
    const itemTier = PRICE_TO_TIER[priceId] || 'basic';

    for (const channel of channels) {
      const ref = db.collection('users').doc(email).collection('entitlements').doc(channel);
      batch.set(ref, {
        channel,
        priceId,
        tier: itemTier,
        source: isFree ? 'coupon' : 'paid',
        durationDays,
        purchasedAt: purchasedAtMs,
        expiresAt: expiresAtMs,
        transactionId: txn.id,
        updatedAt: Date.now(),
      });
      if (!allChannels.includes(channel)) allChannels.push(channel);
    }

    if ((tierRank[itemTier] || 0) > (tierRank[emailTier] || 0)) emailTier = itemTier;
    if (expiresAtMs > emailExpiresAtMs) emailExpiresAtMs = expiresAtMs;
  }

  await batch.commit();

  // 결제 확인 이메일 발송 — 실패해도 결제/이용권 처리 자체는 이미 완료된 상태이므로
  // 여기서 에러가 나도 webhook 응답은 정상(200)으로 반환한다.
  if (allChannels.length > 0) {
    try {
      await sendPaymentConfirmationEmail({
        email,
        channels: allChannels,
        tier: emailTier,
        expiresAtMs: emailExpiresAtMs,
        transactionId: txn.id,
        isFree,
        amount: isFree ? 0 : grandTotal,
        currency: txn.currency_code || 'USD',
      });
    } catch (err) {
      console.error('[paddle-webhook] 결제 확인 이메일 발송 중 오류', err);
    }
  }

  return new Response('ok', { status: 200 });
}
// webhook secret trigger 1785814837
// re-trigger 1785818615
// re-trigger 1785818957
