module.exports = {
  parser: 'typescript-eslint-parser',
  parserOptions: {
    ecmaVersion: 7,
    sourceType: 'module',
  },
  rules: {
    'prettier/prettier': ['error', { 'singleQuote': true }]
  },
  extends: [
    'plugin:prettier/recommended'
  ],
  plugins: [
    'prettier'
  ]
}
