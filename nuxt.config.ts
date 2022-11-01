// https://v3.nuxtjs.org/api/configuration/nuxt.config
import path from 'path'

export default defineNuxtConfig({
    modules: ['nuxt-icon'],
    vite: {
        resolve: {
            alias: {
              "/@": path.resolve(__dirname, "./src"),
              "/~": path.resolve(__dirname, "../nanta-ui/src"),
            }
          },
    }
})
