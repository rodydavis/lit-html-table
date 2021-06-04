import { defineConfig } from "vite";

// https://vitejs.dev/config/
export default defineConfig({
  base: "/lit-html-table/",
  build: {
    lib: {
      entry: "src/lit-html-table.ts",
      formats: ["es"],
    },
  },
});
