/// <reference types="vitest/config" />
import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react-swc'

import { cloudflare } from "@cloudflare/vite-plugin";

// https://vite.dev/config/
export default defineConfig({
  plugins: [react(), cloudflare()],
  test: {
    globals: true,
    setupFiles: ["./src/test/vitest.setup.ts"],
    environment: 'jsdom'
  }
})