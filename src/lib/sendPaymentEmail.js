// src/lib/sendPaymentEmail.js
// Paddle 결제 완료 웹훅에서 호출하는 "결제 확인 이메일" 발송 모듈.
// Resend(https://resend.com) API를 사용. 환경변수:
//   RESEND_API_KEY   — Resend 대시보드에서 발급받은 API 키
//   RESEND_FROM      — 발신자 주소 (예: "TAERIJAY <noreply@taerijay.com>")
//                       도메인 인증 전에는 Resend 기본 발신 주소(onboarding@resend.dev)로 임시 발송 가능
//
// RESEND_API_KEY가 설정되지 않은 경우 발송을 건너뛰고 콘솔에 로그만 남긴다.
// (이메일 발송 실패가 결제 처리 자체를 막지 않도록 webhook에서는 이 함수를 try/catch로 감싸 호출할 것)

import { Resend } from 'resend';

const CHANNEL_LABELS = {
  protocol: { kr: 'protocol', en: 'protocol', desc_kr: '공항·세관·대중교통 필수 규약', desc_en: 'Airport, customs & transit essentials' },
  mini: { kr: 'mini', en: 'mini', desc_kr: '거점 도시별 여행 코스', desc_en: 'City-based travel courses' },
  red: { kr: 'red', en: 'red', desc_kr: '균일가 생활용품 뷰티템', desc_en: 'Uniform-price beauty & living goods' },
  green: { kr: 'green', en: 'green', desc_kr: 'MZ 스킨케어 트렌드', desc_en: 'Gen-Z skincare trends' },
  'mart-convenience': { kr: 'mart+convenience', en: 'mart+convenience', desc_kr: '마트·편의점 통합 DB', desc_en: 'Mart & convenience store DB' },
};

const TIER_LABELS = {
  basic: 'BASIC',
  standard: 'STANDARD',
  pro: 'PRO',
};

function formatDate(ms) {
  const d = new Date(ms);
  return d.toISOString().slice(0, 10); // YYYY-MM-DD (이메일은 UTC 표기, 필요시 로케일 변환 가능)
}

function buildChannelListHtml(channels) {
  return channels
    .map((ch) => {
      const label = CHANNEL_LABELS[ch] || { kr: ch, en: ch, desc_kr: '', desc_en: '' };
      return `<li style="margin-bottom:8px;">
        <strong style="color:#F16B24;">taerijay+${label.kr}</strong>
        <div style="font-size:13px;color:#7A9AB5;">${label.desc_kr} · ${label.desc_en}</div>
      </li>`;
    })
    .join('');
}

/**
 * 결제 완료 확인 이메일 발송
 * @param {Object} params
 * @param {string} params.email       수신자 이메일
 * @param {string[]} params.channels  이번 결제로 열린 채널 slug 배열
 * @param {string} params.tier        basic | standard | pro
 * @param {number} params.expiresAtMs 만료 시각(ms)
 * @param {string} params.transactionId Paddle transaction id
 * @param {boolean} params.isFree     쿠폰(100% 할인) 결제 여부
 * @param {number|string|null} params.amount 결제 금액 (grand_total, 통화 최소단위 문자열일 수 있음)
 * @param {string} params.currency    통화 코드 (예: USD)
 */
export async function sendPaymentConfirmationEmail({
  email,
  channels = [],
  tier = 'basic',
  expiresAtMs,
  transactionId,
  isFree = false,
  amount = null,
  currency = 'USD',
}) {
  const apiKey = import.meta.env.RESEND_API_KEY;
  if (!apiKey) {
    console.warn('[sendPaymentEmail] RESEND_API_KEY 미설정 — 이메일 발송을 건너뜁니다.', { email, transactionId });
    return { skipped: true };
  }

  const resend = new Resend(apiKey);
  const from = import.meta.env.RESEND_FROM || 'TAERIJAY <onboarding@resend.dev>';

  const tierLabel = TIER_LABELS[tier] || tier.toUpperCase();
  const expiresText = expiresAtMs ? formatDate(expiresAtMs) : '—';
  const amountText = isFree
    ? '₩0 (쿠폰 적용 · Coupon applied)'
    : amount != null
      ? `${currency} ${amount}`
      : '—';

  const subject = isFree
    ? `[TAERIJAY] 무료 쿠폰 이용권이 활성화되었습니다 · Free pass activated`
    : `[TAERIJAY] 결제가 완료되었습니다 · Payment confirmed`;

  const html = `
  <div style="font-family:-apple-system,BlinkMacSystemFont,'Segoe UI',Roboto,sans-serif;max-width:520px;margin:0 auto;background:#0A192F;color:#FBF9F4;padding:32px 24px;border-radius:8px;">
    <div style="font-size:22px;font-weight:800;letter-spacing:.06em;margin-bottom:4px;">
      TAERIJAY<span style="color:#5B0E1B;font-style:italic;">+</span>
    </div>
    <div style="font-size:11px;letter-spacing:.2em;text-transform:uppercase;color:#7A9AB5;margin-bottom:28px;">
      Payment Confirmation
    </div>

    <p style="font-size:15px;line-height:1.6;margin-bottom:6px;">
      결제가 정상적으로 완료되었습니다. 아래 채널을 바로 이용하실 수 있어요.
    </p>
    <p style="font-size:13px;line-height:1.6;color:#B8C4D4;margin-bottom:24px;">
      Your payment was completed successfully. You can now access the following channel(s).
    </p>

    <ul style="list-style:none;margin:0 0 24px;padding:0;">
      ${buildChannelListHtml(channels)}
    </ul>

    <table style="width:100%;border-collapse:collapse;font-size:13px;margin-bottom:24px;">
      <tr>
        <td style="padding:8px 0;color:#7A9AB5;border-top:1px solid rgba(255,255,255,.08);">등급 · Tier</td>
        <td style="padding:8px 0;text-align:right;border-top:1px solid rgba(255,255,255,.08);font-weight:700;">${tierLabel}</td>
      </tr>
      <tr>
        <td style="padding:8px 0;color:#7A9AB5;border-top:1px solid rgba(255,255,255,.08);">결제 금액 · Amount</td>
        <td style="padding:8px 0;text-align:right;border-top:1px solid rgba(255,255,255,.08);">${amountText}</td>
      </tr>
      <tr>
        <td style="padding:8px 0;color:#7A9AB5;border-top:1px solid rgba(255,255,255,.08);">이용 만료일 · Expires</td>
        <td style="padding:8px 0;text-align:right;border-top:1px solid rgba(255,255,255,.08);">${expiresText}</td>
      </tr>
      <tr>
        <td style="padding:8px 0;color:#7A9AB5;border-top:1px solid rgba(255,255,255,.08);">거래 번호 · Transaction ID</td>
        <td style="padding:8px 0;text-align:right;border-top:1px solid rgba(255,255,255,.08);font-size:11px;color:#7A9AB5;">${transactionId || '—'}</td>
      </tr>
    </table>

    <a href="https://taerijay.com/" style="display:inline-block;background:#F16B24;color:#0A192F;font-weight:700;font-size:13px;letter-spacing:.06em;text-transform:uppercase;text-decoration:none;padding:12px 22px;border-radius:4px;">
      TAERIJAY 바로가기 · Go to TAERIJAY
    </a>

    <p style="font-size:11px;line-height:1.7;color:#5d6c82;margin-top:28px;">
      본 결제는 PCI-DSS 인증 결제 파트너 Paddle을 통해 처리되었습니다. 카드 정보는 TAERIJAY가 보관하지 않습니다.<br/>
      This payment was processed by our PCI-DSS certified partner Paddle. TAERIJAY never stores your card details.
    </p>
  </div>`;

  try {
    const result = await resend.emails.send({
      from,
      to: email,
      subject,
      html,
    });
    return { skipped: false, result };
  } catch (err) {
    console.error('[sendPaymentEmail] 발송 실패', err);
    return { skipped: false, error: err };
  }
}
