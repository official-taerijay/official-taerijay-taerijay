// src/pages/api/translate.js
// 모바일 언어팩 전용 — Google Cloud Translation API(v2, Basic)를 이용해 텍스트 배열을 한 번에 번역.
// 구글 웹사이트 번역 위젯(translate.google.com 위젯)이 모바일 브라우저에서 구조적으로 불안정한 문제를
// 근본적으로 해결하기 위해, 모바일에서는 이 API로 직접 텍스트를 번역해 받아온다.
//
// 1차 지원 언어(방한 관광객 비중 기준으로 확정): zh-CN, zh-TW, zh-HK, ja, th
// 2차 확장(2026-08): vi(베트남), ms(말레이시아/인도네시아 — Bahasa Melayu·Indonesia 상호 이해 가능해 단일 코드로 통합 대응)
// (한국어 원문은 번역 요청 자체가 필요 없고, 영어는 title_en 등 원래도 고정 데이터로 존재)
//
// 요청 형식: POST { texts: string[], target: 'zh-CN' | 'zh-TW' | 'zh-HK' | 'ja' | 'th' | 'vi' | 'ms' }
// 응답 형식: { translations: string[] }
//
// 중요: 클라이언트(Layout.astro의 translateViaApi)가 실제로 보내는 texts는 "-en" 클래스
// 요소의 영어 원문이다(한국어가 아님). 과거 이 엔드포인트가 source: 'ko'로 고정 요청했는데,
// Google Translation API는 source를 지정하면 자동 언어감지를 하지 않고 그 언어라고 강제로
// 취급해 번역한다. 그 결과 "SINGLE", "PRO", "SELECT TIER"처럼 짧고 대문자인 영어 텍스트가
// (가짜) 한국어 텍스트로 취급되어 NMT가 "번역할 의미 없는 고유명사"로 판단, 원문 그대로
// 돌려주는 사례가 잦았다 — 이것이 "언어 전환 시 일부 텍스트만 번역이 안 되는" 증상의 원인.
// source를 생략해 자동 감지를 쓰면 이 텍스트를 실제로 영어로 인식해 정상 번역된다.

export const prerender = false;

// Google Translation API가 실제로 쓰는 언어 코드로 변환.
// zh-HK는 별도 코드가 없어 zh-TW(번체)로 대체 요청.
const TARGET_LANG_MAP = {
  'zh-CN': 'zh-CN',
  'zh-TW': 'zh-TW',
  'zh-HK': 'zh-TW',
  ja: 'ja',
  th: 'th',
  vi: 'vi',
  ms: 'ms',
};

const SUPPORTED_TARGETS = new Set(Object.keys(TARGET_LANG_MAP));

export async function POST({ request }) {
  const apiKey = import.meta.env.GOOGLE_TRANSLATE_API_KEY;
  if (!apiKey) {
    console.error('[translate] GOOGLE_TRANSLATE_API_KEY 미설정');
    return new Response(JSON.stringify({ error: 'server not configured' }), { status: 500 });
  }

  let body;
  try {
    body = await request.json();
  } catch {
    return new Response(JSON.stringify({ error: 'invalid json' }), { status: 400 });
  }

  const texts = Array.isArray(body.texts) ? body.texts.filter((t) => typeof t === 'string' && t.trim()) : [];
  const target = body.target;

  if (!texts.length) {
    return new Response(JSON.stringify({ translations: [] }), {
      status: 200,
      headers: { 'content-type': 'application/json' },
    });
  }
  if (!SUPPORTED_TARGETS.has(target)) {
    return new Response(JSON.stringify({ error: `unsupported target language: ${target}` }), { status: 400 });
  }

  const googleTarget = TARGET_LANG_MAP[target];

  // 한 번에 최대 128개 문자열(구글 API 권장 배치 크기 여유있게 하회) 씩만 처리 — 과도한 요청 방지
  const MAX_BATCH = 100;
  const batch = texts.slice(0, MAX_BATCH);

  try {
    const url = `https://translation.googleapis.com/language/translate/v2?key=${apiKey}`;
    const res = await fetch(url, {
      method: 'POST',
      headers: { 'content-type': 'application/json' },
      body: JSON.stringify({
        q: batch,
        target: googleTarget,
        // source를 생략 — 실제 원문은 영어이므로 자동 감지에 맡긴다 (위 주석 참고)
        format: 'text',
      }),
    });

    if (!res.ok) {
      const errText = await res.text();
      console.error('[translate] Google API error', res.status, errText);
      return new Response(JSON.stringify({ error: 'translation api error' }), { status: 502 });
    }

    const data = await res.json();
    const translations = (data?.data?.translations || []).map((t) => t.translatedText);

    return new Response(JSON.stringify({ translations }), {
      status: 200,
      headers: {
        'content-type': 'application/json',
        // 같은 텍스트+언어 조합은 CDN/브라우저에서 하루 동안 재사용 (비용 절감)
        'cache-control': 'public, max-age=86400',
      },
    });
  } catch (e) {
    console.error('[translate] request failed', e);
    return new Response(JSON.stringify({ error: 'request failed' }), { status: 500 });
  }
}
