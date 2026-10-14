import { defineConfig } from 'astro/config';
import react from '@astrojs/react';
import sitemap from '@astrojs/sitemap';

export default defineConfig({
  site: 'https://ioe-admission.dipeshsapkota7.com.np',
  integrations: [
    react(),
    sitemap({
      changefreq: 'weekly',
      priority: 0.8,
      serialize(item) {
        if (item.url === 'https://ioe-admission.dipeshsapkota7.com.np/') {
          item.changefreq = 'daily';
          item.priority = 1.0;
        } else if (item.url.endsWith('/profile/')) {
          item.changefreq = 'weekly';
          item.priority = 0.95;
        } else if (item.url.endsWith('/predictor/') || item.url.endsWith('/calculator/')) {
          item.changefreq = 'daily';
          item.priority = 0.9;
        }
        return item;
      }
    })
  ],
  output: 'static',
  build: {
    format: 'directory'
  }
});
