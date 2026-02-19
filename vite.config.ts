import typescript from "@rollup/plugin-typescript";
import { resolve } from "path";
import AutoImport from "unplugin-auto-import/vite";
import { coverageConfigDefaults, defineConfig } from "vitest/config";
import { supportedLanguages } from "./lib/i18n/types";
import { name } from "./package.json";

const libEntryMap = supportedLanguages.reduce<Record<string, string>>(
  (acc, locale) => {
    acc[`i18n/${locale}/locale`] = resolve(__dirname, `lib/i18n/${locale}.ts`);
    return acc;
  },
  { index: resolve(__dirname, "lib/reading-time-estimator.ts") },
);

export default defineConfig({
  test: {
    globals: true,
    environment: "node",
    clearMocks: true,
    setupFiles: [],
    coverage: {
      provider: "v8",
      exclude: [
        "__tests__/**",
        "release.config.cjs",
        "lib/i18n/**",
        // eslint-disable-next-line @typescript-eslint/no-unsafe-assignment, @typescript-eslint/no-unsafe-member-access
        ...coverageConfigDefaults.exclude,
      ],
    },
  },
  plugins: [
    AutoImport({
      imports: ["vitest"],
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
          format: "esm",
          dir: "dist",
          entryFileNames: "[name].js",
        },
        {
          format: "cjs",
          dir: "dist",
          entryFileNames: "[name].cjs",
          exports: "named",
        },
      ],
      plugins: [
        typescript({
          tsconfig: resolve(__dirname, "tsconfig.json"),
        }),
      ],
    },
  },
});
