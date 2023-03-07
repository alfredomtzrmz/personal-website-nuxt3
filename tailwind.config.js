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
      white: '#ffffff',
      black: '#050505',
      gray: colors.neutral,
      'gray-150': '#EEEFF2',
      'gray-1000': '#050505',
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
