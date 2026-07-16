import { defineConfig } from 'astro/config';
import path from 'path';

export default defineConfig({
  vite: {
    resolve: {
      alias: {
        // 대표님의 12.02.06 폴더 기준에 맞춘 완벽한 맵핑 고정
        '@components': path.resolve('./components'),
        '@layouts': path.resolve('./src/layouts')
      }
    }
  }
});