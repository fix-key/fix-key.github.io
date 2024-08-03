<script setup>
import { defineProps, ref } from 'vue'
import { useRouter } from 'vue-router'

const router = useRouter()

const MediaResources = ref(null)

defineProps({
  tip: {
    type: String,
    default: '媒體資源'
  },
  title: {
    type: String,
    default: '龍脈常歌 -最終版-'
  },
  cover: {
    type: String
  }
})

defineExpose({
  MediaResources
})
</script>

<template>
  <div class="content_wrapper" ref="MediaResources">
    <div class="tip">{{ tip }}</div>
    <a class="goback" href="javascript:;" @click="router.go(-1)">返回</a>
    <div class="title">{{ title }}</div>
    <img :src="cover" alt="" />
  </div>
</template>

<style lang="scss" scoped>
.content_wrapper {
  position: relative;
  max-width: 98rem;
  height: 72rem;
  margin: 25px auto;

  .tip {
    width: 100%;
    font-size: 2rem;
    font-family: 'pingFangSC-Bold';
    text-align: center;
    color: #fff;
  }

  .title {
    font-size: 3.6rem;
    font-weight: 400;
    font-family: 'pingFangSC-Regular';
    margin: 24px 0 14px;
    text-align: center;
    color: #fff;
    text-shadow: 0px 3px 3px rgba(0, 0, 0, 0.4);
  }

  .goback {
    position: absolute;
    top: 1.6rem;
    right: 0;
    color: #fff;
    font-size: 1.6rem;
  }

  a:link {
    text-decoration: none;
  }

  img {
    width: 100%;
    object-fit: cover;
  }
}
</style>
