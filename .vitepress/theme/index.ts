// https://vitepress.dev/guide/custom-theme
import Layout from "./Layout.vue"
import type { Theme } from "vitepress"
import "./assets/base.css"
import DefaultTheme from "vitepress/theme"

// import "./style.css"
// import "github-markdown-css"
import "./assets/light-md.css"

export default {
  Layout,
  extends: DefaultTheme,
  enhanceApp({ app, router, siteData }) {
    // ...
    // console.log(1, app, router, siteData)
  },
} satisfies Theme
