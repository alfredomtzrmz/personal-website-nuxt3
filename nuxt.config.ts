// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  app: {
    head: {
      htmlAttrs: {
        lang: 'es-MX'
      },
      meta: [
        {
          charset: 'utf-8'
        },
        {
          name: 'viewport',
          content: 'width=device-width, initial-scale=1'
        },
        {
          name: 'description',
          content: ''
        }
      ],
      title: 'Isidro Martínez | Software Developer',
      bodyAttrs: {
        class: 'antialiased font-inter overflow-y-auto h-full'
      },
    }
  },
  modules: [
    '@nuxtjs/tailwindcss',
    '@nuxtjs/color-mode',
    '@nuxtjs/google-fonts',
    'nuxt-headlessui',
    '@vueuse/nuxt',
  ],
  colorMode: {
    classSuffix: ''
  },
  googleFonts: {
    families: {
      Inter: {
        wght: [100, 200, 300, 400, 500, 600, 700, 800, 900]
      },
      'DM+Sans': {
        wght: [100, 200, 300, 400, 500, 600, 700, 800, 900]
      }
    },
  },
  headlessui: {
    prefix: 'Headless'
  }
})
