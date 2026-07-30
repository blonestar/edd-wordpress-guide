import { defineConfig } from "astro/config";

export default defineConfig({
  site: "https://blonestar.github.io",
  base: "/edd-wordpress-guide",
  output: "static",
  trailingSlash: "always",
  i18n: {
    locales: ["en", "sr-latn", "sr-cyrl", "be", "ru"],
    defaultLocale: "en",
    routing: {
      prefixDefaultLocale: false,
      redirectToDefaultLocale: false,
    },
  },
});
