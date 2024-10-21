import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

// https://vitejs.dev/config/
export default defineConfig({
  base: "./PeexiPunk",
  plugins: [react()],

  css: {
    devSourcemap: true,
  },
});
