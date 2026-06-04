module.exports = [
  // Ignore build and deps
  { ignores: ['dist/', 'node_modules/', 'public/', '.astro/'] },

  // Base rules (JS/TS)
  {
    files: ['**/*.{js,ts,jsx,tsx}'],
    languageOptions: {
      parser: require('@typescript-eslint/parser'),
      parserOptions: { ecmaVersion: 2022, sourceType: 'module' },
    },
    plugins: {
      '@typescript-eslint': require('@typescript-eslint/eslint-plugin'),
    },
    rules: {
      // Formatting is handled by Prettier CLI (npm run format)
      // TypeScript/ESLint rules only
    },
  },

  // Astro files — use the astro processor + parser
  {
    files: ['**/*.astro'],
    processor: 'astro/astro',
    languageOptions: {
      parser: require('astro-eslint-parser'),
      parserOptions: {
        parser: require('@typescript-eslint/parser'),
      },
    },
    plugins: {
      astro: require('eslint-plugin-astro'),
      '@typescript-eslint': require('@typescript-eslint/eslint-plugin'),
    },
    rules: {
      // Formatting is handled by Prettier CLI (npm run format)
      // Astro/ESLint rules only
    },
  },
];
