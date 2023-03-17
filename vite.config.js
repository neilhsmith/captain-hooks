import { defineConfig } from "vite"

// https://vitejs.dev/config/
export default defineConfig({
  test: {
    globals: true,
    environment: "jsdom",
    setupFiles: "./setup-tests.ts",
    coverage: {
      reporter: ["text", "json", "html"],
    },
  },
})
