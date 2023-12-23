<template>
  <div class="container mx-auto">
    <p>posts 布局===</p>

    <slot />
  </div>
</template>

<script lang="ts" setup>
import { useData } from "vitepress"
import { toRaw, markRaw } from "vue"
const info = useData()

console.log(6, toRaw(info))
</script>
