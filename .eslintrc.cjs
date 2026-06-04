module.exports = {
  root: true,
  env: { browser: true, es2021: true, node: true },
  parser: '@typescript-eslint/parser',
  parserOptions: {
    sourceType: 'module',
  },
  plugins: ['@typescript-eslint', 'prettier'],
  overrides: [
    {
      files: ['*.astro'],
      processor: 'astro/astro',
      parser: 'astro-eslint-parser',
      parserOptions: {
        parser: '@typescript-eslint/parser',
      },
    },
  ],
  extends: [
    'eslint:recommended',
    'plugin:@typescript-eslint/recommended',
    'plugin:astro/recommended',
    'prettier',
  ],
  rules: {
    'prettier/prettier': 'off',
  },
  overrides: [
    {
      files: ['*.astro'],
      processor: 'astro/astro',
    },
  ],
};
