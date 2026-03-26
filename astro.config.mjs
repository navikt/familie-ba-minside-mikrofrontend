import node from "@astrojs/node";
import react from "@astrojs/react";
import { defineConfig, envField } from "astro/config";
import prefixer from "postcss-prefix-selector";

// https://astro.build/config
export default defineConfig({
  build: {
    assetsPrefix: "https://cdn.nav.no/teamfamilie/familie-ba-minside-mikrofrontend",
    inlineStylesheets: "always",
  },
  vite: {
    css: {
      postcss: {
        plugins: [
          prefixer({
            prefix: ".familie-ba-minside-mikrofrontend",
            ignoreFiles: [/module.css/],
          }),
        ],
      },
    },
  },
  integrations: [react()],
  i18n: {
    defaultLocale: "nb",
    locales: ["nb", "nn", "en"],
    routing: {
      prefixDefaultLocale: true,
    },
  },
  output: "server",
  adapter: node({
    mode: "standalone",
  }),
  env: {
    schema: {
      URL_BARNETRYGD_MIN_SIDE: envField.string({
        context: "server",
        access: "secret",
        default: "http://localhost:3000/barnetrygd/min-barnetrygd",
      }),
    },
  },
});
