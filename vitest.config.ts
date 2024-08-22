import { defineConfig } from "vitest/config";
import react from "@vitejs/plugin-react";
import * as path from "path";

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  test: {
    globals: true,
    setupFiles: "./vitest.setup.ts",
    alias: {
      "@": path.resolve(__dirname, "./"),
    },
    environment: "jsdom",
    coverage: {
      reporter: ["text", "html", "json-summary"],
      all: false,
    },
  },
});
