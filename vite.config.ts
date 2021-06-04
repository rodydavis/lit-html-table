import { defineConfig } from "vite";
import { resolve } from "path";

export default defineConfig({
  base: '/lit-html-table/',
  build: {
    lib: {
      entry: "src/lit-html-table.ts",
      formats: ["es"],
    },
    rollupOptions: {
      input: {
        main: resolve(__dirname, "index.html"),
      },
    },
  },
});