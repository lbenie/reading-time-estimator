import { defineConfig, coverageConfigDefaults } from 'vitest/config'
import { resolve } from 'path'
import { name } from './package.json'
// @ts-expect-error expected error
import peerDepsExternal from 'rollup-plugin-peer-deps-external'
import typescript from '@rollup/plugin-typescript'
import AutoImport from 'unplugin-auto-import/vite'
import { supportedLanguages } from './lib/i18n/types'

const libEntryMap = supportedLanguages.reduce<Record<string, string>>(
  (acc, locale) => {
    acc[`i18n/${locale}/locale`] = resolve(__dirname, `lib/i18n/${locale}.ts`)
    return acc
  },
  { index: resolve(__dirname, 'lib/index.ts') },
)

export default defineConfig({
  test: {
    globals: true,
    environment: 'node',
    clearMocks: true,
    setupFiles: [],
    coverage: {
      provider: 'v8',
      exclude: [
        '__tests__/**',
        'release.config.cjs',
        'lib/i18n/**',
        ...coverageConfigDefaults.exclude,
      ],
    },
  },
  plugins: [
    // @ts-expect-error expected error
    AutoImport({
      imports: ['vitest'],
      dts: true,
    }),
  ],
  build: {
    lib: {
      entry: libEntryMap,
      name,
    },
    rollupOptions: {
      output: [
        {
          format: 'esm',
          dir: 'dist',
          preserveModules: true,
          preserveModulesRoot: 'lib',
          entryFileNames: '[name].js',
        },
        {
          format: 'cjs',
          dir: 'dist',
          preserveModules: true,
          preserveModulesRoot: 'lib',
          entryFileNames: '[name].cjs',
          exports: 'named',
        },
      ],
      plugins: [
        // eslint-disable-next-line @typescript-eslint/no-unsafe-call
        peerDepsExternal(),
        typescript({
          tsconfig: resolve(__dirname, 'tsconfig.json'),
        }),
      ],
    },
  },
})
