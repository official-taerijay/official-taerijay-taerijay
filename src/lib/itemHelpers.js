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
// 주소가 "경상북도/전라남도" 같은 정식 행정구역명으로 시작하는 경우도 축약형(SIDO_LIST) 표준으로 인식시키기 위한 매핑.
// 정식명이 축약형보다 먼저 매칭되도록 별도 리스트로 우선 검사한다.
const SIDO_FULL_MAP = {
  '서울특별시': '서울', '부산광역시': '부산', '대구광역시': '대구', '인천광역시': '인천',
  '광주광역시': '광주', '대전광역시': '대전', '울산광역시': '울산', '세종특별자치시': '세종',
  '경기도': '경기', '강원특별자치도': '강원', '강원도': '강원',
  '충청북도': '충북', '충청남도': '충남', '전북특별자치도': '전북', '전라북도': '전북', '전라남도': '전남',
  '경상북도': '경북', '경상남도': '경남', '제주특별자치도': '제주', '제주도': '제주',
};
// item.region(mini 채널처럼 시트에 이미 지역이 채워진 경우)의 표기 편차를 같은 지역칩으로 통합.
// "강원도"/"강원특별자치도" → "강원", "경기북부"/"경기남부"(세분화 코스명) → "경기" 등.
// SIDO_LIST에 이미 있는 값(서울, 부산 등)은 그대로 두고, 여기 없는 표기만 별칭으로 매핑한다.
const REGION_ALIAS_MAP = {
  ...SIDO_FULL_MAP,
  '경기북부': '경기',
  '경기남부': '경기',
};
function normalizeRegionToken(token) {
  return REGION_ALIAS_MAP[token] || token;
}
export function extractSido(item) {
  if (item.region) return normalizeRegionToken(item.region.split(/[·,\s]/)[0]);
  const addr = item.addr_kr || '';
  const fullMatch = Object.keys(SIDO_FULL_MAP).find((full) => addr.startsWith(full) || addr.includes(full));
  if (fullMatch) return SIDO_FULL_MAP[fullMatch];
  const found = SIDO_LIST.find((s) => addr.startsWith(s) || addr.includes(s));
  return found || '';
}

// 시/도 한글명 → 영문명. 지역 그룹 헤더·필터 칩에 한글/영문 병기할 때 사용.
// SIDO_LIST에 없는 세부 지역명(예: "속초", "수원" 등 시/군 단위)은 그대로 로마자 표기를 대문자로 보여준다.
const SIDO_EN_MAP = {
  '서울': 'Seoul', '부산': 'Busan', '대구': 'Daegu', '인천': 'Incheon', '광주': 'Gwangju',
  '대전': 'Daejeon', '울산': 'Ulsan', '세종': 'Sejong', '경기': 'Gyeonggi', '강원': 'Gangwon',
  '충북': 'Chungbuk', '충남': 'Chungnam', '전북': 'Jeonbuk', '전남': 'Jeonnam',
  '경북': 'Gyeongbuk', '경남': 'Gyeongnam', '제주': 'Jeju',
  '속초': 'Sokcho', '수원': 'Suwon', '전주': 'Jeonju', '여수': 'Yeosu', '경주': 'Gyeongju',
  '강릉': 'Gangneung', '춘천': 'Chuncheon', '통영': 'Tongyeong', '거제': 'Geoje', '남해': 'Namhae',
};
export function sidoToEn(sido) {
  return SIDO_EN_MAP[sido] || sido;
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
