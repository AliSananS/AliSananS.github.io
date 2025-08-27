// @ts-check
import tailwindcss from "@tailwindcss/vite";
import icon from "astro-icon";

import { defineConfig, fontProviders } from "astro/config";

// https://astro.build/config
export default defineConfig({
  site: "https://AliSananS.github.io",
  vite: {
    plugins: [tailwindcss()],
  },
  integrations: [icon()],
  server: {
    host: "0.0.0.0",
    port: 4000,
    open: "http://localhost:4000/",
  },
  experimental: {
    fonts: [
      {
        provider: fontProviders.google(),
        name: "inter",
        cssVariable: "--font-inter",
      },
      {
        provider: fontProviders.google(),
        name: "Jetbrains Mono",
        cssVariable: "--font-jetbrains-mono",
      },
      {
        provider: fontProviders.google(),
        name: "Fira Code",
        cssVariable: "--font-fira-code",
      },
    ],
  },
});
