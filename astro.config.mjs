import { defineConfig } from 'astro/config';
import { fileURLToPath } from 'node:url';
import path from 'node:path';

// ESM 빌드 환경에서 현재 루트 디렉토리의 절대 경로를 완벽하게 수급
const __dirname = path.dirname(fileURLToPath(import.meta.url));

export default defineConfig({
  vite: {
    resolve: {
      alias: {
        // 대표님의 인프라 폴더 규격에 정확히 맞춘 고해상도 경로 별칭 고정
        '@components': path.resolve(__dirname, './src/components'),
        '@layouts': path.resolve(__dirname, './src/layouts')
      }
    }
  }
});