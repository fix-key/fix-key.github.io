<script setup>
import { defineProps } from 'vue'

defineProps({
  color: {
    type: String
  },
  data: {
    type: Object
  },
  Arraylength: {
    type: Number
  }
})
</script>

<template>
  <p class="about_us_content" v-if="data.comment" :style="{ color }">
    {{ data.comment }}
    <br />
    <span :style="{ color }">{{ data.author }}</span>
  </p>
  <div class="about_us_wrapper" v-else>
    <p
      class="about_us_introduction"
      v-if="data.sub_title"
      :class="{
        textAlign: Arraylength === 1,
        about_us_sub_title: Arraylength > 1
      }"
      :style="{ color }"
    >
      {{ data.sub_title }}
    </p>
    <p
      class="about_us_content textAlign"
      v-if="data.content && Arraylength === 1"
      :style="{ color }"
    >
      {{ data.content }}
    </p>
    <p
      class="about_us_content"
      v-if="data.content && Arraylength > 1"
      v-html="data.content"
      :style="{ color }"
    ></p>
  </div>
</template>

<style lang="scss" scoped>
.about_us_wrapper {
  width: 100%;
  height: auto;

  .about_us_introduction {
    color: #fff;
    font-size: 2rem;
    font-family: 'pingFangSC-Bold';
    margin: 3rem 0;
  }

  .textAlign {
    text-align: center;
  }

  .about_us_sub_title {
    margin-top: 4rem;
    margin-bottom: 1rem;
  }

  .about_us_content {
    width: 100%;
    height: auto;
    color: #fff;
    font-size: 1.6rem;
    font-family: 'pingFangSC-Regular';
    line-height: 2.6rem;
  }
}
</style>
