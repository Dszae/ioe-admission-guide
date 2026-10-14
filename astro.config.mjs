import { defineConfig } from 'astro/config';
import react from '@astrojs/react';
import sitemap from '@astrojs/sitemap';

export default defineConfig({
  site: 'https://ioe-admission.dipeshsapkota7.com.np',
  integrations: [react(), sitemap()],
  output: 'static',
  build: {
    format: 'directory'
  }
});
