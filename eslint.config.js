import js from "@eslint/js";
import importPlugin from 'eslint-plugin-import';
import { viteConfigObj } from './vite.config.js';

export default [
  js.configs.recommended,

  {
    files: ["src/**/*.js"],

    plugins: {
      'import': importPlugin,
    },

    languageOptions: {
      ecmaVersion: "latest",
      sourceType: "module",
      globals: {
        document: "readonly",
        window: "readonly",
        console: "readonly",
        fetch: "readonly",
        localStorage: "readonly",
        sessionStorage: "readonly",
        alert: "readonly",
        confirm: "readonly",
      },
    },

    settings: {
      'import/resolver': {
        vite: {
          viteConfig: viteConfigObj, 
        },
        node: {
          extensions: ['.js', '.jsx', '.json', '.less', '.css', '.svg', '.png', '.jpg', '.jpeg', '.gif', '.webp'],
        },
      },
    },

    rules: {
      'no-console': 'warn',
      'no-unused-vars': ['error', { 
        argsIgnorePattern: '^_',
        varsIgnorePattern: '^_',
      }],
      'import/no-unresolved': 'error',
      'import/extensions': ['error', 'ignorePackages', {
        js: 'always',
      }],
    },
  },
];