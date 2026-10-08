// src/lib/sendWelcomeEmail.js
// 신규 가입자 환영 메일(본인) + 운영자 알림 메일.

import { sendMail, getAdminRecipients, wrapCustomerHtml, wrapAdminHtml, btn, escapeHtml, formatKstDateTime } from './mailer.js';

export async function sendWelcomeEmails({ email, name = '', joinedAtMs = Date.now() }) {
  const safeName = escapeHtml(name || email.split('@')[0]);

  const customerHtml = wrapCustomerHtml('Welcome', `
    <p style="font-size:16px;line-height:1.6;margin:0 0 6px;"><strong>${safeName}</strong>님, TAERIJAY 가입을 환영합니다!</p>
    <p style="font-size:13px;line-height:1.6;color:#B8C4D4;margin:0 0 22px;">Welcome to TAERIJAY — your Korea travel guide for foreign visitors.</p>

    <p style="font-size:14px;line-height:1.7;margin:0 0 10px;">TAERIJAY는 한국을 방문하는 외국인 여행자를 위한 정보 플랫폼입니다. 채널은 아래 5가지로 구성됩니다.</p>
    <ul style="margin:0 0 22px;padding-left:18px;font-size:13px;line-height:1.8;color:#B8C4D4;">
      <li><strong style="color:#F16B24;">protocol</strong> — 공항·세관·대중교통·프랜차이즈 필수 규약 · Airport, customs, transit &amp; franchises</li>
      <li><strong style="color:#F16B24;">mini</strong> — 거점 도시별 여행 코스·핫플 · City travel courses &amp; hot spots</li>
      <li><strong style="color:#F16B24;">red</strong> — 다이소 인기 아이템 · Daiso picks</li>
      <li><strong style="color:#F16B24;">green</strong> — 올리브영 스킨케어 트렌드 · Olive Young trends</li>
      <li><strong style="color:#F16B24;">mart+convenience</strong> — 마트·편의점 통합 DB · Mart &amp; convenience stores</li>
    </ul>

    <p style="font-size:13px;line-height:1.7;color:#B8C4D4;margin:0 0 22px;">
      각 채널은 이용권 구매 후 열람할 수 있으며, 이용권은 <strong>자동 갱신되지 않습니다</strong>. 결제일로부터 1년간 사용하실 수 있어요.<br/>
      Channels unlock with a pass. Passes <strong>do not auto-renew</strong> and are valid for 1 year from purchase.
    </p>

    ${btn('https://taerijay.com/', 'TAERIJAY 둘러보기 · Explore')}
  `);

  const adminHtml = wrapAdminHtml('신규 가입자 알림', [
    ['이메일', escapeHtml(email)],
    ['이름', escapeHtml(name || '—')],
    ['가입 시각', formatKstDateTime(joinedAtMs)],
    ['가입 방식', 'Google 로그인'],
  ]);

  const [customer, admin] = await Promise.all([
    sendMail({ to: email, subject: '[TAERIJAY] 가입을 환영합니다 · Welcome to TAERIJAY', html: customerHtml }),
    sendMail({ to: getAdminRecipients(), subject: `[TAERIJAY·운영] 신규 가입: ${email}`, html: adminHtml }),
  ]);
  return { customer, admin };
}
