// src/lib/itemHelpers.js
// [channel]/[sub].astro(항목 그리드)와 [channel]/[sub]/[item].astro(개별 상세)에서 공용으로 쓰는 헬퍼.

// title_kr을 URL-safe slug로 변환. 한글은 그대로 유지(인코딩됨), 공백/특수문자만 정리하고
// 동일 sub 안에서 title이 중복될 경우를 대비해 호출부에서 인덱스를 접미사로 덧붙여 유일성을 보장한다.
export function slugifyTitle(title, idx) {
  const base = (title || '')
    .trim()
    .replace(/[\s]+/g, '-')
    .replace(/[^\p{L}\p{N}\-]/gu, '')
    .slice(0, 40);
  return base ? `${base}-${idx + 1}` : `item-${idx + 1}`;
}

// tips_kr/tips_en처럼 "▪ 항목1 ▪ 항목2 ▪ 항목3" 형태로 한 줄에 이어진 텍스트를
// 항목별로 쪼개서 각각 줄바꿈해 보여주기 위한 헬퍼.
// ▪ 구분자가 있으면 그 기준으로, 없으면 문장(마침표) 기준으로 쪼갠다 —
// 그래야 "A함. B함." 처럼 문장 두 개가 한 줄로 붙어 나오는 걸 방지.
export function splitBullets(text) {
  if (!text) return [];
  const parts = text.split('▪').map((s) => s.trim()).filter(Boolean);
  if (parts.length > 1) return parts;
  return splitSentences(text);
}

// desc_kr/desc_en처럼 여러 문장이 한 단락으로 이어진 긴 텍스트를 문장 단위로 쪼개
// 줄바꿈해서 보여주기 위한 헬퍼. 마침표+공백(또는 마침표+끝) 기준으로 분리하고,
// "약 1시간" "10.5%"처럼 숫자 사이 마침표는 건드리지 않는다.
export function splitSentences(text) {
  if (!text) return [];
  const parts = text
    .trim()
    .split(/(?<=[.!?])\s+(?=[^\s])/)
    .map((s) => s.trim())
    .filter(Boolean);
  return parts.length > 0 ? parts : [text.trim()];
}

// addr_kr에서 "서울/부산/제주 ..." 같은 시/도 단위를 최대한 추출.
// item.region이 있으면 그걸 우선 쓰고, 없으면 주소 앞부분에서 시/도명을 뽑아온다.
const SIDO_LIST = ['서울', '부산', '대구', '인천', '광주', '대전', '울산', '세종', '경기', '강원', '충북', '충남', '전북', '전남', '경북', '경남', '제주'];
export function extractSido(item) {
  if (item.region) return item.region.split(/[·,\s]/)[0];
  const addr = item.addr_kr || '';
  const found = SIDO_LIST.find((s) => addr.startsWith(s) || addr.includes(s));
  return found || '';
}

// items 배열에 각 항목의 고유 slug(itemSlug)를 부여해 반환.
// 그리드 페이지와 상세 페이지 양쪽에서 동일한 인덱스 기준으로 slug를 생성해야
// 링크가 어긋나지 않으므로, 반드시 이 함수를 통해서만 slug를 만든다.
export function withItemSlugs(items) {
  return items.map((item, idx) => ({ ...item, itemSlug: slugifyTitle(item.title_kr, idx) }));
}

// price_kr("7,900원" / "약 3만원대" / "1만원 내외" 등)에서 원화 첫 금액을 뽑아
// 대략적인 USD 참고값을 만든다. "가격 확인 필요"처럼 숫자가 없으면 null.
const USD_KRW_RATE = 1400;
export function priceKrToUsdHint(priceKr) {
  if (!priceKr) return '';
  // "3만원" 형태(만 단위) 우선 매칭, 없으면 "7,900원" 형태(일반 숫자) 매칭
  const manMatch = priceKr.match(/([\d,]+)\s*만\s*원/);
  const wonMatch = priceKr.match(/([\d,]+)\s*원/);
  let krw = null;
  if (manMatch) {
    krw = parseFloat(manMatch[1].replace(/,/g, '')) * 10000;
  } else if (wonMatch) {
    krw = parseFloat(wonMatch[1].replace(/,/g, ''));
  }
  if (!krw || Number.isNaN(krw)) return '';
  const usd = krw / USD_KRW_RATE;
  const usdText = usd >= 10 ? Math.round(usd).toString() : usd.toFixed(2);
  return `약 USD ${usdText}`;
}
