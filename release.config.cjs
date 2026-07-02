const RELEASE_NOTE_SECTIONS = {
  feat: ":sparkles: Features",
  fix: ":bug: Fixes",
  docs: ":memo: Documentation",
  style: ":barber: Styling",
  refactor: ":zap: Refactoring",
  perf: ":fast_forward: Performance",
  chore: ":white_check_mark: Chores",
};

const HIDDEN_RELEASE_NOTE_TYPES = new Set(["build", "ci", "test"]);

function formatIssueLink(context, reference) {
  const owner = reference.owner || context.owner;
  const repository = reference.repository || context.repository;

  return `${context.host}/${owner}/${repository}/issues/${reference.issue}`;
}

function formatCommitLink(context, commit) {
  return `${context.host}/${context.owner}/${context.repository}/commit/${commit.hash}`;
}

function transformReleaseNotesCommit(commit, context) {
  const type = commit.revert ? "revert" : (commit.type || "").toLowerCase();
  const section = RELEASE_NOTE_SECTIONS[type];
  const notes = (commit.notes || []).map((note) => ({
    ...note,
    title: "BREAKING CHANGES",
  }));

  if (!notes.length && (!section || HIDDEN_RELEASE_NOTE_TYPES.has(type))) {
    return undefined;
  }

  const linkedIssues = [];
  const shortHash =
    typeof commit.hash === "string" ? commit.hash.substring(0, 7) : commit.hash;
  const scope = commit.scope === "*" ? "" : commit.scope;
  const subject =
    typeof commit.subject === "string"
      ? commit.subject.replace(/(^|[^\\w])#([a-z0-9]+)/gi, (match, prefix, issue) => {
          linkedIssues.push(`#${issue}`);
          return `${prefix}[#${issue}](${formatIssueLink(context, { issue })})`;
        })
      : commit.subject;
  const references = (commit.references || []).filter(
    (reference) => !linkedIssues.includes(`${reference.prefix}${reference.issue}`),
  );

  return {
    notes,
    type: section || commit.type,
    scope,
    subject,
    references,
    hash: commit.hash,
    shortHash,
    commit: formatCommitLink(context, commit),
  };
}

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
        preset: "angular",
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
          transform: transformReleaseNotesCommit,
          groupBy: "type",
          commitGroupsSort: (a, b) => {
            const order = Object.values(RELEASE_NOTE_SECTIONS);

            return order.indexOf(a.title) - order.indexOf(b.title);
          },
          commitsSort: ["scope", "subject"],
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
