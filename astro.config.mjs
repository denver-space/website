import { defineConfig } from "astro/config";
import node from "@astrojs/node";
import sitemap from "@astrojs/sitemap";
import tailwind from "@astrojs/tailwind";
import icon from "astro-icon";
import partytown from "@astrojs/partytown";
import react from "@astrojs/react";
import dotenv from "dotenv";

dotenv.config();

// https://astro.build/config
export default defineConfig({
  integrations: [
    partytown({
      config: {
        forward: ["dataLayer.push"],
      },
    }),
    react(),
  ],
  site: "https://denver.space",
  output: "server",
  adapter: node({
    mode: "standalone",
  }),
  integrations: [tailwind(), sitemap(), icon()],
});
