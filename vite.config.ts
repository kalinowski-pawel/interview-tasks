import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import { fileURLToPath, URL } from 'node:url';

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  test: {
    environment: 'jsdom',
    exclude: ['**/node_modules/**', '**/.git/**'],
  },
  resolve: {
    alias: {
      '@@components': fileURLToPath(new URL('./src/components', import.meta.url)),
      '@@common': fileURLToPath(new URL('./src/common', import.meta.url)),
    },
  },
});
