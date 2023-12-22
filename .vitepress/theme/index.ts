// https://vitepress.dev/guide/custom-theme
import Layout from "./Layout.vue"
import type { Theme } from "vitepress"
import "./assets/base.css"
// import "./style.css"
import "github-markdown-css"

export default {
  Layout,
  enhanceApp({ app, router, siteData }) {
    // ...
    // console.log(1, app, router, siteData)
  },
} satisfies Theme
