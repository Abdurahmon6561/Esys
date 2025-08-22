export default defineNuxtConfig({
  compatibilityDate: '2025-07-15',
  devtools: { enabled: true },
  modules: ["@nuxtjs/tailwindcss"],
    devServer: {
    port: 5000,
    host: 'localhost',
  },
})
