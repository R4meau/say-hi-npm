module.exports = {
  env: {
    browser: true,
    es2021: true,
  },
  extends: [
    'airbnb-base',
  ],
  parser: '@typescript-eslint/parser',
  parserOptions: {
    ecmaVersion: 12,
    sourceType: 'module',
  },
  plugins: [
    '@typescript-eslint',
  ],
  rules: {
    // If you don't build your index.js file yet,
    // you'll get an import error without disabling those two
    'import/extensions': 0,
    'import/no-unresolved': 0,
    // The whole program involves logging something in the terminal
    // So we need to disable this rule
    'no-console': 0,
    // This allows us to use undefined variables in our Jest tests
    // Stuffs like 'describe' and 'expect'
    'no-undef': 0,
    // Just testing a successful PR for the CI pipeline
    'no-useless-return': 0,
  },
};
