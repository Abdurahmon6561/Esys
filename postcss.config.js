export default defineNuxtConfig({
  css: ['~/assets/css/tailwind.css'], 

  postcss: {
    plugins: {
      tailwindcss: {},
      autoprefixer: {},
    },
  },
    nitro: {
    prerender: {
      crawlLinks: true, 
      routes: ['/'],
      ignore: ['/api'] 
    }
  }
})
