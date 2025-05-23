import { defineConfig } from 'astro/config';
import tailwind from '@astrojs/tailwind';
import react from '@astrojs/react';
import cloudflare from '@astrojs/cloudflare';

// https://astro.build/config
export default defineConfig({
  integrations: [
    tailwind(),
    react()
  ],
  output: 'static',
  adapter: cloudflare(),
  image: {
    domains: ['compara-ii.b-cdn.net', 'ik.imagekit.io', 'images.compara.ar']
  }
}); 