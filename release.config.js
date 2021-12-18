module.exports = {
  branches: [
    'master',
    'next',
    {
      name: 'beta',
      prerelease: true,
    },
    {
      name: 'alpha',
      prerelease: true,
    },
  ],
  plugins: [
    [
      '@semantic-release/commit-analyzer',
      {
        preset: 'eslint',
        releaseRules: [
          { type: 'docs', release: 'patch' },
          { type: 'refactor', release: 'patch' },
          { type: 'chore', scope: 'deps', release: 'patch' },
        ],
        parserOpts: {
          noteKeywords: [
            'BREAKING CHANGE',
            'BREAKING CHANGES',
            'BREAKING',
            'breaking change',
            'breaking changes',
            'breaking',
          ],
        },
      },
    ],
    [
      '@semantic-release/release-notes-generator',
      {
        preset: 'eslint',
        parserOpts: {
          noteKeywords: [
            'BREAKING CHANGE',
            'BREAKING CHANGES',
            'BREAKING',
            'breaking change',
            'breaking changes',
            'breaking',
          ],
        },
        writerOpts: {
          commitsSort: ['subject', 'scope'],
        },
      },
    ],
    [
      '@semantic-release/changelog',
      {
        changelogFile: 'CHANGELOG.md',
      },
    ],
    '@semantic-release/npm',
    [
      '@semantic-release/git',
      {
        assets: ['package.json', 'CHANGELOG.md'],
        message: 'chore(release): ${nextRelease.version} [skip ci]',
      },
    ],
  ],
}
