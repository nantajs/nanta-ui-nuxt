// https://v3.nuxtjs.org/api/configuration/nuxt.config
import Components from 'unplugin-vue-components/vite';
import { AntDesignVueResolver } from 'unplugin-vue-components/resolvers';
import IconsResolver from 'unplugin-icons/resolver';
const isDev = process.env.NODE_ENV === 'development';

export default defineNuxtConfig({
    modules: ['nuxt-icon'],
    vite: {
        ssr: {
            noExternal: ['ant-design-vue', 'dayjs'],
        },
        css: {
            preprocessorOptions: {
                less: {
                    javascriptEnabled: true,
                    // https://www.antdv.com/docs/vue/customize-theme/#Ant-Design-Vue-Less-variables
                    // modifyVars: antdTheme(),
                },
            },
        },
        plugins: [
            Components({
                resolvers: [
                    IconsResolver({
                        prefix: 'Icon',
                    }),
                    // resolveIcons true will error with NITRO_PRESET=cloudflare
                    AntDesignVueResolver({ resolveIcons: false, importStyle: 'less' }),
                ],
                dts: 'types/components.d.ts',
            }),
        ],
        esbuild: isDev
            ? {}
            : {
                pure: !isDev ? ['console.log', 'console.warn', 'debugger'] : [],
                legalComments: 'none',
            },
    },
})
