// src/lib/mailer.js
// 이메일 공통 유틸 (Resend). 환경변수:
//   RESEND_API_KEY      — Resend API 키 (없으면 발송 건너뜀)
//   RESEND_FROM         — 발신자 (예: "TAERIJAY <noreply@taerijay.com>") · 도메인 인증 필요
//   ADMIN_NOTIFY_EMAIL  — 운영자 알림 수신 주소 (쉼표로 여러 개 가능, 기본 taerijay@gmail.com)

import { Resend } from 'resend';

export function escapeHtml(s = '') {
  return String(s).replace(/[&<>"']/g, (c) => ({ '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;', "'": '&#39;' }[c]));
}

export function getAdminRecipients() {
  const raw = import.meta.env.ADMIN_NOTIFY_EMAIL || 'taerijay@gmail.com';
  return raw.split(',').map((s) => s.trim()).filter(Boolean);
}

// 한국시간(KST) 기준 날짜 YYYY-MM-DD
export function formatKstDate(ms) {
  const d = new Date(ms + 9 * 60 * 60 * 1000);
  return d.toISOString().slice(0, 10);
}

export function formatKstDateTime(ms) {
  const d = new Date(ms + 9 * 60 * 60 * 1000);
  return d.toISOString().slice(0, 16).replace('T', ' ') + ' KST';
}

export async function sendMail({ to, subject, html, replyTo }) {
  const apiKey = import.meta.env.RESEND_API_KEY;
  if (!apiKey) {
    console.warn('[mailer] RESEND_API_KEY 미설정 — 발송 건너뜀', { to, subject });
    return { skipped: true };
  }
  const resend = new Resend(apiKey);
  const from = import.meta.env.RESEND_FROM || 'TAERIJAY <onboarding@resend.dev>';
  try {
    const result = await resend.emails.send({ from, to, subject, html, ...(replyTo ? { reply_to: replyTo } : {}) });
    if (result?.error) {
      console.error('[mailer] Resend 오류', result.error);
      return { skipped: false, error: result.error };
    }
    return { skipped: false, result };
  } catch (err) {
    console.error('[mailer] 발송 실패', err);
    return { skipped: false, error: err };
  }
}

// 고객용 공통 레이아웃
export function wrapCustomerHtml(label, inner) {
  return `
  <div style="font-family:-apple-system,BlinkMacSystemFont,'Segoe UI',Roboto,'Apple SD Gothic Neo','Malgun Gothic',sans-serif;max-width:560px;margin:0 auto;background:#0A192F;color:#FBF9F4;padding:32px 24px;border-radius:8px;">
    <div style="font-size:22px;font-weight:800;letter-spacing:.06em;margin-bottom:4px;">TAERIJAY<span style="color:#F16B24;font-style:italic;">+</span></div>
    <div style="font-size:11px;letter-spacing:.2em;text-transform:uppercase;color:#7A9AB5;margin-bottom:28px;">${label}</div>
    ${inner}
    <p style="font-size:11px;line-height:1.7;color:#5d6c82;margin-top:28px;border-top:1px solid rgba(255,255,255,.08);padding-top:16px;">
      문의 · Contact: <a href="mailto:official@taerijay.com" style="color:#7A9AB5;">official@taerijay.com</a> · <a href="https://taerijay.com" style="color:#7A9AB5;">taerijay.com</a>
    </p>
  </div>`;
}

export function btn(href, text) {
  return `<a href="${href}" style="display:inline-block;background:#F16B24;color:#0A192F;font-weight:700;font-size:13px;letter-spacing:.06em;text-decoration:none;padding:12px 22px;border-radius:4px;">${text}</a>`;
}

export function row(k, v) {
  return `<tr>
    <td style="padding:8px 0;color:#7A9AB5;border-top:1px solid rgba(255,255,255,.08);">${k}</td>
    <td style="padding:8px 0;text-align:right;border-top:1px solid rgba(255,255,255,.08);">${v}</td>
  </tr>`;
}

// 운영자용 단순 레이아웃
export function wrapAdminHtml(title, rows) {
  return `
  <div style="font-family:-apple-system,BlinkMacSystemFont,'Segoe UI',sans-serif;max-width:520px;margin:0 auto;color:#111;">
    <h3 style="margin:0 0 12px;">${title}</h3>
    <table style="width:100%;border-collapse:collapse;font-size:13px;">
      ${rows.map(([k, v]) => `<tr><td style="padding:6px 8px;background:#f3f4f6;width:140px;border:1px solid #e5e7eb;">${k}</td><td style="padding:6px 8px;border:1px solid #e5e7eb;">${v}</td></tr>`).join('')}
    </table>
  </div>`;
}
