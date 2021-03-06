module.exports = {
  env: {
    browser: true,
    es2021: true,
  },
  extends: ['plugin:react/recommended', 'airbnb'],
  parserOptions: {
    ecmaFeatures: {
      jsx: true,
    },
    ecmaVersion: 12,
    sourceType: 'module',
  },
  plugins: ['react', 'prettier'],
  rules: {
    'linebreak-style': 0,
    'prettier/prettier': [
      'error',
      {
        endOfLine: 'auto',
        trailingComma: 'all',
      },
    ],
    'react/jsx-filename-extension': [1, { extensions: ['.js', '.jsx'] }],
    'no-plusplus': [2, { allowForLoopAfterthoughts: true }],
    'operator-linebreak': [2, 'after', { overrides: { '?': 'after' } }],
    camelcase: ['error', { allow: ['UNSAFE_componentWillReceiveProps'] }],
  },
  parser: 'babel-eslint',
};
