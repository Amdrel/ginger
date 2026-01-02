import js from '@eslint/js';
import globals from 'globals';
import prettierPlugin from 'eslint-plugin-prettier';
import babelParser from '@babel/eslint-parser';

export default [
  js.configs.recommended,
  {
    files: ['**/*.js', '**/*.mjs'],
    languageOptions: {
      parser: babelParser,
      ecmaVersion: 'latest',
      sourceType: 'module',
      globals: {
        ...globals.browser,
        ...globals.node,
        ...globals.es2021,
      },
      parserOptions: {
        requireConfigFile: false,
        babelOptions: {
          babelrc: false,
          configFile: false,
        },
      },
    },
    plugins: {
      prettier: prettierPlugin,
    },
    rules: {
      strict: 0,
      'no-console': 'warn',
      quotes: ['warn', 'single'],
      'prettier/prettier': 'warn',
      'no-unused-vars': 'warn',
    },
  },
];
