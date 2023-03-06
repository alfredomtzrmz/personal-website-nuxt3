// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  app: {
    head: {
      htmlAttrs: {
        lang: 'es-MX',
      },
      meta: [
        {
          charset: 'utf-8',
        },
        {
          name: 'viewport',
          content: 'width=device-width, initial-scale=1',
        },
        {
          name: 'description',
          content: '',
        },
      ],
      title: 'Alfredo Martínez | Software Developer',
      bodyAttrs: {
        class:
          'antialiased font-inter bg-zinc-50 transition-colors duration-100 h-full',
      },
    },
  },
  modules: [
    '@nuxtjs/tailwindcss',
    '@nuxtjs/color-mode',
    '@nuxtjs/google-fonts',
    '@nuxt/image-edge',
    '@vueuse/nuxt',
    // pinia plugin - https://pinia.esm.dev
    '@pinia/nuxt',
  ],
  build: {
    transpile: ['@heroicons/vue', '@headlessui/vue'],
  },
  typescript: {
    tsConfig: {
      compilerOptions: {
        strict: true,
        types: ['@pinia/nuxt', './type.d.ts'],
      },
    },
  },
  components: [
    {
      path: '~/components',
      pathPrefix: false,
    },
  ],
  colorMode: {
    classSuffix: '',
  },
  googleFonts: {
    families: {
      Inter: {
        wght: [100, 200, 300, 400, 500, 600, 700, 800, 900],
      },
      'DM+Sans': {
        wght: [100, 200, 300, 400, 500, 600, 700, 800, 900],
      },
    },
  },
  runtimeConfig: {
    API_BASE_URL: process.env.LARAVEL_API_URL,
  },
})
