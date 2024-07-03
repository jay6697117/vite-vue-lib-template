<script setup lang="ts">
interface Props {
  text?: string
}

const props = withDefaults(defineProps<Props>(), {
  text: 'defaut string',
})
console.log('props :>> ', props)
</script>
<template>
  <button class="button">
    <span></span>
    <slot name="default"></slot>
  </button>
</template>

<style scoped></style>
