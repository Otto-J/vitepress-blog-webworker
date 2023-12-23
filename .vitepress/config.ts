import { defineConfig } from "vitepress"
// import DefaultTheme from "vitepress/theme"

// https://vitepress.dev/reference/site-config
export default defineConfig({
  title: "Web Worker Podcast",
  description: "Web Worker Podcast - All Frontender Love.",
  lang: "zh-CN",
  // 重写路由
  // rewrites: {}
  // srcExclude: [],
  outDir: "dist", // output
  mpa: false,
  lastUpdated: true,

  // dir

  head: [
    // style 注入
    // ["link", { rel: "icon", href: "/favicon.ico" }],
    // ["link", { rel: "preconnect", href: "https://fonts.googleapis.com" }],
    // [
    //   "script",
    //   {},
    //   `window.dataLayer = window.dataLayer || [];
    //   function gtag(){dataLayer.push(arguments);}
    //   gtag('js', new Date());
    //   gtag('config', 'TAG_ID');`,
    // ],
  ],
  themeConfig: {},
  // extends: DefaultTheme,
  markdown: {
    toc: {
      level: [2, 3],
    },
  },

  async buildEnd(siteConfig) {
    // 构建完成了，马上退出
    console.log("buildEnd- 构建完成了，马上退出", siteConfig)
    // 这里可以拿到 siteCofig.pages 获得所有页面路径
  },
  async postRender(ctx) {
    // console.log("ssg 页面渲染完成，你可以做点啥")
  },
  transformHead(ctx) {
    // 如果是修改页面内容，可以被下面的 transformPageData 替代
    // console.log("处理每个页面的 head，只在 build 生效")
    // // pageData.frontmatter.head ??= []
    // ctx.head.push(["script", {}, `var a=1`])
  },
  transformPageData(pageData) {
    // 这里可以对 pageData 进行数据修改，也可以返回新的对象进行覆盖
    // 这里也可以使用 async await 进行
    // console.log("transformPageData---", pageData)

    // const temp = {
    //   title:
    //     "No.41 和 Vue.js & Vite 作者尤雨溪聊项目进展、开源社区协作和前端思考",
    //   titleTemplate: undefined,
    //   description: "",
    //   frontmatter: {},
    //   headers: [],
    //   params: undefined,
    //   relativePath: "posts/test.md",
    //   filePath: "posts/test.md",
    //   lastUpdated: 1703264442000,
    // }
    pageData.frontmatter.head ??= []
    console.log("dev/prod 环境 渲染了页面")
    pageData.frontmatter.head.push([
      "script",
      {
        id: "test-transformPageData",
      },
      `var b=1`,
    ])
  },
})
