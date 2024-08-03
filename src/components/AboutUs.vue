<script setup>
import { defineProps } from 'vue'

defineProps({
  color: {
    type: String
  },
  isShow: {
    type: Boolean
  },
  AboutUsItemDataList: {
    type: Array,
    required: true
  },
  AboutUsItemWorkList: {
    type: Array,
    required: true
  }
})
</script>

<template>
  <EchoOfStarSongItem
    width="130"
    title="SIGONO 與 OPUS 系列"
    :isShow="isShow"
    :hrStyle="{ margin: '3rem 0' }"
    :titleStyle="{ color }"
  >
    <ul class="about_us">
      <li v-for="item in AboutUsItemDataList" :key="item.id">
        <AboutUsItem :title="item.title" :color="color">
          <template #content v-if="item.AboutUsContentItemDataList">
            <div
              :class="{
                winning_awards: item.AboutUsContentItemDataList.length > 1
              }"
            >
              <AboutUsContentItem
                v-for="aboutUsContentItem in item.AboutUsContentItemDataList"
                :key="aboutUsContentItem.id"
                :data="aboutUsContentItem"
                :Arraylength="item.AboutUsContentItemDataList.length"
                :color="color"
              ></AboutUsContentItem>
            </div>
          </template>
          <template #works v-else>
            <div class="about_us_works">
              <AboutUsWorkItem
                v-for="aboutUsWorkItem in item.AboutUsWorkItemDataList"
                :key="aboutUsWorkItem.id"
                :data="aboutUsWorkItem"
                :cover="AboutUsItemWorkList[aboutUsWorkItem.id - 1]"
                :color="color"
              ></AboutUsWorkItem>
            </div>
          </template>
        </AboutUsItem>
      </li>
    </ul>
  </EchoOfStarSongItem>
</template>

<style lang="scss" scoped>
.about_us {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 100%;

  > li {
    width: 100%;
    height: auto;
    margin: 3rem 0;
    box-sizing: border-box;

    &:first-child {
      margin-top: 0;
    }

    &:last-child {
      margin-bottom: 0;
    }

    &:nth-of-type(1) {
      width: 80%;
      height: auto;

      :deep() {
        .about-us-title {
          margin: 0;
        }
      }
    }

    &:nth-of-type(2) {
      .about_us_works {
        display: flex;
        flex-wrap: wrap;
        justify-content: space-evenly;
      }
    }

    &:nth-of-type(3) {
      width: 78%;
      height: auto;
      margin-bottom: 3rem;

      .winning_awards {
        display: flex;
        flex-wrap: wrap;

        :deep() {
          .about_us_wrapper {
            &:nth-child(1) {
              .about_us_sub_title {
                margin-top: 1rem;
              }
            }
            &:nth-child(2) {
              flex: 1;
            }
            &:nth-child(3) {
              flex: 1;
            }
          }
        }
      }
    }

    &:nth-of-type(4) {
      :deep() {
        .winning_awards {
          margin-top: 3rem;

          .about_us_content {
            color: #fff;
            font-size: 1.6rem;
            font-family: 'pingFangSC-Regular';
            line-height: 2.4rem;
            margin-bottom: 1.4rem;

            span {
              color: #fff;
              font-size: 1.6rem;
              text-decoration: underline;
            }
          }
        }
      }
    }
  }
}
</style>
