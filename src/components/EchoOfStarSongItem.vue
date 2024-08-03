<script setup>
import { ref } from 'vue'

const item = ref(null)

defineProps({
  width: {
    type: String,
    default: '100%'
  },
  height: {
    type: String
  },
  title: {
    type: String
  },
  isShow: {
    type: Boolean,
    default: false
  },
  titleStyle: {
    type: Object,
    default: () => {}
  },
  hrStyle: {
    type: Object,
    default: () => {}
  }
})

defineExpose({
  item
})
</script>

<template>
  <div
    ref="item"
    class="EchoOfStarSong_item"
    :style="{ width: width + 'rem', height: height + 'rem' }"
  >
    <h1 v-if="title" :style="titleStyle">{{ title }}</h1>
    <div class="hr" v-if="isShow" :style="hrStyle"></div>
    <slot></slot>
  </div>
</template>

<style lang="scss" scoped>
.EchoOfStarSong_item {
  display: flex;
  align-items: center;
  flex-direction: column;
  margin: 0 auto;

  h1 {
    color: #fff;
    font-size: 4rem;
    font-family: 'pingFangSC-Regular';
    font-weight: 400;
    margin-top: 4.5rem;
  }

  div.hr {
    width: 80rem;
    border-top: 0.1rem solid rgba(235, 165, 24, 0.5);
    margin: 1.2rem 0 1rem;
    box-sizing: border-box;
  }
}
</style>
