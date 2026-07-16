import { defineConfig } from 'astro/config';
import path from 'path';

export default defineConfig({
  vite: {
    resolve: {
      alias: {
        // 대표님이 구축한 01-components 폴더 경로로 수렴 처리함
        '@components': path.resolve('./01-components'),
        '@layouts': path.resolve('./src/01-layouts')
      }
    }
  }
});