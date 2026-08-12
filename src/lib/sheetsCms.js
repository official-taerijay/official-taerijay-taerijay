// src/lib/sheetsCms.js
// 구글 시트를 "실시간 CMS"처럼 쓰기 위한 유틸.
// 시트를 "링크가 있는 모든 사용자 - 뷰어"로 공유해두면, 아래 export?format=csv 주소로
// 로그인 없이 최신 데이터를 그대로 가져올 수 있음 (수정 후 반영까지 보통 수 분 내).
//
// 파일 구조 (4개 구글시트 파일):
//   - entertainment: 독립 시트 파일 1개
//   - protocol:       독립 시트 파일 1개
//   - mini:           독립 시트 파일 1개
//   - shopping:       파일 1개 안에 탭 3개(red / green / mart-convenience) — gid로 탭 구분
//     (구 daiso/oliveyoung/emart-convenience 탭을 2026-08 리브랜딩으로 red/green/mart-convenience로 개명)
//
// 실제 파일 ID/탭 gid는 사용자가 구글시트를 만든 뒤 채워 넣는다 (.env 또는 아래 상수 직접 수정).
//
// 구글시트가 아직 연결되지 않은 채널은 src/data/{channel}.json에 내장된 데이터를 사용한다.
// 이렇게 하면 지금 당장은 코드에 포함된 콘텐츠로 사이트가 동작하고, 나중에 구글시트 ID를
// 채워 넣는 순간 자동으로 구글시트가 우선 적용된다(재배포 없이 실시간 반영).

import entertainmentData from '../data/entertainment.json';
import protocolData from '../data/protocol.json';
import miniData from '../data/mini.json';
import daisoData from '../data/daiso.json';
import oliveyoungData from '../data/oliveyoung.json';
import emartConvenienceData from '../data/emart-convenience.json';

// LOCAL_FALLBACK의 키는 라우팅 slug(red/green) 기준. 데이터 파일 자체는 daiso.json/oliveyoung.json
// 그대로 재사용(내용 동일, 파일명만 구 브랜드명 유지 — 필요 시 리네이밍 가능).
const LOCAL_FALLBACK = {
  entertainment: entertainmentData,
  protocol: protocolData,
  mini: miniData,
  red: daisoData,
  green: oliveyoungData,
  'mart-convenience': emartConvenienceData,
};

// 채널 -> 구글 시트 파일 ID 매핑
export const SHEET_IDS = {
  entertainment: import.meta.env.SHEET_ID_ENTERTAINMENT || '',
  protocol: import.meta.env.SHEET_ID_PROTOCOL || '',
  mini: import.meta.env.SHEET_ID_MINI || '',
  // red / green / mart-convenience는 한 파일 안의 서로 다른 탭(gid)
  shopping: import.meta.env.SHEET_ID_SHOPPING || '',
};

// shopping 파일 안에서 채널별 탭 gid (구글시트 하단 탭 클릭 시 URL의 #gid=숫자 부분)
export const SHOPPING_TAB_GID = {
  red: import.meta.env.SHEET_GID_RED || import.meta.env.SHEET_GID_DAISO || '0',
  green: import.meta.env.SHEET_GID_GREEN || import.meta.env.SHEET_GID_OLIVEYOUNG || '',
  'mart-convenience': import.meta.env.SHEET_GID_MART_CONVENIENCE || import.meta.env.SHEET_GID_EMART_CONVENIENCE || '',
};

// 채널 -> (파일 ID, 탭 gid) 조회
function resolveSheetTarget(channel) {
  if (channel === 'red' || channel === 'green' || channel === 'mart-convenience') {
    return { id: SHEET_IDS.shopping, gid: SHOPPING_TAB_GID[channel] };
  }
  return { id: SHEET_IDS[channel], gid: '0' };
}

function sheetUrl(id, gid) {
  const gidPart = gid ? `&gid=${gid}` : '';
  return `https://docs.google.com/spreadsheets/d/${id}/export?format=csv${gidPart}`;
}

// 아주 단순한 CSV 파서 (따옴표로 감싼 필드/콤마/줄바꿈 처리)
function parseCsv(text) {
  const rows = [];
  let row = [];
  let field = '';
  let inQuotes = false;

  for (let i = 0; i < text.length; i++) {
    const c = text[i];
    if (inQuotes) {
      if (c === '"') {
        if (text[i + 1] === '"') { field += '"'; i++; }
        else inQuotes = false;
      } else {
        field += c;
      }
    } else {
      if (c === '"') inQuotes = true;
      else if (c === ',') { row.push(field); field = ''; }
      else if (c === '\n') { row.push(field); rows.push(row); row = []; field = ''; }
      else if (c === '\r') { /* skip */ }
      else field += c;
    }
  }
  if (field.length || row.length) { row.push(field); rows.push(row); }

  if (!rows.length) return [];
  const header = rows[0].map((h) => h.trim());
  return rows.slice(1)
    .filter((r) => r.some((v) => v && v.trim() !== ''))
    .map((r) => {
      const obj = {};
      header.forEach((h, idx) => { obj[h] = (r[idx] ?? '').trim(); });
      return obj;
    });
}

// publish_at(게시예정일) 컬럼 기준으로 아직 게시일이 안 된 행은 제외.
// 값이 비어있으면 즉시 게시로 취급. 형식: YYYY-MM-DD
function filterByPublishDate(rows, now = new Date()) {
  const today = now.toISOString().slice(0, 10);
  return rows.filter((r) => {
    const pub = (r.publish_at || r['게시예정일'] || '').trim();
    if (!pub) return true;
    return pub <= today;
  });
}

// channel: 'entertainment' | 'protocol' | 'mini' | 'red' | 'green' | 'mart-convenience'
export async function fetchChannelRows(channel) {
  const { id, gid } = resolveSheetTarget(channel);

  // 구글시트 ID가 아직 설정되지 않은 채널은 내장된 로컬 데이터를 사용
  if (!id) {
    const fallback = LOCAL_FALLBACK[channel];
    if (!fallback) throw new Error(`no data available for channel: ${channel}`);
    return filterByPublishDate(fallback);
  }

  try {
    const res = await fetch(sheetUrl(id, gid));
    if (!res.ok) throw new Error(`sheet fetch failed: ${res.status}`);
    const text = await res.text();
    const rows = parseCsv(text);
    return filterByPublishDate(rows);
  } catch (e) {
    // 구글시트 fetch가 일시적으로 실패해도 내장 데이터로 폴백해 콘텐츠가 완전히 비지 않도록 함
    const fallback = LOCAL_FALLBACK[channel];
    if (fallback) {
      console.error(`[sheetsCms] sheet fetch failed for ${channel}, falling back to local data:`, e);
      return filterByPublishDate(fallback);
    }
    throw e;
  }
}

// 하위호환: 기존 sheetKey 기반 호출부(sheet-data.js)를 위해 유지
export async function fetchSheetRows(sheetKey) {
  return fetchChannelRows(sheetKey);
}

// ── 카테고리(서브페이지) 자동 도출 ──────────────────────────────────────
// 코드에 카테고리를 하드코딩하지 않고, 시트의 항목 행에 있는
// sub / sub_kr / sub_en / sub_free / sub_order 컬럼만으로 카테고리 목록을 만든다.
// → 시트에 새 sub 값을 가진 행을 하나만 추가해도 그 카테고리가 자동 생성되고,
//   그 sub의 모든 행을 지우면 카테고리도 자동으로 사라진다(재배포 불필요).
//
// 필요 컬럼(항목 시트에 추가):
//   sub        : 카테고리 slug (예: mask-pack) — 기존에 이미 쓰던 컬럼
//   sub_kr     : 카테고리 한글명 (예: 마스크팩) — 같은 sub의 모든 행에 동일하게 채우되,
//                하나만 채워도 그 값을 그 카테고리 전체 이름으로 사용
//   sub_en     : 카테고리 영문명 (예: Mask Pack)
//   sub_free   : "TRUE"/"1"/"free" 등 → 무료 카테고리 표시(FREE 배지 + 로그인 없이 열람)
//   sub_order  : 정렬 순서(숫자, 작을수록 앞) — 비우면 시트에 처음 등장한 순서 사용
export function deriveCategoriesFromRows(rows) {
  const bySlug = new Map();
  rows.forEach((row, idx) => {
    const slug = (row.sub || '').trim();
    if (!slug) return;
    if (!bySlug.has(slug)) {
      bySlug.set(slug, {
        slug,
        kr: '',
        en: '',
        free: false,
        order: idx,
        count: 0,
      });
    }
    const cat = bySlug.get(slug);
    cat.count += 1;
    if (!cat.kr && row.sub_kr) cat.kr = row.sub_kr.trim();
    if (!cat.en && row.sub_en) cat.en = row.sub_en.trim();
    const freeVal = (row.sub_free || '').trim().toLowerCase();
    if (['true', '1', 'free', 'y', 'yes'].includes(freeVal)) cat.free = true;
    const orderVal = (row.sub_order || '').trim();
    if (orderVal && !Number.isNaN(Number(orderVal))) cat.order = Number(orderVal);
  });
  return [...bySlug.values()].sort((a, b) => a.order - b.order);
}

// fetchChannelRows + deriveCategoriesFromRows를 한 번에 — 채널 인덱스 페이지에서 사용.
export async function fetchChannelCategories(channel) {
  const rows = await fetchChannelRows(channel);
  return deriveCategoriesFromRows(rows);
}
