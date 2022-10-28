/* eslint-env node */
require('@rushstack/eslint-patch/modern-module-resolution')

module.exports = {
  root: true,
  'extends': [
    'plugin:vue/vue3-essential',
    'eslint:recommended',
    '@vue/eslint-config-typescript',
    '@vue/eslint-config-prettier'
  ],
  parserOptions: {
    ecmaVersion: 'latest'
  },
  rules: {
    'import/extensions': 'off',
    'import/no-unresolved': 'off',
    'no-plusplus': ['error', { allowForLoopAfterthoughts: true }],
    'no-underscore-dangle': 'off',
    'vue/require-prop-types': 'off',
    'import/no-extraneous-dependencies': 'off',
    'max-len': 'off',
    'linebreak-style': 'off',
    '@typescript-eslint/explicit-function-return-type': ['error'],
    'lines-between-class-members': ['error', 'always', { exceptAfterSingleLine: true }],
    'no-console': ['off'],
    'vue/no-v-html': 'off',
    'vue/component-definition-name-casing': ['error', 'kebab-case'],
    '@typescript-eslint/no-explicit-any': ['off'],
    '@typescript-eslint/ban-ts-comment': ['off'],
    '@typescript-eslint/explicit-module-boundary-types': ['off'],
    'vue/no-v-text-v-html-on-component': 'off',
  }
}
