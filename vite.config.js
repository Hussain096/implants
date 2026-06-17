import { defineConfig } from 'vite';

export default defineConfig({
  // SPA fallback — all routes serve index.html
  appType: 'spa',
  server: {
    host: '0.0.0.0',
  },
  preview: {
    host: '0.0.0.0',
  },
});
