// src/pages/api/entitlements.js
// 로그인한 사용자 본인의 채널별 이용권 만료일을 조회하는 API.
// 프론트에서 Firebase ID 토큰을 Authorization: Bearer <token> 헤더로 보내야 함.

export const prerender = false;

// 관리자 계정 — 모든 채널 무제한 접근
const ADMIN_EMAILS = ['official@taerijay.com', 'taerijay@gmail.com'];

import { getAuth } from 'firebase-admin/auth';
import { getApps, initializeApp, cert } from 'firebase-admin/app';
import { getAdminDb } from '../../lib/firebaseAdmin.js';

function ensureAdminApp() {
  if (getApps().length) return;
  const projectId = import.meta.env.FIREBASE_PROJECT_ID;
  const clientEmail = import.meta.env.FIREBASE_CLIENT_EMAIL;
  const privateKey = (import.meta.env.FIREBASE_PRIVATE_KEY || '').replace(/\\n/g, '\n');
  initializeApp({ credential: cert({ projectId, clientEmail, privateKey }) });
}

export async function GET({ request }) {
  const authHeader = request.headers.get('authorization') || '';
  const token = authHeader.startsWith('Bearer ') ? authHeader.slice(7) : null;

  if (!token) {
    return new Response(JSON.stringify({ error: 'missing token' }), { status: 401 });
  }

  try {
    ensureAdminApp();
    const decoded = await getAuth().verifyIdToken(token);
    const email = (decoded.email || '').toLowerCase().trim();
    if (!email) {
      return new Response(JSON.stringify({ error: 'no email on token' }), { status: 400 });
    }

    const isAdmin = ADMIN_EMAILS.includes(email);

    const db = getAdminDb();
    const snap = await db.collection('users').doc(email).collection('entitlements').get();

    const entitlements = {};
    snap.forEach((doc) => {
      entitlements[doc.id] = doc.data();
    });

    return new Response(JSON.stringify({ email, entitlements, isAdmin }), {
      status: 200,
      headers: { 'content-type': 'application/json' },
    });
  } catch (e) {
    console.error('[entitlements] error', e);
    // 임시 디버그: 401의 정확한 원인을 응답에 노출 (원인 파악 후 제거 예정)
    return new Response(JSON.stringify({ error: 'invalid token', debug: String(e && e.message || e), code: e && e.code }), { status: 401 });
  }
}
