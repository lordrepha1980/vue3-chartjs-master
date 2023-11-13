module.exports = {
  root: true,
  env: {
    node: true,
  },
  extends: [
    'eslint:recommended',
    'plugin:vue/vue3-essential',
    'plugin:vue/vue3-recommended',
    'plugin:@typescript-eslint/eslint-recommended',
    'plugin:@typescript-eslint/recommended'
  ],
  parserOptions: {
    ecmaVersion: 2020,
    sourceType: 'commonjs',
    parser: '@typescript-eslint/parser',
  },
  plugins: ['vue'],
  rules: {
    "no-unused-vars": "off",
    "@typescript-eslint/no-unused-vars": "off",
    "no-redeclare": "off",
    "no-fallthrough": "off",
    "no-empty": "off",
    "no-empty-function": "off",
    "@typescript-eslint/no-empty-function": "off",
    "no-self-assign": "off",
    "vue/html-indent": ["error", 4]
  },
};