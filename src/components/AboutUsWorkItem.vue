<script setup>
import { defineProps } from 'vue'

defineProps({
  color: {
    type: String
  },
  data: {
    type: Object,
    default: () => ({})
  },
  cover: {
    type: String
  },
  alignItem: {
    type: String,
    default: 'left'
  }
})
</script>

<template>
  <div class="about_us_OPUS" :style="{ 'align-items': alignItem }">
    <el-image :src="cover" alt="" fit="cover" />
    <p class="about_us_title" :style="{ color }">{{ data.sub_title }}</p>
  </div>
</template>

<style lang="scss" scoped>
.about_us_OPUS {
  display: flex;
  flex-direction: column;
  width: 100%;
  flex: 1;
  padding: 0 1rem;
  margin-top: 1.2rem;

  .about_us_title {
    color: #fff;
    font-size: 1.6rem;
    font-family: 'pingFangSC-Bold';
    margin-top: 1.4rem;
    text-align: center;
  }
}
</style>
