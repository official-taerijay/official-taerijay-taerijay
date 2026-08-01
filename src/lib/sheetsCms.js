// src/lib/sheetsCms.js
// 구글 시트를 "실시간 CMS"처럼 쓰기 위한 유틸.
// 시트를 "링크가 있는 모든 사용자 - 뷰어"로 공유해두면, 아래 export?format=csv 주소로
// 로그인 없이 최신 데이터를 그대로 가져올 수 있음 (수정 후 반영까지 보통 수 분 내).

// 시트 이름 -> 구글 시트 파일 ID 매핑
export const SHEET_IDS = {
  maskpack10: '1PO85vzGTtIjiad6nNDguHOzRyarcjpiV4uZCDr6LPE8',
  beautytop50: '1F7Rnk4ohpt5i_Tb0RJx4AMYHKkgUYV8Qi9oKxTVOvns',
  protocolext: '1oQ5UospU289fFOajYqp1b4ND_F5ODbzyk7VJ834Z978',
  minicourse: '1hAnoBRks6QJGyvZV4mw8BXJQrhyry24T-tbRTI5jTRM',
  emart80: '1IpxQYCpZFCBWz9pNq42ILYLfuJRXXNJ5qdeLBgm4RLY',
  conv60: '13KJUcTFRtRbjs8C0YYNykl7YYcI59fIrtpN0ZbhLPsM',
};

function sheetUrl(id) {
  return `https://docs.google.com/spreadsheets/d/${id}/export?format=csv`;
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

export async function fetchSheetRows(sheetKey) {
  const id = SHEET_IDS[sheetKey];
  if (!id) throw new Error(`unknown sheet key: ${sheetKey}`);

  const res = await fetch(sheetUrl(id));
  if (!res.ok) throw new Error(`sheet fetch failed: ${res.status}`);
  const text = await res.text();
  const rows = parseCsv(text);
  return filterByPublishDate(rows);
}
