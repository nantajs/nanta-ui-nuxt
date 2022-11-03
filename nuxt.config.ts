// https://v3.nuxtjs.org/api/configuration/nuxt.config
import path from 'path'
import filterReplace from './build/filterReplace';

export default defineNuxtConfig({
  app: {
    baseURL: process.env.MINDPRESS_MODE === 'ghpages' ? '/nanta-ui-nuxt/' : '/',
  },
  modules: ['nuxt-icon'],
  vite: {
    plugins: [filterReplace(
      [
        {
          filter: /\.vue$/,
          replace: {
            from: /\/~\/main/g,
            to: '@nanta/ui'
          },
        },
        {
          filter: /\.ts$/,
          replace: {
            from: /\/~\/main/g,
            to: '@nanta/ui'
          },
        },
      ],
      {
        enforce: 'pre',
        apply: 'build'
      }
    )],
    resolve: {
      alias: {
        "/@": path.resolve(__dirname, "./src"),
        "/~": path.resolve(__dirname, "../nanta-ui/src"),
      }
    },
  }
})
