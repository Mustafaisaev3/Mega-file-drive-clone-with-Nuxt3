// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  modules: [
    '@nuxtjs/tailwindcss', 
    'shadcn-nuxt',
    'nuxt-icon',
    '@pinia/nuxt'
  ],
  css: [
    'video.js/dist/video-js.css'
  ],
  devtools: { enabled: true },
  build: {
    transpile: ['vue-clerk', '@clerk/clerk-js'],
  },
  runtimeConfig: {
    public: {
      clerkPublishableKey: process.env.CLERK_PUBLISHABLE_KEY,
    },
    clerkSecretKey: process.env.CLERK_SECRET_KEY,
  },
  routeRules: {
    '/': { redirect: '/storage' },
  },
})

