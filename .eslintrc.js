module.exports = {
  env: {
    node: true, // to fix 'module' is not defined.eslintno-undef
    browser: true,
  },
  settings: {
    react: {
      version: 'detect',
    },
  },
  root: true,
  parser: '@typescript-eslint/parser',
  plugins: ['@typescript-eslint', 'react-hooks', 'deprecation'],
  extends: [
    'eslint:recommended',
    'plugin:@typescript-eslint/recommended',
    'plugin:react/recommended',
    'plugin:jsx-a11y/recommended',
    'plugin:prettier/recommended',
  ],
  parserOptions: {
    ecmaVersion: 2020,
    sourceType: 'module',
    project: './tsconfig.json',
    ecmaFeatures: {
      jsx: true,
    },
  },
  rules: {
    quotes: ['error', 'single', { avoidEscape: true }],
    indent: ['error', 2],
    'react-hooks/rules-of-hooks': 'error', // Checks rules of Hooks
    'react-hooks/exhaustive-deps': 'error', // Checks effect dependencies
    'prettier/prettier': [
      'error',
      {
        singleQuote: true,
        semi: true,
        useTabs: false,
        tabWidth: 2,
        printWidth: 100,
        arrowParens: 'avoid',
        endOfLine: 'auto',
      },
    ],
    '@typescript-eslint/no-var-requires': 0, // to fix Require statement not part of import statement
    'deprecation/deprecation': 'error',
  },
};
