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
    baseURL: process.env.AUTH_ORIGIN || "http://localhost:3000/",
    provider: {
      type: "authjs",
    },
  },
});
