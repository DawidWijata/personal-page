// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
    css: ['@/assets/css/global.css'],
    modules: [
        'nuxt-icon',
        '@nuxtjs/google-fonts',
        '@nuxtjs/i18n'
    ],
    googleFonts: {
        families: {
            'Jost': [400, 500, 600, 700],
        },
    },
    i18n: {
        vueI18n: './i18n.config.ts',
        defaultLocale: 'en',
        locales: [
            {
                code: 'en',
                iso: 'en-US',
                file: 'en.json'
            },
            {
                code: 'pl',
                iso: 'pl-PL',
                file: 'pl.json'
            }
        ],
        strategy: 'prefix_and_default',
        langDir: './lang',
        lazy: true
    }
})
