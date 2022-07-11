<script lang="ts" setup>
const props = defineProps({
  isCollapse: { type: Boolean, required: true },
})
const newIsCollapse = ref(props.isCollapse)
const computedIsCollapse = computed(() => props.isCollapse)
</script>
<template>
  <div>{{ isCollapse }}</div>
  <div>{{ newIsCollapse }}</div>
  <div>{{ computedIsCollapse }}</div>
</template>
