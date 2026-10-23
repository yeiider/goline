// @ts-check
import { defineConfig } from 'astro/config';
import vercel from '@astrojs/vercel';
import sitemap from '@astrojs/sitemap';
import tailwindcss from '@tailwindcss/vite';

export default defineConfig({
  site: 'https://www.goline.com.co',
  adapter: vercel(),
  integrations: [sitemap()],
  prefetch: { prefetchAll: true },
  vite: { plugins: [tailwindcss()] },
});
