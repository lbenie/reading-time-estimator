module.exports = (config) => {
  config.set({
    testRunner: 'jest',
    testFramework: 'jest',
    mutator: 'typescript',
    reporter: ['clear-text', 'progress', 'dashboard'],
    packageManager: 'yarn',
    coverageAnalysis: 'off',
    tsconfigFile: 'tsconfig.json',
    maxConcurrentTestRunners: 8,
    mutate: ['lib/*.ts'],
    jest: {
      project: 'default',
      config: require(__dirname + '/jest.config.js'),
    },
    timeoutMs: 100000,
  })
}
