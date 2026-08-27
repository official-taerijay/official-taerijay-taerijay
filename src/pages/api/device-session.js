// src/pages/api/device-session.js
// 요금제 등급별 동시접속(디바이스) 제한 관리 API.
//   POST : 로그인 시 이 디바이스를 세션 목록에 등록. 허용 대수 초과 시
//          가장 오래전에 접속한(lastSeenAt 최솟값) 세션을 밀어내고 그 결과를 알려줌.
//   GET  : 이 디바이스가 여전히 유효한 세션인지 주기적으로 확인(폴링)할 때 사용.
//
// 클라이언트는 Firebase ID 토큰을 Authorization: Bearer <token> 헤더로 보내야 함.
// deviceId는 클라이언트가 최초 1회 생성해 localStorage에 저장한 값(브라우저/기기 단위 고정 식별자).

export const prerender = false;

import { getAuth } from 'firebase-admin/auth';
import { getAdminDb } from '../../lib/firebaseAdmin.js';
import { resolveDeviceLimit } from '../../lib/entitlements.js';

const ADMIN_EMAILS = ['official@taerijay.com', 'taerijay@gmail.com'];

async function verifyUser(request) {
  const authHeader = request.headers.get('authorization') || '';
  const token = authHeader.startsWith('Bearer ') ? authHeader.slice(7) : null;
  if (!token) return null;
  const decoded = await getAuth().verifyIdToken(token);
  const email = (decoded.email || '').toLowerCase().trim();
  return email || null;
}

async function getActiveDeviceLimit(db, email) {
  if (ADMIN_EMAILS.includes(email)) return 999; // 운영자는 제한 없음

  const snap = await db.collection('users').doc(email).collection('entitlements').get();
  const now = Date.now();
  const priceIds = [];
  snap.forEach((doc) => {
    const d = doc.data();
    if (d.expiresAt && d.expiresAt > now && d.priceId) {
      priceIds.push(d.priceId);
    }
  });
  return resolveDeviceLimit(priceIds);
}

export async function POST({ request }) {
  let email;
  try {
    email = await verifyUser(request);
  } catch (e) {
    return new Response(JSON.stringify({ error: 'invalid token' }), { status: 401 });
  }
  if (!email) {
    return new Response(JSON.stringify({ error: 'missing token' }), { status: 401 });
  }

  let body;
  try {
    body = await request.json();
  } catch {
    return new Response(JSON.stringify({ error: 'invalid json' }), { status: 400 });
  }
  const deviceId = (body.deviceId || '').trim();
  const deviceLabel = (body.deviceLabel || 'Unknown device').slice(0, 120);
  if (!deviceId) {
    return new Response(JSON.stringify({ error: 'missing deviceId' }), { status: 400 });
  }

  const db = getAdminDb();
  const limit = await getActiveDeviceLimit(db, email);

  if (limit <= 0) {
    // 유효한 유료/무료 이용권이 전혀 없음 — 세션 등록 자체를 거부하지는 않되(로그인 자체는 가능해야 함)
    // 디바이스 제한 정보만 0으로 응답. 실제 콘텐츠 접근 게이트는 entitlements API가 별도로 막음.
    return new Response(JSON.stringify({ ok: true, limit: 0, evicted: false }), {
      status: 200,
      headers: { 'content-type': 'application/json' },
    });
  }

  const sessionsRef = db.collection('users').doc(email).collection('sessions');
  const now = Date.now();

  // 이 디바이스가 이미 등록돼 있으면 lastSeenAt만 갱신
  const existing = await sessionsRef.doc(deviceId).get();
  if (existing.exists) {
    await sessionsRef.doc(deviceId).set(
      { deviceLabel, lastSeenAt: now, evicted: false },
      { merge: true }
    );
    return new Response(JSON.stringify({ ok: true, limit, evicted: false }), {
      status: 200,
      headers: { 'content-type': 'application/json' },
    });
  }

  // 새 디바이스 — 현재 활성 세션 목록을 보고 한도 초과 여부 판단
  const allSnap = await sessionsRef.orderBy('lastSeenAt', 'asc').get();
  const activeSessions = [];
  allSnap.forEach((doc) => {
    const d = doc.data();
    if (!d.evicted) activeSessions.push({ id: doc.id, ...d });
  });

  let evictedDeviceId = null;
  if (activeSessions.length >= limit) {
    // 가장 오래전에 접속한 세션을 밀어냄 (activeSessions는 lastSeenAt asc 정렬)
    const oldest = activeSessions[0];
    evictedDeviceId = oldest.id;
    await sessionsRef.doc(oldest.id).set({ evicted: true, evictedAt: now }, { merge: true });
  }

  await sessionsRef.doc(deviceId).set({
    deviceLabel,
    createdAt: now,
    lastSeenAt: now,
    evicted: false,
  });

  return new Response(
    JSON.stringify({ ok: true, limit, evicted: false, evictedDeviceId }),
    { status: 200, headers: { 'content-type': 'application/json' } }
  );
}

export async function GET({ request }) {
  let email;
  try {
    email = await verifyUser(request);
  } catch {
    return new Response(JSON.stringify({ error: 'invalid token' }), { status: 401 });
  }
  if (!email) {
    return new Response(JSON.stringify({ error: 'missing token' }), { status: 401 });
  }

  const url = new URL(request.url);
  const deviceId = (url.searchParams.get('deviceId') || '').trim();
  if (!deviceId) {
    return new Response(JSON.stringify({ error: 'missing deviceId' }), { status: 400 });
  }

  const db = getAdminDb();
  const doc = await db.collection('users').doc(email).collection('sessions').doc(deviceId).get();

  if (!doc.exists) {
    return new Response(JSON.stringify({ valid: true, registered: false }), {
      status: 200,
      headers: { 'content-type': 'application/json' },
    });
  }

  const d = doc.data();
  if (d.evicted) {
    return new Response(JSON.stringify({ valid: false, reason: 'evicted' }), {
      status: 200,
      headers: { 'content-type': 'application/json' },
    });
  }

  // 살아있는 세션이면 lastSeenAt 갱신
  await db.collection('users').doc(email).collection('sessions').doc(deviceId).set(
    { lastSeenAt: Date.now() },
    { merge: true }
  );

  return new Response(JSON.stringify({ valid: true, registered: true }), {
    status: 200,
    headers: { 'content-type': 'application/json' },
  });
}
