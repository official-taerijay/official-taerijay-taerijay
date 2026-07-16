import { defineConfig } from 'astro/config';
import path from 'path';

// https://astro.build/config
export default defineConfig({
  // Vercel 컴파일러가 루트 레벨의components 폴더를 완벽히 추적하도록 에일리어스 인젝션 수립함
  vite: {
    resolve: {
      alias: {
        '@components': path.resolve('./components'),
        '@layouts': path.resolve('./src/layouts')
      }
    }
  }
});