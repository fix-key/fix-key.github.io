<script setup>
import { defineProps } from 'vue'

defineProps({
  cover: {
    type: String
  },
  platformImages: {
    type: Array
  },
  platformHeight: {
    type: Number
  }
})
</script>

<template>
  <div class="game_album_wrapper">
    <h1 class="title">遊戲原聲專輯</h1>
    <el-image :src="cover" class="cover"></el-image>
    <div class="platform_wrapper" :style="{ height: platformHeight + 'rem' }">
      <el-image
        v-for="(item, index) in platformImages"
        :key="index"
        :src="item"
      ></el-image>
    </div>
  </div>
</template>

<style lang="scss" scoped>
.game_album_wrapper {
  display: flex;
  align-items: center;
  justify-content: center;
  width: 82%;
  box-sizing: border-box;

  .title {
    display: flex;
    align-items: center;
    width: 26%;
    color: #fff;
    font-size: 4rem;
    font-family: 'pingFangSC-Regular';
    font-weight: lighter;
    writing-mode: vertical-lr;
    letter-spacing: 0.5rem;
  }

  .cover {
    width: 52rem;
    margin-right: 3.6rem;
  }

  .platform_wrapper {
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    height: 100%;

    .el-image {
      height: 7.8rem;
      object-fit: cover;
    }
  }
}
</style>
