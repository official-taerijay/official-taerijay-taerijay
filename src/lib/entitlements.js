// src/lib/entitlements.js
// Paddle priceId → 채널/이용기간 매핑 (웹훅 + 프론트엔드 카운트다운에서 공통으로 사용)

// 채널 slug 목록: protocol, mini, red-green, mart-convenience
// (daiso/oliveyoung은 2026-08 리브랜딩으로 'red-green' 단일 채널로 통합됨.
//  emart/convenience는 'mart-convenience' 단일 채널로 통합됨 — [channel]/[sub].astro의
//  channel 파라미터가 실제 라우팅 slug이므로 requireChannel 값도 반드시 이 값과 일치해야 함.)

export const PRICE_TO_CHANNELS = {
  // 싱글 (Basic / Standard / Pro 전부 동일 채널, 1년)
  'pri_01kqxyx1fecx184qt7q4dbr3a3': ['protocol'],   // protocol_basic
  'pri_01kqxz3fghe6qsj5kh0vvjw24w': ['mini'],       // mini_basic
  'pri_01kqxz5yjv0w5pcyt2wwft4gar': ['red-green'],  // daiso_basic
  'pri_01kxv7ba8msb3j7h7rtsj1hx59': ['red-green'],  // olive_basic
  'pri_01kxv7pmea213szg7ejdnvx23t': ['mart-convenience'],// emart_cvs_basic (구 cvs_basic 가격 재사용)

  'pri_01kxyjw7rxvbgm5pfcx2bqt6a0': ['protocol'],   // protocol_standard
  'pri_01kxyk2mnc25zknae2wnm31bcw': ['mini'],       // mini_standard
  'pri_01kxyk6rmhden7tw7k8qj4464d': ['red-green'],  // daiso_standard
  'pri_01kxykabv1mvtr31pjahgxsct5': ['red-green'],  // olive_standard
  'pri_01kxykjvzjsbqe7gsq74hf7tbc': ['mart-convenience'],// emart_cvs_standard (구 cvs_standard 가격 재사용)

  'pri_01kxykpqktg5a5q7sz6e9wbxxk': ['protocol'],   // protocol_pro
  'pri_01kxyktf615tcbce2h84q549yv': ['mini'],       // mini_pro
  'pri_01kxykytqx419t9hnknspte9kv': ['red-green'],  // daiso_pro
  'pri_01kxym3cvmg277ew60m55jpgpf': ['red-green'],  // olive_pro
  'pri_01kxymc3g9hjq1rv28mb7nx0bb': ['mart-convenience'],// emart_cvs_pro (구 cvs_pro 가격 재사용)

  // 무료 코트시 패스
  'pri_01kxyq3era020h6719fc161hzv': ['mart-convenience'],// emart_cvs Free Pass (구 cvs Free Pass 가격 재사용)

  // 더블 (두 채널 동시 오픈, 1년) — protocol/mini만 유지. daiso/olive는 이제 단일 채널이라 더블 무의미해 total로만 커버
  'pri_01kxyn9m5pv8rvk484z9b5gsdm': ['protocol', 'mini'],       // protocol_mini
  'pri_01kxyndffbjb7h3wzq78hgzydr': ['red-green'],              // daiso_olive (구 더블 → 통합 채널 단일 부여)

  // 토탈 (전 채널, 1년)
  'pri_01kxynrmxggfrzymtp4721xyat': ['protocol', 'mini', 'red-green', 'mart-convenience'], // total
};

// 정식 결제 이용기간: 결제일로부터 1년
export const PAID_DURATION_DAYS = 365;

// TAERIJAY ORIGINE 무료 쿠폰(100% 할인) 이용기간: 결제(적용)일로부터 1개월
export const FREE_COUPON_DURATION_DAYS = 30;

/**
 * priceId + 이번 결제가 무료(100% 할인)였는지 여부로 채널 목록과 만료일(ms)을 계산
 * isFree 판단은 웹훅 쪽에서 transaction의 grand_total === '0' 인지로 결정해서 넘겨준다.
 */
export function resolveEntitlement(priceId, isFree, purchasedAtMs = Date.now()) {
  const channels = PRICE_TO_CHANNELS[priceId] || [];
  const durationDays = isFree ? FREE_COUPON_DURATION_DAYS : PAID_DURATION_DAYS;
  const expiresAtMs = purchasedAtMs + durationDays * 24 * 60 * 60 * 1000;
  return { channels, durationDays, isFree, purchasedAtMs, expiresAtMs };
}
