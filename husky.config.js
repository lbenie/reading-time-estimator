module.exports = {
  hooks: {
    'commit-msg': 'commitlint -e $GIT_PARAMS',
    'pre-commit': 'lint-staged',
    'post-merge': 'sh post-merge.sh',
  },
}
