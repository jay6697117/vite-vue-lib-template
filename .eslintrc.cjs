/* eslint-env node */
require('@rushstack/eslint-patch/modern-module-resolution')

module.exports = {
  root: true,
  extends: ['plugin:vue/vue3-essential', 'eslint:recommended', '@vue/eslint-config-typescript', '@vue/eslint-config-prettier'],
  parserOptions: {
    ecmaVersion: 'latest',
  },
  rules: {
    // 在这里添加规则来覆盖 @vue/eslint-config-prettier 的默认规则
    // 例如，如果你想要开启或修改一个规则：
    'prettier/prettier': ['error', { tabWidth: 2 }],
  },
}
