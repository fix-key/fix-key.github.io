<script setup>
import {
  cover,
  AboutUsList,
  GameAlbumCover,
  SmallAwardsList,
  PlatformList,
  OrderGamesList
} from '@/utils/RocketOfWhispers.js'
import { ExperienceNowItemList } from '@/utils/AboutUs.js'
import data from '@/assets/data/RocketOfWhispers.json'

const { GeneralSituationDataList, SettingItemDataList, AboutUsItemDataList } =
  data
const {
  ExperienceNowDataList,
  AwardWinningDataList,
  MediaReviewsDataList,
  OtherGamesDataList
} = AboutUsItemDataList
const { MediaReviewsContentDataList } = MediaReviewsDataList
const { OtherGamesContentDataList } = OtherGamesDataList
</script>

<template>
  <ul class="game_list">
    <li>
      <NavBar></NavBar>
      <MediaResources
        tip="媒體資源"
        title="OPUS：灵魂之桥"
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
        width="101"
      ></GeneralSituation>
    </li>
    <li>
      <SettingItem
        v-for="(item, index) in SettingItemDataList"
        :key="item.id"
        :SettingItemListIndex="index"
        :data="item"
        :alignItems="index % 2 === 0 ? 'left' : 'right'"
      ></SettingItem>
    </li>
    <li>
      <EchoOfStarSongItem width="130">
        <AboutUsItem :title="ExperienceNowDataList.title" titleAlign="center">
          <template #experience>
            <div class="experience_wapper">
              <el-image
                v-for="(item, index) in ExperienceNowItemList"
                :key="index"
                :src="item"
                fit="cover"
              ></el-image>
            </div>
          </template>
        </AboutUsItem>
        <span class="hr"></span>
        <AboutUsItem :title="AwardWinningDataList.title" titleAlign="center">
          <template #awards>
            <div class="awards_wapper">
              <p
                v-for="(item, index) in AwardWinningDataList.content"
                :key="index"
              >
                {{ item }}
              </p>
            </div>
          </template>
        </AboutUsItem>
        <span class="hr"></span>
        <AboutUsItem
          :title="MediaReviewsDataList.title"
          titleAlign="center"
          width="90"
        >
          <template #content>
            <div class="winning_awards">
              <AboutUsContentItem
                v-for="item in MediaReviewsContentDataList"
                :key="item.id"
                :data="item"
              ></AboutUsContentItem>
            </div>
          </template>
        </AboutUsItem>
        <span class="hr"></span>
        <GameAlbum
          :cover="GameAlbumCover"
          :platformImages="PlatformList"
          :platformHeight="28"
        ></GameAlbum>
        <span class="hr"></span>
        <AboutUsItem
          :title="OtherGamesDataList.title"
          titleAlign="center"
          width="40"
        >
          <template #works>
            <div class="about_us_works">
              <AboutUsWorkItem
                v-for="(item, index) in OtherGamesContentDataList"
                :key="item.id"
                :data="item"
                :cover="OrderGamesList[index]"
              ></AboutUsWorkItem>
            </div>
          </template>
        </AboutUsItem>
      </EchoOfStarSongItem>
    </li>
  </ul>
  <FooterBar backgroundColor="#5c5c5c"></FooterBar>
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
      background: url('~assets/RocketOfWhispers/bg1.png');
      background-size: cover;

      .award_list {
        width: 116rem;
        margin: 0 auto;
        margin-top: 3rem;

        .small_awards {
          display: flex;
          flex-wrap: wrap;
          width: 100%;
          padding: 0 1rem;
          justify-content: space-between;
          margin-top: 2rem;

          .el-image {
            height: 10rem;
            margin-bottom: 4rem;
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
      background: url('~assets/RocketOfWhispers/bg2.png');
      background-size: cover;
    }

    &:nth-of-type(3) {
      display: flex;
      flex-direction: column;
      height: 389rem;
      min-height: 389rem;
      background: url('~assets/RocketOfWhispers/bg3.png');
      background-size: cover;
      padding: 4rem 5rem;
    }

    &:nth-of-type(4) {
      height: 236rem;
      min-height: 236rem;
      background: url('~assets/RocketOfWhispers/bg4.png');
      background-size: cover;
      padding: 2rem;
      box-sizing: border-box;

      :deep() {
        .about-us-item {
          &:nth-of-type(1) {
            h1 {
              margin-top: 6rem;
            }
          }
        }
      }

      .experience_wapper {
        display: flex;
        flex-wrap: wrap;
        align-items: center;
        justify-content: center;
        width: 100%;

        .el-image {
          width: 26rem;
          margin: 3rem 4rem 0 4rem;

          &:nth-child(2) {
            width: 12rem;
          }
        }
      }

      span.hr {
        display: block;
        width: 61%;
        border-top: 1px solid rgba(235, 165, 24, 58%);
        margin: 7rem 0;
      }

      .awards_wapper {
        display: flex;
        flex-direction: column;
        align-content: center;
        flex-wrap: wrap;
        width: 100%;
        height: 21rem;
        margin-top: 2rem;

        p {
          color: #fff;
          font-size: 1.6rem;
          line-height: 3rem;
          margin: 0 4rem;
        }
      }

      :deep() {
        .winning_awards {
          margin-top: 3rem;

          .about_us_content {
            color: #fff;
            font-size: 1.6rem;
            font-family: 'pingFangSC-Regular';
            line-height: 2.4rem;
            margin-bottom: 2rem;

            span {
              color: #fff;
              font-size: 1.6rem;
            }
          }
        }
      }

      .about_us_works {
        display: flex;
        justify-content: space-evenly;
        margin-top: 2rem;
      }
    }
  }
}
</style>
