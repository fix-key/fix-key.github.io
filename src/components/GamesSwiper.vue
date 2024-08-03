<script setup>
import {
  Navigation,
  Pagination,
  Keyboard,
  EffectFade,
  Mousewheel
} from 'swiper/modules'
import { GamesMainContentList } from '@/assets/data/GamesPage.json'
import { GamesBgImgList, GamesOpusImgList } from '@/utils/GamesPage.js'
import { computed } from 'vue'

const swiperOptions = {
  modules: [Navigation, Pagination, Keyboard, EffectFade, Mousewheel],
  // 其他Swiper配置...
  navigation: {
    nextEl: '.swiper-button-next', // 自定义导航按钮的选择器
    prevEl: '.swiper-button-prev' // 自定义导航按钮的选择器
  }
}

const textDirection = computed(() => (index) => {
  let page = index + 1
  return (page + 1) % 2 == 0
    ? 'text-align: left; align-items: flex-start'
    : 'text-align: right; align-items: flex-end'
})

// Update the current page index when a slide changes
const updateCurrentPage = (i) => {
  console.log(i)
}

console.log(GamesMainContentList)
console.log(GamesBgImgList, GamesOpusImgList)
</script>

<template>
  <swiper
    :modules="swiperOptions.modules"
    :effect="'fade'"
    :navigation="swiperOptions.navigation"
    :keyboard="true"
    :mousewheel="true"
    :loop="true"
    @activeIndexChange="updateCurrentPage"
  >
    <swiper-slide v-for="(item, index) in GamesMainContentList" :key="item.id">
      <!-- 背景图片 -->
      <img :src="GamesBgImgList[index][0]" class="bg" alt="" />

      <!-- 主要内容 -->
      <div class="content-wapper" :style="textDirection(index)">
        <h1 class="title">
          <img :src="GamesOpusImgList[index]" alt="" />
          <el-text class="title_en">{{
            GamesMainContentList[index].title
          }}</el-text>
        </h1>

        <div v-html="GamesMainContentList[index].content" class="content"></div>
      </div>
    </swiper-slide>

    <!-- 左右箭头 -->
    <div @click.stop="prevEl(item, index)" class="swiper-button-prev"></div>

    <div @click.stop="nextEl" class="swiper-button-next"></div>
  </swiper>
</template>

<style lang="scss" scoped>
.swiper {
  position: absolute;
  width: 100vw;
  height: 100vh;
  z-index: -1;

  .swiper-slide {
    display: flex;
    flex-direction: column;
    justify-content: center;

    img.bg {
      position: absolute;
      top: 0;
      left: 0;
      width: 100%;
      height: 100%;
      object-fit: cover;
    }

    .content-wapper {
      display: flex;
      flex-direction: column;
      padding: 0 18rem;
      z-index: 1;
      transform: translateY(-8.6rem);

      h1.title {
        display: flex;
        align-items: center;
        font-weight: 600;
        font-family: 'pingFangSC-Regular';
        letter-spacing: 0.5rem;

        img {
          width: 18rem;
          object-fit: cover;
          margin-right: 1.4rem;
        }

        .title_en {
          font-size: 4rem;
        }
      }

      .content {
        margin: 0 0.6rem;

        :deep() {
          p {
            margin-top: 1.6rem;
            font-family: 'pingFangSC-Bold';

            &:nth-of-type(1) {
              font-size: 2rem;
            }

            i {
              font-size: 2.1rem;
              word-spacing: 0.5rem;
              font-family: 'Times New Roman', Times, serif;
            }
          }
        }
      }
    }
  }

  // 左右箭头
  .swiper-button-prev,
  .swiper-button-next {
    position: absolute;
    width: 6.4rem;
    height: 6.4rem;
    z-index: 1;

    &:after {
      content: ''; /* 移除默认图标 */
      display: block;
      width: 100%;
      height: 100%;
    }
  }

  .swiper-button-prev {
    left: 3rem;

    &:after {
      background: url('@/assets/img/games/arrow_left.png') no-repeat;
      background-size: cover;
    }
  }

  .swiper-button-next {
    right: 3rem;

    &:after {
      background: url('@/assets/img/games/arrow_right.png') no-repeat;
      background-size: cover;
    }
  }
}
</style>
