module.exports = {
  settings: {
    react: {
      version: 'detect',
    }
  },
  root: true,
  parser: '@typescript-eslint/parser',
  plugins: [
    '@typescript-eslint',
    'react-hooks',
  ],
  extends: [
    'eslint:recommended',
    'plugin:@typescript-eslint/recommended',
    'plugin:react/recommended',
    'plugin:jsx-a11y/recommended',
    'plugin:prettier/recommended'
  ],
  parserOptions: {
    'ecmaFeatures': {
      'jsx': true
    }
  },
  env: {
    'browser': true,
  },
  rules: {
    'quotes': ['error', 'single', { 'avoidEscape': true }],
    'indent': ['error', 2],
    'react-hooks/rules-of-hooks': 'error', // Checks rules of Hooks
    'react-hooks/exhaustive-deps': 'error', // Checks effect dependencies
    'prettier/prettier': [
      'error', 
      { 
        'singleQuote': true, 
        'semi': true, 
        'useTabs': false, 
        'tabWidth': 2, 
        'printWidth': 100, 
        'arrowParens': 'avoid', 
        'endOfLine': 'auto', 
      }
    ]
  }
};