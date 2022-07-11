<script setup lang="ts">
import Child from './child.vue'
const isCollapse = ref(false)
const click = () => {
  isCollapse.value = !isCollapse.value
}
const router = useRouter()
</script>

<template>
  <div>
    <div i-carbon-pedestrian text-4xl inline-block />
    <p>Hi, about</p>
    <p text-sm op50>
      <em>Dynamic route!</em>
    </p>
    父组件值
    <div>{{ isCollapse }}</div>
    子组件
    <button class="btn m-3 text-sm mt-8" @click="click()">改变状态</button>
    <Child :isCollapse="isCollapse" />

    <div>
      <button class="btn m-3 text-sm mt-8" @click="router.back()">Back</button>
    </div>
  </div>
</template>
