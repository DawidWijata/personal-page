// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
    css: ['@/assets/css/global.css'],
    modules: [
        'nuxt-icon',
        '@nuxtjs/google-fonts'
    ],
    googleFonts: {
        families: {
            'Jost': [400, 500, 600, 700],
        },
    },
})
