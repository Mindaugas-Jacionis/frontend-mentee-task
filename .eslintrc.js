module.exports = {
  extends: 'airbnb',
  rules: {
    'react/jsx-filename-extension': 0,
    'react/prefer-stateless-function': 0,
    'no-use-before-define': 0,
    'max-len': 0,
  },
  env: {
    browser: true,
    jest: true,
  },
  parser: 'babel-eslint',
};