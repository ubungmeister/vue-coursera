import { fileURLToPath, URL } from "node:url";
import AutoImport from "unplugin-auto-import/vite";
import Components from "unplugin-vue-components/vite";
import { ElementPlusResolver } from "unplugin-vue-components/resolvers";
import tailwindcss from "@tailwindcss/vite";

import { defineConfig } from "vite";
import vue from "@vitejs/plugin-vue";
import vueJsx from "@vitejs/plugin-vue-jsx";
import vueDevTools from "vite-plugin-vue-devtools";

// https://vite.dev/config/
export default defineConfig({
  plugins: [
    tailwindcss(),
    vue(),
    vueJsx(),
    vueDevTools(),
    AutoImport({
      imports: ["vue", "vue-router"], // Auto-import commonly used Vue functions
      dts: "src/auto-imports.d.ts", // Generate TypeScript declarations (optional)
      eslintrc: {
        enabled: true, // Automatically generate an ESLint config file
      },
    }),
    Components({
      resolvers: [ElementPlusResolver()], // Auto-import Element Plus components
      dts: "src/components.d.ts", // Generate TypeScript declarations (optional)
    }),
  ],
  resolve: {
    alias: {
      "@": fileURLToPath(new URL("./src", import.meta.url)),
    },
  },
});
