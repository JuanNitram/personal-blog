require('dotenv').config();

import en from './lang/en';
import es from './lang/es';

export default {
  mode: 'universal',

  head: {
    title: process.env.npm_package_name || '',
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: process.env.npm_package_description || '' },
      { name: "msapplication-TileColor", content: "#da532c"},
      { name: "theme-color", content: "#ffffff"},

      { property: 'og:title', content: 'Juan Vargas | Software Developer' },
      { property: 'og:description', content: 'Software developer from Montevideo, Uruguay. Creative programmer with good knowledge of frontend development.' },
      { property: 'og:type', content: 'website' },
      { property: 'og:url', content: `${process.env.BASE_URL}` },
      { property: 'og:image', content: `${process.env.BASE_URL}/favicon/favicon.jpg` },
      { property: 'og:image:secure_url', content: `${process.env.BASE_URL}/favicon/favicon.jpg` },
      { property: 'og:image:type', content: 'image/jpeg' },
    ],
    link: [
      { rel: 'stylesheet', href: 'https://use.fontawesome.com/releases/v5.0.7/css/all.css' },
      { rel: "apple-touch-icon", sizes: "180x180", href: "favicon/apple-touch-icon.png"},
      { rel: "icon", type: "image/png", sizes: "32x32", href: "favicon/favicon-32x32.png"},
      { rel: "icon", type: "image/png", sizes: "16x16", href: "favicon/favicon-16x16.png"},
      { rel: "manifest", href: "favicon/site.webmanifest"},
      { rel: "mask-icon", href: "favicon/safari-pinned-tab.svg", color: "#5bbad5"}
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
    { src: '~/plugins/VeeValidate.js'},
    { src: '~/plugins/GoogleAnalytics.js', mode: 'client' }
  ],
  
  buildModules: [
    '@nuxtjs/tailwindcss',
  ],

  modules: [
    '@nuxtjs/axios',
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
    ],
    '@nuxtjs/sitemap'
  ],

  axios: {
    baseURL: process.env.API_URL
  },

  sitemap: {
    hostname: process.env.BASE_URL,
    gzip: true,
    routes: [
      '/resume',
      '/contact',
    ]
  },

  build: {
    extend (config, ctx) {
    }
  }
}
