import path from 'path'
import { defineConfig } from 'vitest/config'
import tsconfigPaths from 'vite-tsconfig-paths'

export default defineConfig({
  plugins: [tsconfigPaths()],
  test: {
    include: [
      "src/**/*.spec.ts",
      "src/**/*.test.ts"
    ],
    globals: true,
    environment: 'node',
    root: path.resolve(__dirname, "."),
    alias: {
      '@': path.resolve(__dirname, './src')
    },
  }
})