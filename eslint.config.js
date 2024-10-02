import globals from 'globals';
import js from '@eslint/js';
import prettier from 'eslint-plugin-prettier/recommended';

export default {
  ...js.configs.recommended,
  overrides: [
    {
      files: ['**/*.js', '**/*.jsx'],
    },
    {
      languageOptions: {
        globals: {
          ...globals.browser,
          ...globals.node,
        },
      },
    },
    {
      rules: {
        'no-console': 'warn',
      },
    },
  ],
  plugins: [prettier],
};
