// https://v3.nuxtjs.org/api/configuration/nuxt.config
import Components from 'unplugin-vue-components/vite';
import { AntDesignVueResolver } from 'unplugin-vue-components/resolvers';
import IconsResolver from 'unplugin-icons/resolver';
const isDev = process.env.NODE_ENV === 'development';

export default defineNuxtConfig({
    modules: ['nuxt-icon'],
})
