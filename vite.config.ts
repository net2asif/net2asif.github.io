import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

// Default build targets GitHub Pages user site (served from '/').
// VITE_ROUTER=hash builds with relative paths for hosts without SPA fallback.
export default defineConfig({
  plugins: [react()],
  base: process.env.VITE_ROUTER === 'hash' ? './' : '/',
  build: {
    rollupOptions: {
      output: {
        manualChunks: { vendor: ['react', 'react-dom', 'react-router-dom'] },
      },
    },
  },
});
