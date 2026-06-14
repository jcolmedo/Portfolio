import { defineConfig } from 'astro/config';
import react from '@astrojs/react';

export default defineConfig({
  site: 'https://jcolmedo.github.io',
  base: '/',
  integrations: [react()],
  output: 'static',
  build: {
    format: 'file'
  }
});
