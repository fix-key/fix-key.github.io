<script setup>
import { defineProps } from 'vue'

defineProps({
  data: {
    type: Object
  },
  List: {
    type: Array
  }
})
</script>

<template>
  <div
    class="game_introduction_wrapper"
    :style="{ 'flex-direction': data.order }"
  >
    <div class="game_introduction">
      <h3>{{ data.title }}</h3>
      <p>
        {{ data.content }}
      </p>
    </div>
    <div class="game_introduction_image">
      <el-image
        v-for="(item, index) in List"
        :key="index"
        :src="item"
        :style="{
          marginTop: data.order === 'column' ? '5rem' : '0',
          marginBottom: data.order != 'column' ? '5rem' : '0'
        }"
      ></el-image>
    </div>
  </div>
</template>

<style lang="scss" scoped>
.game_introduction_wrapper {
  display: flex;
  flex-direction: column;

  .game_introduction {
    text-align: center;

    h3 {
      font-size: 2rem;
      margin-bottom: 4rem;
    }

    p {
      font-size: 1.6rem;
      text-align: center;
    }
  }

  .game_introduction_image {
    display: flex;
    flex-direction: column;
    justify-content: space-evenly;
    align-items: center;

    .el-image {
      height: 25rem;
    }
  }
}
</style>
