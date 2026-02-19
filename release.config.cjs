module.exports = {
  branches: [
    "main",
    "next",
    {
      name: "beta",
      prerelease: true,
    },
    {
      name: "alpha",
      prerelease: true,
    },
  ],
  plugins: [
    [
      "@semantic-release/commit-analyzer",
      {
        preset: "angular",
        releaseRules: [
          { type: "docs", release: "patch" },
          { type: "refactor", release: "patch" },
          // { type: 'chore', scope: 'deps', release: 'patch' },
        ],
        parserOpts: {
          noteKeywords: [
            "BREAKING CHANGE",
            "BREAKING CHANGES",
            "BREAKING",
            "breaking change",
            "breaking changes",
            "breaking",
          ],
        },
      },
    ],
    [
      "@semantic-release/release-notes-generator",
      {
        preset: "conventionalcommits",
        presetConfig: {
          types: [
            {
              type: "feat",
              section: ":sparkles: Features",
              hidden: false,
            },
            {
              type: "fix",
              section: ":bug: Fixes",
              hidden: false,
            },
            {
              type: "docs",
              section: ":memo: Documenation",
              hidden: false,
            },
            {
              type: "style",
              section: ":barber: Styling",
              hidden: false,
            },
            {
              type: "refactor",
              section: ":zap: Refactoring",
              hidden: false,
            },
            {
              type: "perf",
              section: ":fast_forward: Performance",
              hidden: false,
            },
            {
              type: "test",
              section: ":white_check_mark: Tests",
              hidden: true,
            },
            {
              type: "ci",
              section: ":repeat: CI",
              hidden: true,
            },
            {
              type: "chore",
              section: ":white_check_mark: Chores",
              hidden: false,
            },
          ],
        },
        parserOpts: {
          noteKeywords: [
            "BREAKING CHANGE",
            "BREAKING CHANGES",
            "BREAKING",
            "breaking change",
            "breaking changes",
            "breaking",
          ],
        },
        writerOpts: {
          commitsSort: ["subject", "scope"],
        },
      },
    ],
    [
      "@semantic-release/changelog",
      {
        changelogFile: "CHANGELOG.md",
      },
    ],
    "@semantic-release/npm",
    [
      "@semantic-release/github",
      {
        assets: [
          {
            path: "dist/reading-time-estimator.js",
            label: "ES js distribution",
          },
          {
            path: "dist/reading-time-estimator.js",
            label: "UMD js distribution",
          },
        ],
      },
    ],
    [
      "@semantic-release/git",
      {
        assets: ["package.json", "CHANGELOG.md"],
        message: "chore(release): ${nextRelease.version} [skip ci]",
      },
    ],
  ],
};
