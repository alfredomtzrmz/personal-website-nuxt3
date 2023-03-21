const colors = require('tailwindcss/colors');

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
    'nuxt.config.{js,ts}',
  ],
  darkMode: 'class',
  theme: {
    colors: {
      transparent: 'transparent',
      current: 'currentColor',
      white: colors.white,
      black: '#000',
      zinc: {
        50: '#fdfdfc',
        100: '#f5f5f5',
        200: '#f2f2f2',
        300: '#eeeeee',
      },
      neutro: {
        50: '#ababab',
        100: '#9d9d9d',
        200: '#828282',
        300: '#7d7f83',
        400: '#7d8084',
        500: '#7c7f81',
        600: '#7c7f82',
        700: '#747474',
      },
      storm: {
        50: '#393939',
        100: '#2b2b2b',
        200: '#282828',
        300: '#1c1c1c',
        400: '#161616',
      },
      teal: colors.teal,
    },
    extend: {
      fontFamily: {
        inter: ['Inter'],
        dm: ['DM Sans'],
      },
    },
  },
};
