import { defineConfig } from 'vite';
import vue from '@vitejs/plugin-vue';
import path from 'node:path';

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [vue()],

  resolve: {
    alias: {
      '@components': path.join(__dirname, 'src/app/components'),
      '@core': path.join(__dirname, 'src/app/core'),
      '@shared': path.join(__dirname, 'src/app/shared'),
      '@routes': path.join(__dirname, 'src/app/routes'),
      '@styles': path.join(__dirname, 'src/styles'),
      '@': path.join(__dirname, 'src'),
    },
  },
});
