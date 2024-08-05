import { supportedLanguages } from './lib/i18n/supportedLanguages'
import { defineConfig, coverageConfigDefaults } from 'vitest/config'
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
      provider: 'v8',
      exclude: [
        'config/**',
        '__tests__/**',
        'release.config.cjs',
        'lib/i18n/i18n.ts',
        'lib/i18n/index.ts',
        'lib/i18n/supportedLanguages.ts',
        ...coverageConfigDefaults.exclude,
      ],
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
      output: {
        dir: 'dist',
      },
      plugins: [
        peerDepsExternal(),
        typescript({
          tsconfig: resolve(__dirname, 'tsconfig.json'),
        }),
      ],
    },
  },
})
