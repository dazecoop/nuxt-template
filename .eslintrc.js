module.exports = {
  root: true,
  env: {
    node: true,
  },
  extends: [
    'plugin:vue/essential',
    'plugin:vue/base',
    'plugin:vue/recommended',
  ],
  parserOptions: {
    ecmaVersion: 2020,
  },
  rules: {
    'no-console': process.env.NODE_ENV === 'production' ? 'warn' : 'off',
    'no-debugger': process.env.NODE_ENV === 'production' ? 'warn' : 'off',
    'vue/multi-word-component-names': 'off',
    'max-len': ['error', { 'code': 100 }], // Max line length 100 characters
    'quotes': ['error', 'single'], // Prefer single quotes where possible
    'indent': ['error', 2], // Enforce indentation to 2 space-tabs
    'vue/html-self-closing': ['error'], // Prefer self-closing tags
    'comma-dangle': ['error', 'always-multiline'], // Always put a comma at the end of a multiline
  },
};
