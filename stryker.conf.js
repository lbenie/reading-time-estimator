/**
 * @type {import('@stryker-mutator/api/core').StrykerOptions}
 */
module.exports = {
  packageManager: 'yarn',
  reporters: ['html', 'clear-text', 'progress', 'dashboard'],
  testRunner: 'jest',
  coverageAnalysis: 'all',
  tsconfigFile: 'tsconfig.spec.json',
  mutate: ['lib/index.ts'],
  jest: {
    configFile: 'jest.config.js',
  },
}
