<script setup>
import {
  cover,
  SmallAwardsList,
  AboutUsList,
  GameFeaturesItemList,
  GameCoverItemList,
  AboutUsItemWorkList
} from '@/utils/PrismPeak.js'
import data from '@/assets/data/PrismPeak.json'

const { GeneralSituationDataList, AboutUsItemDataList } = data
</script>

<template>
  <ul class="game_list">
    <li>
      <NavBar></NavBar>
      <MediaResources
        tip="媒體資源"
        title="OPUS：心相吾山"
        :cover="cover"
      ></MediaResources>
      <div class="award_list">
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
        :AboutUsList="AboutUsList"
        :data="GeneralSituationDataList"
        width="110"
        textAlign="center"
      ></GeneralSituation>
    </li>
    <li>
      <EchoOfStarSongItem
        width="128"
        title="遊戲特色"
        :isShow="true"
        :titleStyle="{ color: '#000' }"
        :hrStyle="{ borderTop: '0.1rem solid rgba(0, 0, 0, 0.5)' }"
      >
        <el-image
          v-for="(item, index) in GameFeaturesItemList"
          :key="index"
          :src="item"
        ></el-image>
      </EchoOfStarSongItem>
    </li>
    <li>
      <EchoOfStarSongItem
        width="128"
        title="遊戲畫面"
        :isShow="true"
        :titleStyle="{ color: '#000' }"
        :hrStyle="{ borderTop: '0.1rem solid rgba(0, 0, 0, 0.5)' }"
      >
        <el-image
          v-for="(item, index) in GameCoverItemList"
          :key="index"
          :src="item"
        ></el-image>
      </EchoOfStarSongItem>
      <div class="media_wapper">
        <button>媒體資源包下載</button>
        <p>資源包內含所有以上內容</p>
      </div>
    </li>
    <li>
      <AboutUs
        :AboutUsItemDataList="AboutUsItemDataList"
        :AboutUsItemWorkList="AboutUsItemWorkList"
        color="#000"
        :isShow="false"
      ></AboutUs>
    </li>
  </ul>
  <FooterBar color="#000" backgroundColor="#fff"></FooterBar>
</template>

<style lang="scss" scoped>
.game_list {
  width: 100%;
  height: auto;

  > li {
    width: 100%;
    overflow: hidden;

    &:nth-of-type(1) {
      height: 100vh;
      min-height: 122rem;
      background: url('~assets/PrismPeak/bg1.png');
      background-size: cover;

      .award_list {
        width: 100%;
        background-color: rgba(68, 68, 68, 0.7);

        .small_awards {
          display: flex;
          flex-wrap: wrap;
          width: 116rem;
          margin: 0 auto;
          justify-content: space-between;

          .el-image {
            height: 10rem;

            &:nth-child(4) {
              margin-bottom: 4rem;
            }
          }
        }
      }
    }

    &:nth-of-type(2) {
      display: flex;
      justify-content: center;
      align-items: center;
      height: 114rem;
      min-height: 114rem;
      background: url('~assets/PrismPeak/bg2.png');
      background-size: cover;

      :deep() {
        .right {
          .content {
            margin-top: 1rem;
          }

          .el-image {
            height: 34.6rem;
          }
        }
      }
    }

    &:nth-of-type(3) {
      height: 463rem;
      min-height: 463rem;

      .el-image {
        width: 100%;
        margin-top: 5rem;
      }
    }

    &:nth-of-type(4) {
      display: flex;
      flex-direction: column;
      align-items: center;
      height: 342rem;
      min-height: 342rem;

      .el-image {
        width: 100%;
        margin-top: 5rem;
      }

      .media_wapper {
        display: flex;
        flex-direction: column;
        align-items: center;
        width: 81.2rem;
        height: 15.8rem;
        border-bottom: 1px solid rgba(0, 0, 0, 0.58);
        margin-top: 2rem;

        button {
          width: 26.8rem;
          height: 7.4rem;
          border-radius: 40px;
          color: #fff;
          background-color: #000;
          font-size: 2rem;
        }

        p {
          color: #000;
          font-size: 2rem;
          font-family: 'pingFangSC-Bold';
          margin-top: 1.8rem;
        }
      }
    }

    &:nth-of-type(5) {
      height: 302rem;
      min-height: 302rem;

      :deep() {
        .about_us {
          margin-top: 3rem;

          .about_us_OPUS:nth-child(1) {
            flex: auto;
          }
        }
      }
    }
  }
}
</style>
