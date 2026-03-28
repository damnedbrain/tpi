import nextPlugin from '@next/eslint-plugin-next';
import reactPlugin from 'eslint-plugin-react';
import reactHooksPlugin from 'eslint-plugin-react-hooks';

export default [
  {
    ignores: ['.next/**', 'node_modules/**', 'public/**'],
    languageOptions: {
      ecmaVersion: 'latest',
      sourceType: 'module',
      parserOptions: {
        ecmaFeatures: {
          jsx: true,
        },
      },
    },
    settings: {
      react: {
        version: 'detect',
      },
    },
  },
  reactPlugin.configs.flat.recommended,
  reactPlugin.configs.flat['jsx-runtime'],
  reactHooksPlugin.configs.flat.recommended,
  {
    plugins: {
      '@next/next': nextPlugin,
    },
    settings: {
      react: {
        version: 'detect',
      },
    },
    rules: {
      ...nextPlugin.configs['core-web-vitals'].rules,
      'no-console': 'off',
      'react/prop-types': 'off',
    },
  },
];
