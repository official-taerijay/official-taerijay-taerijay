// src/lib/channelCategories.js
// 채널별 카테고리(서브페이지) 정의 — [channel]/[sub].astro의 getStaticPaths와 렌더링 로직에서
// 공통으로 사용. free: true인 카테고리는 로그인/이용권 확인 없이 바로 열람 가능.
// 각 채널 인덱스 페이지(protocol.astro, daiso.astro 등)의 categories/tabs/brands 배열에 정의된
// free 여부와 반드시 일치해야 함.

export const CHANNEL_MAP = {
  entertainment: { color: '#00E5FF', subs: {
    drama: { kr: '드라마', en: 'Drama', free: true },
    movie: { kr: '영화', en: 'Movie', free: true },
    variety: { kr: '예능', en: 'Variety', free: true },
  }},
  protocol: { color: '#F16B24', subs: {
    // 프리뷰/무료 오픈 5개
    'legal-info':        { kr: '입국 법적 정보',       en: 'Entry & Legal Info',    free: true },
    'emergency-help':     { kr: '응급·긴급 통역',       en: 'Emergency Help',         free: true },
    'incheon-airport':    { kr: '인천공항',            en: 'Incheon Airport',        free: true },
    'gimpo-airport':      { kr: '김포공항',            en: 'Gimpo Airport',          free: true },
    'jeju-airport':       { kr: '제주공항',            en: 'Jeju Airport',           free: true },
    // 유료 7개
    transit:              { kr: '대중교통',            en: 'Public Transit' },
    'mobile-number-wifi': { kr: '번호 발급·와이파이',    en: 'Phone Number & WiFi' },
    'essential-apps':     { kr: '필수 앱·웹사이트',      en: 'Essential Apps' },
    kent:                 { kr: 'K-엔터 회사 위치',      en: 'K-Entertainment' },
    restaurant:           { kr: '맛집',                en: 'Restaurant' },
    cafe:                 { kr: '카페',                en: 'Cafe' },
    hotspot:              { kr: '그 외 핫템·핫플',       en: 'Hot Items & Spots' },
  }},
  mini: { color: '#e8e4dc', subs: {
    // 프리뷰/무료 오픈 3개
    'booking-tips':  { kr: '예약·결제 서비스 안내', en: 'Booking & Payment Tips', free: true },
    'emergency-help': { kr: '응급·긴급 통역',        en: 'Emergency Help',          free: true },
    '3hour':          { kr: '3시간 코스 (서울 12개)', en: '3-Hour Course',           free: true },
    // 유료 9개
    '1day':           { kr: '1일 코스',   en: '1-Day Course' },
    '2day':           { kr: '2일 코스',   en: '2-Day Course' },
    '3day':           { kr: '3일 코스',   en: '3-Day Course' },
    region:           { kr: '지역별로',   en: 'By Region' },
    recommend:        { kr: '추천코스',   en: 'Recommended' },
    kdrama:           { kr: 'K-드라마 촬영지', en: 'K-Drama Locations' },
    nightview:        { kr: '야경 명소 코스', en: 'Night View Course' },
    photo:            { kr: '사진맛집 코스', en: 'Photo Spot Course' },
    indoor:           { kr: '실내 코스 (우천 대비)', en: 'Indoor Course' },
  }},
  red: { color: '#E1261C', subs: {
    // 프리뷰/무료 오픈 3개
    'taxfree-instant': { kr: '매장 즉시 세금환급', en: 'Instant Tax Refund', free: true },
    'mask-pack':       { kr: '마스크팩',          en: 'Mask Pack',          free: true },
    'trouble-care':    { kr: '트러블·진정 케어',    en: 'Trouble & Calming',  free: true },
    // 유료 9개
    skincare:          { kr: '스킨케어',           en: 'Skincare' },
    cleanser:          { kr: '클렌저 케어',        en: 'Cleanser' },
    'color-cosmetics': { kr: '색조',              en: 'Color Cosmetics' },
    haircare:          { kr: '헤어케어',           en: 'Hair Care' },
    bodycare:          { kr: '바디케어',           en: 'Body Care' },
    perfume:           { kr: '향수',              en: 'Perfume' },
    'beauty-tools':    { kr: '뷰티 소품',          en: 'Beauty Tools' },
    'gender-care':     { kr: '남성용품·여성용품',    en: 'Men & Women Care' },
    'soldout-items':   { kr: '품절 대란템·시즌 한정판', en: 'Viral & Seasonal' },
  }},
  green: { color: '#6F8B2E', subs: {
    // 프리뷰/무료 오픈 3개
    'taxfree-instant': { kr: '매장 즉시 세금환급', en: 'Instant Tax Refund', free: true },
    'mask-pack':       { kr: '마스크팩',          en: 'Mask Pack',          free: true },
    'trouble-care':    { kr: '트러블·진정 케어',    en: 'Trouble & Calming',  free: true },
    // 유료 9개
    skincare:          { kr: '스킨케어',           en: 'Skincare' },
    cleanser:          { kr: '클렌저 케어',        en: 'Cleanser' },
    'color-cosmetics': { kr: '색조',              en: 'Color Cosmetics' },
    haircare:          { kr: '헤어케어',           en: 'Hair Care' },
    bodycare:          { kr: '바디케어',           en: 'Body Care' },
    perfume:           { kr: '향수',              en: 'Perfume' },
    'beauty-tools':    { kr: '뷰티 소품',          en: 'Beauty Tools' },
    'gender-care':     { kr: '남성용품·여성용품',    en: 'Men & Women Care' },
    'soldout-items':   { kr: '품절 대란템·시즌 한정판', en: 'Viral & Seasonal' },
  }},
  'mart-convenience': { color: '#FFDD00', subs: {
    // 브랜드별 페이지 1개씩(무료 5개 + 유료 25개 = TOP 30을 한 페이지 안에서 등급으로 구분)
    emart:              { kr: '이마트 핫템 TOP 30',       en: 'E-Mart Top 30',    freeCount: 5 },
    nobrand:            { kr: '노브랜드 핫템 TOP 30',      en: 'No Brand Top 30',  freeCount: 5 },
    traders:            { kr: '트레이더스 핫템 TOP 30',    en: 'Traders Top 30',   freeCount: 5 },
    emart24:             { kr: '이마트24 핫템 TOP 30',      en: 'emart24 Top 30',   freeCount: 5 },
    cu:                  { kr: 'CU 핫템 TOP 30',            en: 'CU Top 30',        freeCount: 5 },
    gs25:                { kr: 'GS25 핫템 TOP 30',          en: 'GS25 Top 30',      freeCount: 5 },
    seveneleven:         { kr: '세븐일레븐 핫템 TOP 30',    en: '7-Eleven Top 30',  freeCount: 5 },
    // 추가 무료/유료 카테고리
    'taxfree-instant':   { kr: '매장 즉시 세금환급',       en: 'Instant Tax Refund', free: true },
    'gender-care':       { kr: '남성용품·여성용품',        en: 'Men & Women Care' },
  }},
};

/**
 * @typedef {{ kr?: string, en?: string, free?: boolean, freeCount?: number }} CategoryMeta
 */

// 시트에서 자동 도출한 카테고리 목록(deriveCategoriesFromRows 결과)을 CHANNEL_MAP에 병합.
// - 시트에 sub_kr/sub_en/sub_free가 채워진 카테고리는 그 값을 우선 사용(코드 재배포 없이 이름/무료여부 변경 가능)
// - 시트에만 있고 CHANNEL_MAP에 없는 새 sub는 자동으로 카테고리로 추가됨(새 카테고리를 시트에서 바로 생성)
// - CHANNEL_MAP에만 있고 시트에 해당 sub 행이 하나도 없는 카테고리는 그대로 유지(빈 카테고리로 표시, "준비중" 안내)
// - freeCount처럼 시트 컬럼으로 표현 안 되는 값은 기존 CHANNEL_MAP 설정을 그대로 보존
/**
 * @param {string} channel
 * @param {Array<{slug: string, kr: string, en: string, free: boolean, order: number}>} sheetCategories
 * @returns {{ color: string, subs: Record<string, CategoryMeta> } | null}
 */
export function mergeSheetCategories(channel, sheetCategories) {
  const base = CHANNEL_MAP[channel];
  if (!base) return null;
  /** @type {Record<string, CategoryMeta>} */
  const subs = { ...base.subs };
  const order = Object.keys(subs);

  (sheetCategories || []).forEach((cat) => {
    const existing = subs[cat.slug];
    subs[cat.slug] = {
      ...existing,
      kr: cat.kr || existing?.kr || cat.slug,
      en: cat.en || existing?.en || cat.slug,
      free: existing?.freeCount ? existing.free : (cat.free || existing?.free || false),
      // freeCount(브랜드형 채널)는 시트 sub_free로 대체되지 않도록 기존 값 유지
      ...(existing?.freeCount ? { freeCount: existing.freeCount } : {}),
    };
    if (!order.includes(cat.slug)) order.push(cat.slug);
  });

  // sub_order가 있는 시트 카테고리는 시트 순서를 따르고, 없으면 CHANNEL_MAP 정의 순서 유지
  const sheetOrderMap = new Map((sheetCategories || []).map((c) => [c.slug, c.order]));
  const sortedOrder = [...order].sort((a, b) => {
    const oa = sheetOrderMap.has(a) ? sheetOrderMap.get(a) : Number.MAX_SAFE_INTEGER;
    const ob = sheetOrderMap.has(b) ? sheetOrderMap.get(b) : Number.MAX_SAFE_INTEGER;
    if (oa !== ob) return oa - ob;
    return order.indexOf(a) - order.indexOf(b);
  });

  /** @type {Record<string, CategoryMeta>} */
  const sortedSubs = {};
  sortedOrder.forEach((slug) => { sortedSubs[slug] = subs[slug]; });

  return { ...base, subs: sortedSubs };
}
