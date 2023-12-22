<template>
  <header class="bg-blue-300 p-4">
    {{ site.title }} - {{ site.description }}
  </header>
  <div v-if="false" class="hero min-h-screen" style="">
    <div class="hero-overlay bg-opacity-60"></div>
    <div class="hero-content text-center text-neutral-content">
      <div class="max-w-md">
        <h1 class="mb-5 text-5xl font-bold">Hello there</h1>
        <p class="mb-5">
          Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda
          excepturi exercitationem quasi. In deleniti eaque aut repudiandae et a
          id nisi.
        </p>
        <button class="btn btn-primary">Get Started</button>
      </div>
    </div>
  </div>
  <div v-if="page.isNotFound">Custom 404 page!</div>
  <div v-else-if="frontmatter.home">
    <ul>
      <li><a href="/markdown-examples.html">Markdown Examples</a></li>
      <li><a href="/api-examples.html">API Examples</a></li>
    </ul>
  </div>
  <div v-if="page.filePath.startsWith('posts/')">
    <Posts>
      <article class="markdown-body p-4">
        <Content />
      </article>
    </Posts>
  </div>
  <div v-else>
    <a href="/">Home</a>
    <Content />
  </div>
  <Footer />
</template>

<script setup lang="ts">
import { useData } from "vitepress"
import Footer from "./components/footer.vue"
import Posts from "./Posts.vue"

// https://vitepress.dev/reference/runtime-api#usedata
const { site, frontmatter, page } = useData()
// console.log(33, site.value, frontmatter.value)
console.log(44, page.value)
</script>
