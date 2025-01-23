import { defineConfig } from 'astro/config';

export default defineConfig({
  integrations: [],
  vite: {
    define: {
      'process.env.CONTENTFUL_SPACE_ID': `"${process.env.CONTENTFUL_SPACE_ID}"`,
      'process.env.CONTENTFUL_ACCESS_TOKEN': `"${process.env.CONTENTFUL_ACCESS_TOKEN}"`,
    },
  },
});
