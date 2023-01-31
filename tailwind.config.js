module.exports = {
    content: [
        'components/**/*.{vue,js,ts}',
        'layouts/**/*.vue',
        'pages/**/*.vue',
        'composables/**/*.{js,ts}',
        'plugins/**/*.{js,ts}',
        'App.{js,ts,vue}',
        'app.{js,ts,vue}',
        'Error.{js,ts,vue}',
        'error.{js,ts,vue}',
        'nuxt.config.{js,ts}'
    ],
    darkMode: 'class',
    theme: {
        extend: {
            fontFamily: {
                inter: ['Inter'],
                dm: ['DM Sans']
            }
        }
    }
}
