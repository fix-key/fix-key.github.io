<script setup>
import { defineProps } from 'vue'

defineProps({
  sub_title: {
    type: String,
    default: '标题'
  },
  underline: {
    type: Boolean,
    default: false
  }
})
</script>

<template>
  <div class="general_situation_wrapper">
    <div class="sub_title">{{ sub_title }}：</div>
    <div class="content" :class="{ underline: underline }">
      <slot></slot>
    </div>
  </div>
</template>

<style lang="scss" scoped>
.general_situation_wrapper {
  margin-bottom: 1.4rem;

  .sub_title {
    color: #fff;
    font-size: 2rem;
    font-family: 'pingFangSC-Bold';
  }

  .content {
    :deep() {
      p {
        color: #fff;
        font-size: 1.7rem;
        font-family: 'pingFangSC-Regular';
      }
    }
  }

  .underline {
    :deep() {
      p {
        text-decoration: underline;
      }
    }
  }
}
</style>
