import { defineNuxtConfig } from 'nuxt';
import vuetify from 'vite-plugin-vuetify';

// https://v3.nuxtjs.org/api/configuration/nuxt.config
export default defineNuxtConfig({
  css: ['vuetify/styles'],
  vite: {
    ssr: {
      noExternal: ['vuetify'],
    },
  },
  modules: [
    (options, nuxt) => {
      nuxt.hooks.hook('vite:extendConfig', (config) =>
        config.plugins.push(vuetify())
      );
    },
  ],
});
