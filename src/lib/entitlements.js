// src/lib/entitlements.js
// Paddle priceId → 채널/이용기간 매핑 (웹훅 + 프론트엔드 카운트다운에서 공통으로 사용)

// 채널 slug 목록: protocol, mini, red, green, mart-convenience
// (red/green은 각각 구 daiso/oliveyoung 채널. [channel]/[sub].astro의 channel 파라미터가
//  실제 라우팅 slug이므로 requireChannel 값도 반드시 이 값과 일치해야 함.)

export const PRICE_TO_CHANNELS = {
  // 싱글 (Basic / Standard / Pro 전부 동일 채널, 1년)
  'pri_01kqxyx1fecx184qt7q4dbr3a3': ['protocol'],   // protocol_basic
  'pri_01kqxz3fghe6qsj5kh0vvjw24w': ['mini'],       // mini_basic
  'pri_01kqxz5yjv0w5pcyt2wwft4gar': ['red'],        // daiso_basic
  'pri_01kxv7ba8msb3j7h7rtsj1hx59': ['green'],      // olive_basic
  'pri_01kxv7pmea213szg7ejdnvx23t': ['mart-convenience'],// emart_cvs_basic (구 cvs_basic 가격 재사용)

  'pri_01kxyjw7rxvbgm5pfcx2bqt6a0': ['protocol'],   // protocol_standard
  'pri_01kxyk2mnc25zknae2wnm31bcw': ['mini'],       // mini_standard
  'pri_01kxyk6rmhden7tw7k8qj4464d': ['red'],        // daiso_standard
  'pri_01kxykabv1mvtr31pjahgxsct5': ['green'],      // olive_standard
  'pri_01kxykjvzjsbqe7gsq74hf7tbc': ['mart-convenience'],// emart_cvs_standard (구 cvs_standard 가격 재사용)

  'pri_01kxykpqktg5a5q7sz6e9wbxxk': ['protocol'],   // protocol_pro
  'pri_01kxyktf615tcbce2h84q549yv': ['mini'],       // mini_pro
  'pri_01kxykytqx419t9hnknspte9kv': ['red'],        // daiso_pro
  'pri_01kxym3cvmg277ew60m55jpgpf': ['green'],      // olive_pro
  'pri_01kxymc3g9hjq1rv28mb7nx0bb': ['mart-convenience'],// emart_cvs_pro (구 cvs_pro 가격 재사용)

  // 무료 코트시 패스
  'pri_01kxyq3era020h6719fc161hzv': ['mart-convenience'],// emart_cvs Free Pass (구 cvs Free Pass 가격 재사용)

  // 더블 (두 채널 동시 오픈, 1년) — protocol/mini, red/green 유지
  'pri_01kxyn9m5pv8rvk484z9b5gsdm': ['protocol', 'mini'],       // protocol_mini
  'pri_01kxyndffbjb7h3wzq78hgzydr': ['red', 'green'],           // daiso_olive

  // 토탈 (전 채널, 1년)
  'pri_01kxynrmxggfrzymtp4721xyat': ['protocol', 'mini', 'red', 'green', 'mart-convenience'], // total
};

// priceId → 요금제 등급(tier). 동시접속 허용 디바이스 수 계산에 사용.
// 기준(사용자 확정):
//   basic    = 1 디바이스 · 동시접속 해당없음(=1)
//   standard = 2 디바이스 · 동시접속 2
//   pro      = 3 디바이스 · 동시접속 3
//   double, total = basic과 동일(1 디바이스)
export const PRICE_TO_TIER = {
  'pri_01kqxyx1fecx184qt7q4dbr3a3': 'basic',
  'pri_01kqxz3fghe6qsj5kh0vvjw24w': 'basic',
  'pri_01kqxz5yjv0w5pcyt2wwft4gar': 'basic',
  'pri_01kxv7ba8msb3j7h7rtsj1hx59': 'basic',
  'pri_01kxv7pmea213szg7ejdnvx23t': 'basic',

  'pri_01kxyjw7rxvbgm5pfcx2bqt6a0': 'standard',
  'pri_01kxyk2mnc25zknae2wnm31bcw': 'standard',
  'pri_01kxyk6rmhden7tw7k8qj4464d': 'standard',
  'pri_01kxykabv1mvtr31pjahgxsct5': 'standard',
  'pri_01kxykjvzjsbqe7gsq74hf7tbc': 'standard',

  'pri_01kxykpqktg5a5q7sz6e9wbxxk': 'pro',
  'pri_01kxyktf615tcbce2h84q549yv': 'pro',
  'pri_01kxykytqx419t9hnknspte9kv': 'pro',
  'pri_01kxym3cvmg277ew60m55jpgpf': 'pro',
  'pri_01kxymc3g9hjq1rv28mb7nx0bb': 'pro',

  'pri_01kxyq3era020h6719fc161hzv': 'basic', // 무료 코트시 패스

  'pri_01kxyn9m5pv8rvk484z9b5gsdm': 'basic', // 더블(protocol_mini)
  'pri_01kxyndffbjb7h3wzq78hgzydr': 'basic', // 더블(daiso_olive)

  'pri_01kxynrmxggfrzymtp4721xyat': 'basic', // 토탈
};

// 등급별 허용 동시접속(디바이스) 수
export const TIER_DEVICE_LIMIT = {
  basic: 1,
  standard: 2,
  pro: 3,
};

/**
 * 사용자가 보유한 유효(미만료) entitlement priceId 목록에서 가장 높은 등급을 찾아
 * 허용 디바이스 수를 반환. 등급 없음(=구매 이력 없음)은 0.
 */
export function resolveDeviceLimit(priceIds = []) {
  const rank = { basic: 1, standard: 2, pro: 3 };
  let best = 0;
  let bestTier = null;
  for (const priceId of priceIds) {
    const tier = PRICE_TO_TIER[priceId];
    if (!tier) continue;
    if ((rank[tier] || 0) > best) {
      best = rank[tier];
      bestTier = tier;
    }
  }
  return bestTier ? TIER_DEVICE_LIMIT[bestTier] : 0;
}

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
