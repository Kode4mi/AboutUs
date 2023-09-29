import { defineConfig } from 'astro/config';
import react from "@astrojs/react";
import sanity from 'astro-sanity';

import tailwind from "@astrojs/tailwind";

// https://astro.build/config
export default defineConfig({
  integrations: [react(), tailwind(), sanity({
    projectId: 'jy97nq5w',
    dataset: 'production',
    apiVersion: '2021-03-25',
    useCdn: true,
  })]
});