<script setup>
import { defineProps } from 'vue'

defineProps({
  width: {
    width: Number,
    default: 100
  },
  title: {
    type: String
  },
  color: {
    type: String
  }
})
</script>

<template>
  <div class="about-us-item" :style="{ width: `${width}%` }">
    <h1 v-if="title" class="about-us-title" :style="{ color }">
      {{ title }}
    </h1>
    <slot name="content"></slot>
    <slot name="works"></slot>
    <slot name="experience"></slot>
    <slot name="awards"></slot>
  </div>
</template>

<style lang="scss" scoped>
.about-us-item {
  width: 100%;

  h1 {
    color: #fff;
    font-size: 4rem;
    font-weight: 400;
    font-family: 'pingFangSC-Regular';
    text-align: center;
  }
}
</style>
