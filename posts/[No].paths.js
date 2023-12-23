import posts from "../data/podcasts.json"
// import { loadEnv } from "vitepress"

// const env = loadEnv("", process.cwd())
export default {
  async paths() {
    return posts.data.list.map((post) => {
      return {
        params: {
          No: post.No,
          content: "demo string",
        },
      }
    })
  },
}
