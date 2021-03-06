import colors from "vuetify/es5/util/colors";
import path from "path";
import fs from "fs";
require("dotenv").config();

export default {
  env: {
    apiUrl: process.env.API_URL || process.env.APP_URL + "/api",
    appLocale: process.env.APP_LOCALE || "en"
  },
  server: {
    port: 9556,
    host: "0.0.0.0",
    https: {
      key: fs.readFileSync(path.resolve(__dirname, "./cert/blogfront.key")),
      cert: fs.readFileSync(path.resolve(__dirname, "./cert/blogfront.pem"))
    }
  },
  mode: "universal",
  /*
   ** Headers of the page
   */
  head: {
    titleTemplate: process.env.HEAD_TITLE,
    title: process.env.npm_package_name || "",
    meta: [
      { charset: "utf-8" },
      { name: "viewport", content: "width=device-width, initial-scale=1" },
      {
        hid: "description",
        name: "description",
        content: process.env.HEAD_DESCRIPTION || ""
      }
    ],
    link: [
      { rel: "icon", type: "image/x-icon", href: "/favicon.ico" },
      {
        rel: "stylesheet",
        href:
          "https://fonts.googleapis.com/css?family=Roboto:300,400,500,700|Material+Icons"
      }
    ]
  },
  /*
   ** Customize the progress-bar color
   */
  loading: { color: "#fff" },
  /*
   ** Global CSS
   */
  css: [],
  /*
   ** Plugins to load before mounting the App
   */
  plugins: [{ src: "~/plugins/base" }, { src: "~/plugins/axios" }],
  /*
   ** Nuxt.js modules
   */
  modules: [
    "@nuxtjs/vuetify",
    // Doc: https://axios.nuxtjs.org/usage
    // '@nuxtjs/axios',
    "@nuxtjs/pwa",
    "@nuxtjs/dotenv"
  ],
  /*
   ** Axios module configuration
   ** See https://axios.nuxtjs.org/options
   */
  axios: {},
  /*
   ** vuetify module configuration
   ** https://github.com/nuxt-community/vuetify-module
   */
  vuetify: {
    theme: {
      primary: colors.blue.darken2,
      accent: colors.grey.darken3,
      secondary: colors.amber.darken3,
      info: colors.teal.lighten1,
      warning: colors.amber.base,
      error: colors.deepOrange.accent4,
      success: colors.green.accent3
    },
    icons: {
      iconfont: "mdi"
    }
  },
  /*
   ** Build configuration
   */
  build: {
    /*
     ** You can extend webpack config here
     */
    extend(config, ctx) {}
  }
};
