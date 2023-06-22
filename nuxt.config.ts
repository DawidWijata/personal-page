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
            'Jost': [300, 400, 500, 600, 700],
        },
    },
    i18n: {
        vueI18n: './i18n.config.ts',
        defaultLocale: 'us',
        locales: [
            {
                code: 'us',
                iso: 'en-US',
                file: 'us.json',
                name: 'English'
            },
            {
                code: 'pl',
                iso: 'pl-PL',
                file: 'pl.json',
                name: 'Polski'
            }
        ],
        strategy: 'prefix',
        langDir: './lang'
    },
})
