// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  ssr: true,
  app: {
    head: {
      link: [
        {
          hid: 'icon',
          rel: 'icon',
          type: 'image/png',
          href: '/favicon-dark.png',
        },
      ],
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
          'antialiased font-inter bg-zinc-50 dark:bg-storm-400 transition-colors duration-200 ease-in-out h-full',
      },
    },
  },
  css: ['@/assets/scss/main.scss'],
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
    // https://v1.image.nuxtjs.org/get-started/
    '@nuxt/image-edge',
    // https://nuxt.com/modules/vueuse
    '@vueuse/nuxt',
    // pinia plugin - https://pinia.esm.dev
    '@pinia/nuxt',
    // nuxt-icon - https://nuxt.com/modules/icon
    'nuxt-icon',
    // https://supabase.nuxtjs.org/
    '@nuxtjs/supabase',
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
    preference: 'dark',
    fallback: 'dark',
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
