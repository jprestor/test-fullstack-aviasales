/// <reference types="vitest" />
import { defineConfig } from 'vite';
import { configDefaults } from 'vitest/config';
import react from '@vitejs/plugin-react';
import tsconfigPaths from 'vite-tsconfig-paths';
import eslint from 'vite-plugin-eslint';

export default defineConfig({
  plugins: [react(), tsconfigPaths(), eslint()],
  test: {
    environment: 'jsdom',
    exclude: [...configDefaults.exclude],
  },
});
