module.exports = [
  // Ignore build and deps
  { ignores: ['dist/', 'node_modules/', 'public/'] },

  // Base rules (JS/TS)
  {
    files: ['**/*.{js,ts,jsx,tsx}'],
    languageOptions: {
      parserOptions: { ecmaVersion: 2022, sourceType: 'module' },
    },
    plugins: {
      prettier: require('eslint-plugin-prettier'),
      '@typescript-eslint': require('@typescript-eslint/eslint-plugin'),
    },
    rules: {
      // keep eslint recommended rules via direct rule declarations where needed
      'prettier/prettier': 'error',
    },
  },

  // Astro files — use the astro processor + parser and enable Prettier rule
  {
    files: ['**/*.astro'],
    processor: 'astro/astro',
    languageOptions: {
      parser: require.resolve('astro-eslint-parser'),
      parserOptions: {
        parser: require.resolve('@typescript-eslint/parser'),
      },
    },
    plugins: {
      prettier: require('eslint-plugin-prettier'),
      astro: require('eslint-plugin-astro'),
      '@typescript-eslint': require('@typescript-eslint/eslint-plugin'),
    },
    rules: {
      // enable prettier as an ESLint rule for .astro files
      'prettier/prettier': 'error',
    },
  },
];
