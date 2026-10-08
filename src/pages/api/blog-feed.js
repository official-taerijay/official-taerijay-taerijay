// src/pages/api/blog-feed.js
// taerijay.blogspot.com 최신 글 5개를 Blogger 피드에서 읽어 JSON으로 반환 (홈페이지 "최신 블로그"용).
// 글 제목 형식: "English title 한국어 제목" → 첫 한글 위치로 EN/KR 분리.
// 10분 캐시(s-maxage) — 새 글을 올리면 코드 수정/재배포 없이 자동 반영된다.

export const prerender = false;

const FEED = 'https://taerijay.blogspot.com/feeds/posts/default?alt=json&max-results=5';

function splitTitle(full) {
  const t = (full || '').trim();
  const m = t.search(/[ㄱ-ㆎ가-힣]/);
  if (m <= 0) return { titleEn: t, titleKr: t };
  return { titleEn: t.slice(0, m).trim(), titleKr: t.slice(m).trim() };
}

function kstDate(iso) {
  const d = new Date(new Date(iso).getTime() + 9 * 3600 * 1000);
  return d.toISOString().slice(0, 10).replace(/-/g, '.');
}

export async function GET() {
  try {
    const ctrl = new AbortController();
    const to = setTimeout(() => ctrl.abort(), 6000);
    const res = await fetch(FEED, { signal: ctrl.signal });
    clearTimeout(to);
    if (!res.ok) throw new Error('feed ' + res.status);
    const data = await res.json();
    const posts = (data.feed?.entry || []).map((e) => {
      const link = (e.link || []).find((l) => l.rel === 'alternate')?.href;
      return { ...splitTitle(e.title?.$t), date: kstDate(e.published?.$t), url: link };
    }).filter((p) => p.url);
    return new Response(JSON.stringify({ posts }), {
      status: 200,
      headers: {
        'content-type': 'application/json',
        'cache-control': 'public, s-maxage=600, stale-while-revalidate=3600',
      },
    });
  } catch (e) {
    return new Response(JSON.stringify({ posts: [], error: String(e) }), {
      status: 200,
      headers: { 'content-type': 'application/json', 'cache-control': 'no-store' },
    });
  }
}
