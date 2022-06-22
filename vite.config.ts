import { defineConfig } from 'vitest/config'
import { resolve } from 'path'
import { name } from './package.json'
import peerDepsExternal from 'rollup-plugin-peer-deps-external'
import typescript from '@rollup/plugin-typescript'
import AutoImport from 'unplugin-auto-import/vite'

export default defineConfig({
  test: {
    globals: true,
    environment: 'node',
    clearMocks: true,
    setupFiles: [],
    coverage: {
      exclude: ['config/**', '__tests__/**'],
    },
  },
  plugins: [
    AutoImport({
      imports: ['vitest'],
      dts: true,
    }),
  ],
  build: {
    lib: {
      entry: resolve(__dirname, 'lib/index.ts'),
      name,
    },
    rollupOptions: {
      plugins: [
        peerDepsExternal(),
        typescript({
          tsconfig: resolve(__dirname, 'tsconfig.json'),
        }),
      ],
    },
  },
})
