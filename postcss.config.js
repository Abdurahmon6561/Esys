// nuxt.config.ts
export default defineNuxtConfig({
  css: ['~/assets/css/tailwind.css'], // 👈 load Tailwind

  postcss: {
    plugins: {
      tailwindcss: {},
      autoprefixer: {},
    },
  },
})
