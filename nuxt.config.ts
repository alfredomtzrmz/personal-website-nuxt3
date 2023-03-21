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
      title: 'Alfredo Martínez | FrontEnd Engineer',
      bodyAttrs: {
        class:
          'antialiased font-inter bg-zinc-50 dark:bg-storm-400 transition-colors duration-100 h-full',
      },
    },
  },
  appConfig: {
    nuxtIcon: {
      size: '16px',
    },
  },
  modules: [
    '@nuxtjs/tailwindcss',
    // https://color-mode.nuxtjs.org/
    '@nuxtjs/color-mode',
    '@nuxtjs/google-fonts',
    '@nuxt/image-edge',
    '@vueuse/nuxt',
    // pinia plugin - https://pinia.esm.dev
    '@pinia/nuxt',
    // nuxt-icon - https://nuxt.com/modules/icon
    'nuxt-icon',
  ],
  build: {
    transpile: ['@headlessui/vue'],
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
    storageKey: 'color-mode',
    preference: 'system',
    fallback: 'light',
  },
  googleFonts: {
    families: {
      Inter: {
        wght: [100, 200, 300, 400, 500, 600, 700, 800, 900],
      },
    },
  },
  runtimeConfig: {},
});
