export default {
  /**
   * Target
   * @info https://go.nuxtjs.dev/config-target
   */
  target: 'static',

  /**
   * Global page headers
   * @info https://go.nuxtjs.dev/config-head
   */
  head: {
    title: 'nuxt-template',
    htmlAttrs: {
      lang: 'en',
    },
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: '' },
      { name: 'format-detection', content: 'telephone=no' },
    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' },
    ],
  },

  /**
   * Global CSS
   * @info https://go.nuxtjs.dev/config-css
   */
  css: [
    '~/assets/main.scss',
  ],

  /**
   * Plugins to run before rendering page
   * @info https://go.nuxtjs.dev/config-plugins
   */
  plugins: [
    '~/plugins/global-variables.js',
    '~/plugins/filters.js',
    '~/plugins/smooth-scroll.js',
  ],

  /**
   * Auto import components
   * @info https://go.nuxtjs.dev/config-components
   */
  components: [
    '~/components',
    '~/components/Atoms',
    '~/components/Atoms/Form',
  ],

  /**
   * Modules for dev and build (recommended)
   * @info https://go.nuxtjs.dev/config-modules
   */
  buildModules: [
    '@nuxtjs/tailwindcss', // https://go.nuxtjs.dev/tailwindcss
    '@nuxt/postcss8',
    '@nuxtjs/fontawesome',
    '@nuxtjs/moment',
  ],

  /**
   * Font Awesome
   */
  fontawesome: {
    icons: {
      solid: ['faUserSecret'],
      brands: ['faGithub', 'faTwitter'],
    },
  },

  /**
   * i18n
   * @source https://i18n.nuxtjs.org/setup
   */
  i18n: {
    locales: ['en'],
    defaultLocale: 'en',
    vueI18n: {
      fallbackLocale: 'en',
      messages: {
        en: require('./locales/en.json'),
      },
    },
  },

  /**
   * Modules
   * @info https://go.nuxtjs.dev/config-modules
   */
  modules: [
    '@nuxtjs/i18n',
    '@nuxtjs/axios',
  ],

  /**
   * Build Configuration
   * @info https://go.nuxtjs.dev/config-build
   */
  build: {
    postcss: {
      plugins: {
        tailwindcss: {},
        autoprefixer: {},
      },
    },
  },
}
