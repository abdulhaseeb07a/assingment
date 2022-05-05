// module.exports = {
//   "extends": "next/core-web-vitals",
//   "root": true
// };

// module.exports = {
//   parserOptions: {
//     ecmaVersion: 2020,
//     sourceType: 'module',
//     ecmaFeatures: {
//       jsx: true,
//     },
//   },
//   env: {
//     browser: true,
//     node: true,
//     es6: true,
//   },
//   plugins: ['simple-import-sort'],
//   settings: {
//     react: {
//       version: 'detect',
//     },
//   },
//   extends: [
//     'eslint:recommended',
//     'plugin:jsx-a11y/recommended',
//     'plugin:react/recommended',
//     'plugin:prettier/recommended',
//     'plugin:sonarjs/recommended',
//     'next/core-web-vitals',
//   ],
//   rules: {
//     'no-console': 'error',
//   },
// };
module.exports = {
  parserOptions: {
    ecmaFeatures: {
      jsx: true,
    },
    ecmaVersion: 2021,
    sourceType: 'module',
  },
  env: {
    browser: true,
    node: true,
    es6: true,
  },
  extends: [
    'eslint:recommended',
    'plugin:react/recommended',
    'plugin:react-hooks/recommended',
    'plugin:jsx-a11y/recommended',
    'prettier',
  ],
  settings: {
    react: {
      version: 'detect',
    },
  },
  plugins: ['react', 'react-hooks', 'jsx-a11y', 'prettier'],
  rules: {
    'func-style': 'off',
    'jsx-a11y/anchor-is-valid': 'off',
    'no-console': ['error', { allow: ['warn', 'error'] }],
    'prettier/prettier': [
      'error',
      {
        // trailingComma: 'es5',
        // singleQuote: true,
        // printWidth: 120,
        endOfLine: 'auto',
      },
    ],
    'react/react-in-jsx-scope': 'off',
    'jsx-a11y/click-events-have-key-events': 'off',
    'jsx-a11y/alt-text': 'off',
    'react/jsx-no-comment-textnodes': 'off',
    'jsx-a11y/no-static-element-interactions': 'off',
    'react/prop-types': 'off',
    'jsx-a11y/role-supports-aria-props': 'off',
    'jsx-a11y/no-noninteractive-element-interactions': 'off',
    'react/jsx-filename-extension': [
      'warn',
      {
        extensions: ['.js', '.jsx'],
      },
    ],
  },
};
