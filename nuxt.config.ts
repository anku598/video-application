// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  devtools: { enabled: false },

  modules: [
    // ...
    "@pinia/nuxt",
    "nuxt-server-utils",
    "@sidebase/nuxt-auth",
  ],

  nuxtServerUtils: {
    mongodbUri: process.env.MONGODB_URI,
  },

  auth: {
    baseURL: "https://audacity-task.netlify.app",
    provider: {
      type: "authjs",
    },
  },
});
