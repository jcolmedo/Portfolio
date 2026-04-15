import { defineConfig } from 'astro/config';
import react from '@astrojs/react';

export default defineConfig({
  site: 'https://jcolmedo.github.io',
  base: '/Portfolio',
  integrations: [react()],
  output: 'static',
  build: {
    format: 'file'
  }
});
