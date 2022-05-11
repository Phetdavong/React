module.exports = {
  env: {
    browser: true,
    es2021: true
  },
  extends: ['eslint:recommended', 'plugin:react/recommended'],
  parserOptions: {
    ecmaFeatures: {
      jsx: true
    },
    ecmaVersion: 12,
    sourceType: 'module'
  },
  plugins: ['react', 'prettier'],
  rules: {
    'max-len': ['error', { code: 120 }],
    'prefer-promise-reject-errors': ['off'],
    'react/jsx-filename-extension': ['off'],
    'react/jsx-closing-bracket-location': [1, 'tag-aligned'],
    'react/prop-types': ['off'],
    'no-return-assign': ['off'],
    'no-script-url': 0,
    indent: [2, 4],
    'react/jsx-indent': [2, 4],
    'react/jsx-indent-props': [2, 4],
    'jsx-a11y/anchor-is-valid': ['off'],
    'no-console': ['off'],
    'func-names': ['off'],
    'react-hooks/exhaustive-deps': ['off']
  }
};
