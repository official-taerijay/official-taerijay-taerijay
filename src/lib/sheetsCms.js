// src/lib/sheetsCms.js
// 구글 시트를 "실시간 CMS"처럼 쓰기 위한 유틸.
// 시트를 "링크가 있는 모든 사용자 - 뷰어"로 공유해두면, 아래 export?format=csv 주소로
// 로그인 없이 최신 데이터를 그대로 가져올 수 있음 (수정 후 반영까지 보통 수 분 내).
//
// 파일 구조 (4개 구글시트 파일):
//   - entertainment: 독립 시트 파일 1개
//   - protocol:       독립 시트 파일 1개
//   - mini:           독립 시트 파일 1개
//   - shopping:       파일 1개 안에 탭 3개(daiso / oliveyoung / emart-convenience) — gid로 탭 구분
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

const LOCAL_FALLBACK = {
  entertainment: entertainmentData,
  protocol: protocolData,
  mini: miniData,
  daiso: daisoData,
  oliveyoung: oliveyoungData,
  'emart-convenience': emartConvenienceData,
};

// 채널 -> 구글 시트 파일 ID 매핑
export const SHEET_IDS = {
  entertainment: import.meta.env.SHEET_ID_ENTERTAINMENT || '',
  protocol: import.meta.env.SHEET_ID_PROTOCOL || '',
  mini: import.meta.env.SHEET_ID_MINI || '',
  // daiso / oliveyoung / emart-convenience는 한 파일 안의 서로 다른 탭(gid)
  shopping: import.meta.env.SHEET_ID_SHOPPING || '',
};

// shopping 파일 안에서 채널별 탭 gid (구글시트 하단 탭 클릭 시 URL의 #gid=숫자 부분)
export const SHOPPING_TAB_GID = {
  daiso: import.meta.env.SHEET_GID_DAISO || '0',
  oliveyoung: import.meta.env.SHEET_GID_OLIVEYOUNG || '',
  'emart-convenience': import.meta.env.SHEET_GID_EMART_CONVENIENCE || '',
};

// 채널 -> (파일 ID, 탭 gid) 조회
function resolveSheetTarget(channel) {
  if (channel === 'daiso' || channel === 'oliveyoung' || channel === 'emart-convenience') {
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

// channel: 'entertainment' | 'protocol' | 'mini' | 'daiso' | 'oliveyoung' | 'emart-convenience'
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
