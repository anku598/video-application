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
    provider: {
      type: "authjs",
    },
  },
});
