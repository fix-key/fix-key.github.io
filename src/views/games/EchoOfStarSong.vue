<script setup>
import NavBar from '@/components/NavBar.vue'
import data from '@/assets/data/EchoOfStarSong.json'
import {
  cover,
  AboutUsList,
  GameFeaturesList,
  MajorAwardsList,
  SmallAwardsList,
  AboutUsItemWorkList,
  GameScreenshotList
} from '@/utils/EchoOfStarSong.js'
import { onMounted, ref } from 'vue'

// 游戏特色的轮播
const index = ref(0)
// 角色顺序
const roleList = ref([['Aida'], ['LiMo'], ['Dakui', 'Lamia']])

const { GeneralSituationDataList, AboutUsItemDataList } = data

onMounted(() => {
  const autoCarouselPlay = () => {
    setInterval(() => {
      if (index.value > 2) {
        index.value = 0
      }
      autoImgChange(index)
      index.value++
    }, 5000)
  }
  autoCarouselPlay()

  // 更改背景图
  const autoImgChange = (index) => {
    $('.Game_features_item').each((i, el) => {
      $(el).css({ backgroundImage: `url(${GameFeaturesList[i][index.value]})` })
    })
  }
})
</script>

<template>
  <ul class="game_list">
    <li>
      <NavBar></NavBar>
      <MediaResources
        tip="媒體資源"
        title="OPUS：龍脈常歌 -最終版-"
        :cover="cover"
      ></MediaResources>
      <div class="award_list" ref="itemRef1">
        <div class="major_awards">
          <el-image
            v-for="(item, index) in MajorAwardsList"
            :key="index"
            :src="item"
            fit="cover"
            alt=""
          />
        </div>
        <div class="small_awards">
          <el-image
            v-for="(item, index) in SmallAwardsList"
            :key="index"
            :src="item"
            fit="cover"
            lazy
            alt=""
          />
        </div>
      </div>
    </li>
    <li>
      <GeneralSituation
        ref="itemRef2"
        :AboutUsList="AboutUsList"
        :data="GeneralSituationDataList"
        width="104"
      ></GeneralSituation>
    </li>
    <li>
      <EchoOfStarSongItem
        ref="itemRef3"
        width="110"
        title="遊戲特色"
        :isShow="true"
      >
        <div class="Game_features">
          <div
            class="Game_features_item"
            v-for="(item, index) in GameFeaturesList"
            :key="index"
            :style="{
              backgroundImage: `url(${item[0]})`
            }"
            alt=""
          >
            <GameFeatureItem :index="index">
              <template #item="data">
                <h2 class="Game_features_item_title">
                  {{ data.data[index].title }}
                </h2>
                <el-image
                  :src="data.data[index].cover"
                  alt=""
                  class="Game_features_item_cover"
                  fit="cover"
                />
                <p
                  class="Game_features_item_description"
                  v-html="data.data[index].description"
                ></p>
              </template>
            </GameFeatureItem>
            <RoleIntroduction
              v-for="(item, index) in roleList[index]"
              :key="index"
              :name="item"
            >
            </RoleIntroduction>
          </div>
        </div>
      </EchoOfStarSongItem>
    </li>
    <li>
      <EchoOfStarSongItem width="110" title="遊戲截圖" :isShow="true">
        <div class="Game_screenshot">
          <el-image
            v-for="(item, index) in GameScreenshotList"
            :key="index"
            :src="item"
            :preview-src-list="GameScreenshotList"
            :initial-index="index"
            :hide-on-click-modal="true"
            infinite
          />
        </div>
      </EchoOfStarSongItem>
    </li>
    <li>
      <AboutUs
        :AboutUsItemDataList="AboutUsItemDataList"
        :AboutUsItemWorkList="AboutUsItemWorkList"
        :isShow="true"
      ></AboutUs>
    </li>
  </ul>
  <FooterBar></FooterBar>
</template>

<style lang="scss" scoped>
.game_list {
  width: 100%;
  height: auto;

  > li {
    width: 100%;
    overflow: hidden;
    height: 138rem;
    min-height: 138rem;
    &:nth-of-type(1) {
      background: url('~assets/EchoOfStarSong/bg1.png');
      background-size: cover;

      .award_list {
        width: 116rem;
        margin: 0 auto;
        margin-top: 4rem;

        .major_awards {
          display: flex;
          justify-content: space-between;
          width: 100%;
          height: 12rem;
          margin-bottom: 10px;

          .el-image {
            height: 12rem;
          }
        }

        .small_awards {
          display: flex;
          flex-wrap: wrap;
          width: 100%;
          padding: 0 1rem;
          justify-content: space-between;
          margin-top: 4rem;

          .el-image {
            height: 9rem;
          }
        }

        .el-image {
          margin-bottom: 4rem;
        }
      }
    }

    &:nth-of-type(2) {
      display: flex;
      justify-content: center;
      align-items: center;
      height: 114rem;
      min-height: 114rem;
      background: url('~assets/EchoOfStarSong/bg2.png');
      background-size: cover;
    }

    &:nth-of-type(3) {
      display: flex;
      justify-content: center;
      height: 435rem;
      min-height: 435rem;
      background: url('~assets/EchoOfStarSong/bg3.png');
      background-size: cover;

      .Game_features {
        width: 100%;
        box-sizing: border-box;

        .Game_features_item {
          position: relative;
          display: flex;
          justify-content: center;
          align-items: center;
          width: 100%;
          height: 67rem;
          margin-bottom: 3rem;
          background-size: cover;
          transition: all 0.5s ease;
        }
      }
    }

    &:nth-of-type(4) {
      display: flex;
      justify-content: center;
      height: 138rem;
      min-height: 138rem;
      background: url('~assets/EchoOfStarSong/bg4.png');
      background-size: cover;

      .Game_screenshot {
        display: flex;
        flex-wrap: wrap;
        justify-content: space-evenly;
        width: 100%;
        box-sizing: border-box;

        :deep() {
          .el-image {
            width: 43%;
            object-fit: cover;
            margin-bottom: 6rem;
          }
        }
      }
    }

    &:nth-of-type(5) {
      height: 260rem;
      min-height: 260rem;
      background: url('~assets/EchoOfStarSong/bg5.png');
      background-size: cover;
    }
  }
}
</style>
