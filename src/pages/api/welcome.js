// src/pages/api/welcome.js
// 로그인 직후 클라이언트가 호출. 해당 이메일로 환영 메일이 아직 나간 적 없으면
// 가입자 본인 + 운영자에게 발송하고 users/{email}.welcomeSentAt 을 기록(중복 방지).
// Authorization: Bearer <Firebase ID token>

export const prerender = false;

import { getAuth } from 'firebase-admin/auth';
import { getAdminDb } from '../../lib/firebaseAdmin.js';
import { sendWelcomeEmails } from '../../lib/sendWelcomeEmail.js';

const json = (obj, status = 200) =>
  new Response(JSON.stringify(obj), { status, headers: { 'content-type': 'application/json' } });

export async function POST({ request }) {
  const authHeader = request.headers.get('authorization') || '';
  const token = authHeader.startsWith('Bearer ') ? authHeader.slice(7) : null;
  if (!token) return json({ error: 'missing token' }, 401);

  let decoded;
  try {
    decoded = await getAuth().verifyIdToken(token);
  } catch {
    return json({ error: 'invalid token' }, 401);
  }
  const email = (decoded.email || '').toLowerCase().trim();
  if (!email) return json({ error: 'no email' }, 400);

  const db = getAdminDb();
  const ref = db.collection('users').doc(email);
  const now = Date.now();

  // 트랜잭션으로 "최초 1회" 보장 (동시 호출 대비)
  let first = false;
  try {
    await db.runTransaction(async (tx) => {
      const snap = await tx.get(ref);
      if (snap.exists && snap.data()?.welcomeSentAt) return;
      first = true;
      tx.set(ref, { email, name: decoded.name || '', joinedAt: now, welcomeSentAt: now }, { merge: true });
    });
  } catch (e) {
    console.error('[welcome] transaction failed', e);
    return json({ error: 'server error' }, 500);
  }

  if (!first) return json({ ok: true, sent: false });

  try {
    await sendWelcomeEmails({ email, name: decoded.name || '', joinedAtMs: now });
  } catch (e) {
    console.error('[welcome] send failed', e);
  }
  return json({ ok: true, sent: true });
}
