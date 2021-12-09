module.exports = {
  branches: [
    'main',
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
  plugins: ['@semantic-release/changelog', '@semantic-release/git'],
}
