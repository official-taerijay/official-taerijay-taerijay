// src/lib/firebaseAdmin.js
// 서버(API 라우트) 전용 — 절대 클라이언트 번들에 포함되면 안 됨 (PUBLIC_ 접두사 없는 시크릿 사용)

import { initializeApp, getApps, cert } from 'firebase-admin/app';
import { getFirestore } from 'firebase-admin/firestore';

function getAdminApp() {
  if (getApps().length) return getApps()[0];

  const projectId = import.meta.env.FIREBASE_PROJECT_ID;
  const clientEmail = import.meta.env.FIREBASE_CLIENT_EMAIL;
  // Vercel 환경변수에 개행(\n)이 문자열로 저장되는 경우가 많아 실제 개행으로 복원
  const privateKey = (import.meta.env.FIREBASE_PRIVATE_KEY || '').replace(/\\n/g, '\n');

  if (!projectId || !clientEmail || !privateKey) {
    throw new Error('Firebase Admin 환경변수(FIREBASE_PROJECT_ID / FIREBASE_CLIENT_EMAIL / FIREBASE_PRIVATE_KEY)가 설정되지 않았습니다.');
  }

  return initializeApp({
    credential: cert({ projectId, clientEmail, privateKey }),
  });
}

export function getAdminDb() {
  const app = getAdminApp();
  return getFirestore(app);
}
