<template>
  <div>
    <div>列表页面内容：</div>
    <div v-for="item of data.slice(0, 2)" :key="item._id">
      <!-- <route></route> -->

      <span>{{ item.title }}</span>
      <!-- </p> -->
    </div>

    <hr />
    <!-- <Content /> -->
    <div>{{ page.params.content }}</div>
  </div>
</template>
<script setup>
// import info from "./posts.data.js"
import { useData } from "vitepress"
import { data } from "../../data/posts.data"

const { page } = useData()
console.log(page)

// console.log("--", info)
// console.log(data)
</script>

<style></style>
