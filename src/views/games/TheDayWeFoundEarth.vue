<script setup>
import {
  cover,
  AboutUsList,
  GameAlbumCover,
  SmallAwardsList,
  GameIntroductionList,
  PlatformList,
  OrderGamesList
} from '@/utils/TheDayWeFoundEarth.js'
import { ExperienceNowItemList } from '@/utils/AboutUs.js'
import data from '@/assets/data/TheDayWeFoundEarth.json'
import RoleIntroduction from '@/components/RoleIntroduction.vue'
import { ref } from 'vue'

const roleList = ref(['AiMu', 'Lisa'])
const {
  GeneralSituationDataList,
  GameIntroductionDataList,
  AboutUsItemDataList
} = data

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
        title="OPUS：地球計劃"
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
      <ul class="game_details">
        <li>
          <div class="main_details">
            <h3>一趟尋找自我的動人旅程</h3>
            <p>
              與機器人、博士一同踏上旅途，在廣袤無邊的太空體會渺小一人的孤單、相互扶持的溫暖，找尋當萬物盡數殞落後，生命的價值與初衷。
            </p>
          </div>
          <RoleIntroduction
            v-for="(item, index) in roleList"
            :key="index"
            :name="item"
          ></RoleIntroduction>
        </li>

        <li>
          <GameIntroduction
            v-for="(item, index) in GameIntroductionDataList"
            :key="index"
            :List="GameIntroductionList.slice(index * 2, index * 2 + 2)"
            :data="item"
          ></GameIntroduction>
        </li>
      </ul>
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
          width="78"
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
          :platformHeight="50"
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
      background: url('~assets/TheDayWeFoundEarth/bg1.png');
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
      background: url('~assets/TheDayWeFoundEarth/bg2.png');
      background-size: cover;

      :deep() {
        .right {
          .content {
            margin-top: 1rem;

            &:nth-of-type(2) {
              width: 88%;
            }

            &:nth-of-type(3) {
              width: 62%;
            }
          }
        }
      }
    }

    &:nth-of-type(3) {
      width: 100%;
      height: auto;
      background-color: #000;

      .game_details {
        display: flex;
        flex-direction: column;
        justify-content: space-evenly;
        width: 128rem;
        height: 170rem;
        margin: 0 auto;

        > li {
          width: 100%;
          height: auto;

          &:nth-of-type(1) {
            position: relative;
            display: flex;
            align-items: center;
            justify-content: center;
            height: 70rem;
            background: url('~assets/TheDayWeFoundEarth/bg3.png');
            background-size: cover;

            .main_details {
              width: 61.5rem;
              height: 17.3rem;
              background-color: rgba(5, 21, 33, 49%);
              border: 0.2rem solid rgba(208, 191, 155, 65%);
              margin-top: -12rem;
              padding: 3.4rem 1.8rem;
              box-sizing: border-box;
              text-align: center;

              h3 {
                color: #fff;
                font-size: 2rem;
              }

              p {
                color: #fff;
                font-size: 1.6rem;
                margin-top: 2.6rem;
              }
            }
          }

          &:nth-of-type(2) {
            display: flex;
            align-items: center;
            height: 96rem;
            background: url('~assets/TheDayWeFoundEarth/bg4.png');
            background-size: cover;

            :deep() {
              .game_introduction_wrapper {
                margin: 0 5rem;
              }
            }
          }
        }
      }
    }

    &:nth-of-type(4) {
      height: 240rem;
      min-height: 240rem;
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
