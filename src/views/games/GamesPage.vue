<script setup>
import { useRouter } from 'vue-router'
import { computed, onMounted, watch } from 'vue'
import { useOpusGameStore } from '@/stores'
import { GamesBgImgList, GamesOpusImgList } from '@/utils/GamesPage.js'
import { GamesMainContentList } from '@/assets/data/GamesPage.json'

// 路由实例
const router = useRouter()
const gameStore = useOpusGameStore()

// 路由跳转
const go = (url) => {
  router.push(url)
}

let flag = true
// 鼠标点击左右按钮轮播
const onhandelClickChange = (arrow) => {
  if (flag) {
    if (arrow == 'left') {
      gameStore.reducePage()
      if (gameStore.page < 0) {
        gameStore.setPage(GamesMainContentList.length - 1)
      }
    } else {
      gameStore.addPage()
      if (gameStore.page > GamesMainContentList.length - 1) {
        gameStore.setPage(0)
      }
    }

    flag = false
    setTimeout(() => {
      flag = true
    }, 500)
  }
  onImgClickChange(gameStore.index)
}

onMounted(() => {
  watch(
    gameStore,
    (newValue) => {
      onOpusImgChange(newValue.page)
      onNavColorChange(newValue.page)
      onProgressChange(newValue.page)
      onMouseClickChange(newValue.page)
      onImgClickChange(newValue.index)
    },
    {
      immediate: true
    }
  )

  // 鼠标点击图片切换轮播
  const onCarouselChange = () => {
    $('.banner_show li').each((i, el) => {
      $(el).on('click', () => {
        gameStore.setPage(i)
      })
    })
  }

  onCarouselChange()
})

const textColor = computed(() => {
  if (gameStore.page === 0) {
    return 'textColor_E8E0C4'
  } else if (gameStore.page === 1) {
    return 'textColor_EDF7F9'
  } else if (gameStore.page === 2) {
    return 'textColor_Linear'
  } else {
    return 'textColor_fff'
  }
})

// 更改导航栏颜色
const onNavColorChange = (page) => {
  if (page == $('.banner_show li').length - 1) {
    $('nav a').css({ color: '#000' })
    $('.nav_sub a').css({ color: '#000' })
    $('.nav_icon span').css({ backgroundColor: '#000' })
  } else {
    $('nav a').css({ color: '#fff' })
    $('.nav_sub a').css({ color: '#fff' })
    $('.nav_icon span').css({ backgroundColor: '#fff' })
  }
}

// OPUS 图片的切换
const onOpusImgChange = (index) => {
  $('.title img').attr('src', GamesOpusImgList[index])
  if (index === 0) {
    $('.title img').css({ width: '17rem' })
  } else {
    $('.title img').css({ width: '16rem' })
  }
}

// 更改背景图
const onImgClickChange = (index) => {
  if (index) {
    $('.container').css({
      backgroundImage: `url(${GamesBgImgList[gameStore.page][1]})`
    })
  } else {
    $('.container').css({
      backgroundImage: `url(${GamesBgImgList[gameStore.page][0]})`
    })
  }
}

// 切换进度条
const onProgressChange = (index) => {
  $('.banenr_progress span').css({ transform: `translateX(${index * 100}%)` })
}

// 切换图片边框选中效果
const onMouseClickChange = (index) => {
  $('.banner_show li')
    .eq(index)
    .addClass('active')
    .siblings()
    .removeClass('active')
}
</script>

<template>
  <main @click="go(GamesMainContentList[gameStore.page].url)">
    <div class="content_wrap">
      <div
        class="content_wrapper"
        :class="textColor"
        :style="
          gameStore.page % 2 == 0
            ? 'text-align: left; align-items: flex-start'
            : 'text-align: right; align-items: flex-end'
        "
      >
        <h1 class="title">
          <img src="@/assets/img/games/Echo_OPUS.png" alt="" />
          <el-text class="title_en">{{
            GamesMainContentList[gameStore.page].title
          }}</el-text>
        </h1>
        <div
          v-html="GamesMainContentList[gameStore.page].content"
          id="content"
        ></div>
      </div>
    </div>

    <div class="arrow_wrap">
      <div @click.stop="onhandelClickChange('left', $event)" class="arrow_left">
        <img src="@/assets/img/games/arrow_left.png" alt="" />
      </div>

      <div
        @click.stop="onhandelClickChange('right', $event)"
        class="arrow_right"
      >
        <img src="@/assets/img/games/arrow_right.png" alt="" />
      </div>
    </div>
  </main>

  <footer>
    <div class="banner_wrap">
      <el-text class="banner_title">SIGONO</el-text>
      <div class="banenr_progress">
        <span class="active"></span>
      </div>
      <ul class="banner_show">
        <li class="active">
          <img src="@/assets/img/games/About_EoS.png" alt="" />
        </li>
        <li>
          <img src="@/assets/img/games/About_RoW.png" alt="" />
        </li>
        <li>
          <img src="@/assets/img/games/About_TDWFE.png" alt="" />
        </li>
        <li>
          <img src="@/assets/img/games/About_Prism.png" alt="" />
        </li>
      </ul>
    </div>

    <div class="video">
      <img src="@/assets/img/games/video_cover.png" alt="" />
    </div>
  </footer>

  <!-- <div class="toolbar">
    <img src="@/assets/img/games/icon1.png" alt="" />
    <img src="@/assets/img/games/icon2.png" alt="" />
    <img src="@/assets/img/games/icon3.png" alt="" />
    <img src="@/assets/img/games/icon4.png" alt="" />
  </div> -->
</template>

<style lang="scss" scoped>
$banenr_progress_width: 24rem;
$banner_progress_span_width: calc($banenr_progress_width / 4);

// 内容
main {
  position: relative;
  display: flex;
  align-items: center;
  width: 100%;
  height: auto;
  z-index: -1;
  cursor: pointer;

  .content_wrap {
    width: 115rem;
    margin: 0 auto;
    letter-spacing: 0.12rem;

    .textColor_E8E0C4 {
      .title_en {
        color: #e8e0c4;
      }

      #content {
        p {
          color: #e8e0c4;

          i {
            color: #e8e0c4;
          }
        }
      }
    }

    .textColor_EDF7F9 {
      .title_en {
        color: #edf7f9;
      }

      #content {
        :deep() {
          p {
            color: #edf7f9;

            i {
              color: #edf7f9;
            }
          }
        }
      }
    }

    .textColor_Linear {
      #content {
        :deep() {
          p {
            color: rgba(255, 255, 255, 0.79);

            i {
              background-image: linear-gradient(
                90deg,
                rgba(255, 255, 255, 0.7),
                rgba(255, 255, 255, 1)
              );
              -webkit-background-clip: text;
              -webkit-text-fill-color: transparent;
            }
          }
        }
      }
    }

    .textColor_fff {
      .title_en {
        color: #fff;
      }

      #content {
        :deep() {
          p {
            color: #fff;

            i {
              color: #fff;
            }
          }
        }
      }
    }

    .content_wrapper {
      display: flex;
      flex-direction: column;
      transform: translateY(-3rem);

      h1.title {
        display: flex;
        align-items: center;
        height: 5.4rem;
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

      #content {
        :deep() {
          p {
            margin-top: 1.8rem;
            font-family: 'pingFangSC-Bold';

            &:nth-of-type(1) {
              font-size: 2rem;
            }

            i {
              font-size: 2.1rem;
              font-family: 'Times New Roman', Times, serif;
            }
          }
        }
      }
    }
  }

  // 箭头
  .arrow_wrap {
    position: absolute;
    width: 100%;
    height: 100%;
    z-index: 99;

    div {
      position: absolute;
      width: 6rem;
      height: 6rem;
      top: 50%;
      transform: translateY(-50%);
      cursor: pointer;

      img {
        width: 100%;
        height: 100%;
      }
    }

    .arrow_left {
      left: 2.5rem;
      z-index: 99;
    }

    .arrow_right {
      right: 2.5rem;
      z-index: 99;
    }
  }
}

// 底部
footer {
  display: flex;
  justify-content: space-between;
  align-items: flex-end;
  padding: 0 3.6rem;

  .banner_wrap {
    width: 79rem;
    height: auto;
    // background-color: rgb(127, 8, 255);

    .banner_title {
      color: #fff;
      font-size: 2.4rem;
      letter-spacing: 0.4rem;
      font-family: 'Times New Roman', Times, serif;
    }

    .banenr_progress {
      width: $banenr_progress_width;
      height: 0.5rem;
      margin-top: 0.4rem;
      background-color: rgba(217, 217, 217, 0.4);
      border-radius: 1rem;

      span {
        display: block;
        width: $banner_progress_span_width;
        height: 100%;
        border-radius: 1rem;
      }

      .active {
        transition: all 0.3s ease;
        background-color: rgba(217, 217, 217, 1);
      }
    }

    .banner_show {
      display: flex;
      justify-content: space-between;
      margin-top: 2.1rem;

      li {
        width: 19rem;
        height: 19rem;
        border: 0.3rem solid #fff;
        border-radius: 1.2rem;
        transition: all 0.24s;
        cursor: pointer;
        overflow: hidden;

        &:hover {
          transform: translateY(-1rem);
          transition: all 0.3s;
        }

        img {
          width: 100%;
          height: 100%;
          object-fit: cover;
        }
      }

      .active {
        border: 0.3rem solid $bg_active;
      }
    }
  }

  .video {
    width: auto;
    height: 19rem;
    margin-right: 1rem;

    img {
      height: 100%;
      object-fit: cover;
    }
  }
}

// 工具栏
.toolbar {
  position: absolute;
  bottom: 4px;
  right: 4px;
  width: 100px;
  display: flex;
  justify-content: space-between;
  align-items: center;

  img {
    width: 16px;
    height: 16px;
  }
}
</style>
