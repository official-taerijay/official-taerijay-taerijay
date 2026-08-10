// src/lib/channelCategories.js
// 채널별 카테고리(서브페이지) 정의 — [channel]/[sub].astro의 getStaticPaths와 렌더링 로직에서
// 공통으로 사용. free: true인 카테고리는 로그인/이용권 확인 없이 바로 열람 가능.
// 각 채널 인덱스 페이지(protocol.astro, daiso.astro 등)의 categories/tabs/brands 배열에 정의된
// free 여부와 반드시 일치해야 함.

export const CHANNEL_MAP = {
  entertainment: { color: '#00E5FF', subs: {
    drama: { kr: '드라마', en: 'Drama', free: true },
    movie: { kr: '영화', en: 'Movie', free: true },
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
  'red-green': { color: '#E1261C', subs: {
    // red 탭(균일가 생활용품점 뷰티) — 프리뷰/무료 오픈 3개
    'red-taxfree-instant': { kr: '[RED] 매장 즉시 세금환급', en: '[RED] Instant Tax Refund', free: true },
    'red-mask-pack':       { kr: '[RED] 마스크팩',          en: '[RED] Mask Pack',          free: true },
    'red-trouble-care':    { kr: '[RED] 트러블·진정 케어',    en: '[RED] Trouble & Calming',  free: true },
    // red 탭 — 유료 9개
    'red-skincare':          { kr: '[RED] 스킨케어',           en: '[RED] Skincare' },
    'red-cleanser':          { kr: '[RED] 클렌저 케어',        en: '[RED] Cleanser' },
    'red-color-cosmetics':   { kr: '[RED] 색조',              en: '[RED] Color Cosmetics' },
    'red-haircare':          { kr: '[RED] 헤어케어',           en: '[RED] Hair Care' },
    'red-bodycare':          { kr: '[RED] 바디케어',           en: '[RED] Body Care' },
    'red-perfume':           { kr: '[RED] 향수',              en: '[RED] Perfume' },
    'red-beauty-tools':      { kr: '[RED] 뷰티 소품',          en: '[RED] Beauty Tools' },
    'red-gender-care':       { kr: '[RED] 남성용품·여성용품',    en: '[RED] Men & Women Care' },
    'red-soldout-items':     { kr: '[RED] 품절 대란템·시즌 한정판', en: '[RED] Viral & Seasonal' },
    // green 탭(H&B 스토어) — 프리뷰/무료 오픈 3개
    'green-taxfree-instant': { kr: '[GREEN] 매장 즉시 세금환급', en: '[GREEN] Instant Tax Refund', free: true },
    'green-mask-pack':       { kr: '[GREEN] 마스크팩',          en: '[GREEN] Mask Pack',          free: true },
    'green-trouble-care':    { kr: '[GREEN] 트러블·진정 케어',    en: '[GREEN] Trouble & Calming',  free: true },
    // green 탭 — 유료 9개
    'green-skincare':          { kr: '[GREEN] 스킨케어',           en: '[GREEN] Skincare' },
    'green-cleanser':          { kr: '[GREEN] 클렌저 케어',        en: '[GREEN] Cleanser' },
    'green-color-cosmetics':   { kr: '[GREEN] 색조',              en: '[GREEN] Color Cosmetics' },
    'green-haircare':          { kr: '[GREEN] 헤어케어',           en: '[GREEN] Hair Care' },
    'green-bodycare':          { kr: '[GREEN] 바디케어',           en: '[GREEN] Body Care' },
    'green-perfume':           { kr: '[GREEN] 향수',              en: '[GREEN] Perfume' },
    'green-beauty-tools':      { kr: '[GREEN] 뷰티 소품',          en: '[GREEN] Beauty Tools' },
    'green-gender-care':       { kr: '[GREEN] 남성용품·여성용품',    en: '[GREEN] Men & Women Care' },
    'green-soldout-items':     { kr: '[GREEN] 품절 대란템·시즌 한정판', en: '[GREEN] Viral & Seasonal' },
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
