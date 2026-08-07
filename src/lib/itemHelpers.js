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
// 항목별로 쪼개서 각각 줄바꿈해 보여주기 위한 헬퍼. ▪ 구분자가 없으면 원문 한 줄 그대로 반환.
export function splitBullets(text) {
  if (!text) return [];
  const parts = text.split('▪').map((s) => s.trim()).filter(Boolean);
  return parts.length > 1 ? parts : [text.trim()];
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
