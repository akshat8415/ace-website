// vite.config.js
import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig({

  base: '/ace-website/', // 👈 your repo name
  plugins: [react()],
});
