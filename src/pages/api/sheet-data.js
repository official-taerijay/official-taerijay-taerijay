// src/pages/api/sheet-data.js
// 구글 시트를 실시간 CMS 데이터소스로 노출하는 API.
// 사용: /api/sheet-data?sheet=maskpack10
// 시트가 "링크가 있는 모든 사용자 - 뷰어"로 공유되어 있어야 동작함.

export const prerender = false;

import { fetchSheetRows, SHEET_IDS } from '../../lib/sheetsCms.js';

export async function GET({ url }) {
  const sheetKey = url.searchParams.get('sheet');

  if (!sheetKey) {
    return new Response(
      JSON.stringify({ error: 'missing ?sheet= param', available: Object.keys(SHEET_IDS) }),
      { status: 400, headers: { 'content-type': 'application/json' } }
    );
  }

  if (!SHEET_IDS[sheetKey]) {
    return new Response(
      JSON.stringify({ error: `unknown sheet: ${sheetKey}`, available: Object.keys(SHEET_IDS) }),
      { status: 404, headers: { 'content-type': 'application/json' } }
    );
  }

  try {
    const rows = await fetchSheetRows(sheetKey);
    return new Response(JSON.stringify({ sheet: sheetKey, count: rows.length, rows }), {
      status: 200,
      // 매번 새로 요청해서 최신 데이터를 받되, 짧게 캐싱해서 과도한 요청은 방지
      headers: { 'content-type': 'application/json', 'cache-control': 'public, max-age=60' },
    });
  } catch (e) {
    console.error('[sheet-data] error', e);
    return new Response(JSON.stringify({ error: 'failed to fetch sheet', detail: String(e) }), {
      status: 500,
      headers: { 'content-type': 'application/json' },
    });
  }
}
