module.exports = {
    root: true,
    env: {
        browser: true,
        node: true
    },
    parserOptions: {
        parser: 'babel-eslint'
    },
    extends: [
        "@nuxtjs/eslint-config-typescript",
        'plugin:nuxt/recommended'
    ],
    plugins: [],
    // add your custom rules here
    rules: {
        'vue/max-attributes-per-line': 'off',
        'vue/no-v-html': 0
    }
}
