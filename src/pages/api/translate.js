// src/pages/api/translate.js
// 모바일 언어팩 전용 — Google Cloud Translation API(v2, Basic)를 이용해 텍스트 배열을 한 번에 번역.
// 구글 웹사이트 번역 위젯(translate.google.com 위젯)이 모바일 브라우저에서 구조적으로 불안정한 문제를
// 근본적으로 해결하기 위해, 모바일에서는 이 API로 직접 텍스트를 번역해 받아온다.
//
// 1차 지원 언어(방한 관광객 비중 기준으로 확정): zh-CN, zh-TW, zh-HK, ja, th
// (한국어 원문은 번역 요청 자체가 필요 없고, 영어는 title_en 등 원래도 고정 데이터로 존재)
//
// 요청 형식: POST { texts: string[], target: 'zh-CN' | 'zh-TW' | 'zh-HK' | 'ja' | 'th' }
// 응답 형식: { translations: string[] }

export const prerender = false;

// Google Translation API가 실제로 쓰는 언어 코드로 변환.
// zh-HK는 별도 코드가 없어 zh-TW(번체)로 대체 요청.
const TARGET_LANG_MAP = {
  'zh-CN': 'zh-CN',
  'zh-TW': 'zh-TW',
  'zh-HK': 'zh-TW',
  ja: 'ja',
  th: 'th',
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
        source: 'ko',
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
