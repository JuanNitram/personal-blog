
import en from './lang/en';
import es from './lang/es';

export default {
  mode: 'universal',

  head: {
    title: process.env.npm_package_name || '',
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: process.env.npm_package_description || '' }
    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' },
      { rel: 'stylesheet', href: 'https://use.fontawesome.com/releases/v5.0.7/css/all.css' },
    ],
    script: [
      { src: 'https://www.google.com/recaptcha/api.js', async: true, defer: true }
    ]
  },

  loading: { color: '#fff' },

  css: [
  ],

  plugins: [
    { src: '~/plugins/VueFlickity.js', ssr: false },
    { src: "~/plugins/Aos", ssr: false }
  ],
  
  buildModules: [
    '@nuxtjs/tailwindcss',
  ],

  modules: [
    '@nuxtjs/axios',
    '@nuxtjs/dotenv',
    [
      'nuxt-i18n',
      {
        locales: ['en', 'es'],
        defaultLocale: 'en',
        vueI18n: {
          fallbackLocale: 'en',
          messages: {
            en: en,
            es: es
          }
        }
      }
    ]
  ],

  axios: {
  },

  build: {
    extend (config, ctx) {
    }
  }
}
