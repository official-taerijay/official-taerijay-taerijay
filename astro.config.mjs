import { defineConfig } from 'astro/config';
import { fileURLToPath } from 'node:url';
import path from 'node:path';
import vercel from '@astrojs/vercel/serverless';

// ESM 빌드 환경에서 현재 루트 디렉토리의 절대 경로를 완벽하게 수급
const __dirname = path.dirname(fileURLToPath(import.meta.url));

export default defineConfig({
  // 기본은 정적 페이지, /api/* 라우트만 서버리스 함수로 동작 (Paddle 웹훅 수신용)
  output: 'hybrid',
  adapter: vercel(),
  vite: {
    // 샌드박스 환경에서 node_modules/.vite 캐시 정리 단계가 깨지는 문제 회피용 임시 캐시 경로
    cacheDir: process.env.TJ_VITE_CACHE_DIR || undefined,
    resolve: {
      alias: {
        // 대표님의 인프라 폴더 규격에 정확히 맞춘 고해상도 경로 별칭 고정
        '@components': path.resolve(__dirname, './src/components'),
        '@layouts': path.resolve(__dirname, './src/layouts')
      }
    }
  }
});