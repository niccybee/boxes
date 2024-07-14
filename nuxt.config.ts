// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  compatibilityDate: '2024-04-03',
  modules: ['@nuxtjs/tailwindcss', 'shadcn-nuxt'],
  devtools: { enabled: false },
  shadcn: {
    /**
     * Prefix for all the imported component
     */
    prefix: 'ui',
    /**
     * Directory that the component lives in.
     * @default "./components/ui"
     */
    componentDir: './components/ui'
  }
})