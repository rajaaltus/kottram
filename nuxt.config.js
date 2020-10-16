export default {
  // Target (https://go.nuxtjs.dev/config-target)
  target: "static",
  env: {
    API_HASURA_URL: "https://hasura-altus.herokuapp.com/v1/graphql",
  },
  // Global page headers (https://go.nuxtjs.dev/config-head)
  head: {
    title: "kottram",
    meta: [{ charset: "utf-8" }, { name: "viewport", content: "width=device-width, initial-scale=1" }, { hid: "description", name: "description", content: "" }],
    link: [{ rel: "icon", type: "image/x-icon", href: "/favicon.svg" }],
    script: [{ src: "https://cdnjs.cloudflare.com/ajax/libs/gsap/3.5.1/ScrollToPlugin.min.js", defer: true }],
  },

  // Global CSS (https://go.nuxtjs.dev/config-css)
  css: [],
  loading: "~/components/SiteLoader.vue",
  // Plugins to run before rendering page (https://go.nuxtjs.dev/config-plugins)
  plugins: ["@/plugins/hasura.js"],

  // Auto import components (https://go.nuxtjs.dev/config-components)
  components: true,

  // Modules for dev and build (recommended) (https://go.nuxtjs.dev/config-modules)
  buildModules: [
    // https://go.nuxtjs.dev/tailwindcss
    "@nuxtjs/tailwindcss",
    "@nuxtjs/color-mode",
  ],

  // Modules (https://go.nuxtjs.dev/config-modules)
  modules: [
    // https://go.nuxtjs.dev/axios
    "@nuxtjs/axios",
    "@nuxt/http",
    // https://go.nuxtjs.dev/pwa
    "@nuxtjs/pwa",
    // https://go.nuxtjs.dev/content
    "@nuxt/content",
  ],

  tailwindcss: {
    // add '~tailwind.config` alias
    exposeConfig: true,
  },
  purgeCSS: {
    whitelist: ["dark-mode"],
  },
  // Axios module configuration (https://go.nuxtjs.dev/config-axios)
  axios: {},

  // Content module configuration (https://go.nuxtjs.dev/config-content)
  content: {},

  // Build Configuration (https://go.nuxtjs.dev/config-build)
  build: {
    transpile: ["gsap"],
  },
};
