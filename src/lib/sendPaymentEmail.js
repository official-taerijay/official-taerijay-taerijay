// src/lib/sendPaymentEmail.js
// Paddle 결제 완료 웹훅에서 호출: ① 구매자 영수증 + 상품/이용 안내 메일 ② 운영자 알림 메일.
// 발송 실패가 결제 처리를 막지 않도록 webhook에서 try/catch로 감싸 호출한다.
// 환경변수는 mailer.js 참고 (RESEND_API_KEY / RESEND_FROM / ADMIN_NOTIFY_EMAIL).

import { sendMail, getAdminRecipients, wrapCustomerHtml, wrapAdminHtml, btn, row, escapeHtml, formatKstDate } from './mailer.js';

const CHANNEL_LABELS = {
  protocol: { kr: 'protocol', desc_kr: '공항·세관·대중교통·프랜차이즈 필수 규약', desc_en: 'Airport, customs, transit & franchise essentials', path: '/protocol' },
  mini: { kr: 'mini', desc_kr: '거점 도시별 여행 코스·핫플', desc_en: 'City-based travel courses & hot spots', path: '/mini' },
  red: { kr: 'red', desc_kr: '다이소 인기 아이템', desc_en: 'Daiso picks', path: '/red' },
  green: { kr: 'green', desc_kr: '올리브영 스킨케어 트렌드', desc_en: 'Olive Young skincare trends', path: '/green' },
  'mart-convenience': { kr: 'mart+convenience', desc_kr: '마트·편의점 통합 DB', desc_en: 'Mart & convenience store DB', path: '/mart-convenience' },
};

const TIER_INFO = {
  basic: { label: 'BASIC', devices: 1 },
  standard: { label: 'STANDARD', devices: 2 },
  pro: { label: 'PRO', devices: 3 },
};

function channelListHtml(channels) {
  return channels.map((ch) => {
    const l = CHANNEL_LABELS[ch] || { kr: ch, desc_kr: '', desc_en: '' };
    return `<li style="margin-bottom:10px;">
      <strong style="color:#F16B24;">taerijay+${l.kr}</strong>
      <div style="font-size:13px;color:#7A9AB5;">${l.desc_kr} · ${l.desc_en}</div>
    </li>`;
  }).join('');
}

export async function sendPaymentConfirmationEmail({
  email,
  channels = [],
  tier = 'basic',
  expiresAtMs,
  purchasedAtMs = Date.now(),
  transactionId,
  isFree = false,
  amount = null,
  currency = 'USD',
}) {
  const t = TIER_INFO[tier] || { label: String(tier).toUpperCase(), devices: 1 };
  const expiresText = expiresAtMs ? formatKstDate(expiresAtMs) : '—';
  const daysLeft = expiresAtMs ? Math.max(0, Math.ceil((expiresAtMs - Date.now()) / 86400000)) : null;
  // Paddle grand_total은 통화 최소단위(센트 등) 문자열 → 표시용 환산
  let amountText = '—';
  if (isFree) amountText = '0 (쿠폰 적용 · Coupon applied)';
  else if (amount != null && !isNaN(Number(amount))) {
    const zeroDecimal = ['JPY', 'KRW'].includes(currency);
    amountText = `${currency} ${zeroDecimal ? Number(amount) : (Number(amount) / 100).toFixed(2)}`;
  }
  const periodText = isFree ? '1개월 · 1 month' : '1년 · 1 year';

  const subject = isFree
    ? '[TAERIJAY] 무료 이용권이 활성화되었습니다 · Free pass activated'
    : '[TAERIJAY] 결제 영수증 및 이용 안내 · Receipt & your pass';

  const customerHtml = wrapCustomerHtml('Receipt & Guide', `
    <p style="font-size:16px;line-height:1.6;margin:0 0 6px;"><strong>TAERIJAY를 선택해 주셔서 감사합니다!</strong></p>
    <p style="font-size:13px;line-height:1.6;color:#B8C4D4;margin:0 0 22px;">Thank you for choosing TAERIJAY. Your payment is complete and your pass is active.</p>

    <div style="font-size:12px;letter-spacing:.14em;text-transform:uppercase;color:#7A9AB5;margin-bottom:8px;">구독 상품 · Your product</div>
    <ul style="list-style:none;margin:0 0 22px;padding:0;">${channelListHtml(channels)}</ul>

    <div style="font-size:12px;letter-spacing:.14em;text-transform:uppercase;color:#7A9AB5;margin-bottom:4px;">영수증 · Receipt</div>
    <table style="width:100%;border-collapse:collapse;font-size:13px;margin-bottom:22px;">
      ${row('등급 · Tier', `<strong>${t.label}</strong> (동시 ${t.devices}대 · ${t.devices} device${t.devices > 1 ? 's' : ''})`)}
      ${row('결제 금액 · Amount', escapeHtml(amountText))}
      ${row('결제일 · Purchased', formatKstDate(purchasedAtMs))}
      ${row('이용 기간 · Period', periodText)}
      ${row('이용 만료일 · Expires', `<strong style="color:#F16B24;">${expiresText}</strong>${daysLeft != null ? ` (D-${daysLeft})` : ''}`)}
      ${row('거래 번호 · Transaction ID', `<span style="font-size:11px;color:#7A9AB5;">${escapeHtml(transactionId || '—')}</span>`)}
    </table>

    <div style="background:rgba(255,255,255,.05);border-left:3px solid #F16B24;padding:14px 16px;border-radius:4px;margin-bottom:22px;font-size:13px;line-height:1.8;">
      <strong>이용 안내 · How it works</strong><br/>
      ▪ 자동 갱신이 없습니다. 추가 결제는 발생하지 않으며, <strong>${expiresText}</strong>까지 자유롭게 이용하세요.<br/>
      &nbsp;&nbsp;<span style="color:#B8C4D4;">No auto-renewal — you will not be charged again. Use it until ${expiresText}.</span><br/>
      ▪ 가입한 Google 계정(${escapeHtml(email)})으로 로그인하면 바로 열립니다.<br/>
      &nbsp;&nbsp;<span style="color:#B8C4D4;">Sign in with the Google account above to unlock.</span><br/>
      ▪ 동시 접속은 ${t.devices}대까지 가능하며, 초과 시 가장 오래된 기기가 로그아웃됩니다.<br/>
      &nbsp;&nbsp;<span style="color:#B8C4D4;">Up to ${t.devices} device(s) at once; the oldest session is signed out when exceeded.</span><br/>
      ▪ 만료 후에는 열람이 종료되며, 계속 이용하려면 이용권을 다시 구매해 주세요.<br/>
      &nbsp;&nbsp;<span style="color:#B8C4D4;">After expiry access ends; purchase a new pass to continue.</span>
    </div>

    ${btn('https://taerijay.com/', 'TAERIJAY 바로가기 · Go to TAERIJAY')}

    <p style="font-size:11px;line-height:1.7;color:#5d6c82;margin-top:22px;">
      결제는 PCI-DSS 인증 파트너 Paddle을 통해 처리되었으며 카드 정보는 TAERIJAY가 보관하지 않습니다.<br/>
      Payment processed by Paddle (PCI-DSS). TAERIJAY never stores your card details.
    </p>
  `);

  const adminHtml = wrapAdminHtml(isFree ? '무료 쿠폰 이용권 활성화' : '신규 결제 알림', [
    ['구매자', escapeHtml(email)],
    ['채널', channels.map((c) => CHANNEL_LABELS[c]?.kr || c).join(', ')],
    ['등급', t.label],
    ['금액', escapeHtml(amountText)],
    ['유형', isFree ? '쿠폰(무료)' : '유료'],
    ['결제일', formatKstDate(purchasedAtMs)],
    ['만료일', expiresText],
    ['거래 번호', escapeHtml(transactionId || '—')],
  ]);

  const [customer, admin] = await Promise.all([
    sendMail({ to: email, subject, html: customerHtml }),
    sendMail({
      to: getAdminRecipients(),
      subject: `[TAERIJAY·운영] ${isFree ? '쿠폰 활성화' : '결제 완료'}: ${email} · ${channels.join('+')}`,
      html: adminHtml,
    }),
  ]);
  return { customer, admin };
}
