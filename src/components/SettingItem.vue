<script setup>
import { SettingItemList, CharacterList } from '@/utils/RocketOfWhispers.js'
import { computed, defineProps } from 'vue'

const SettingItem = defineProps({
  alignItems: {
    type: String,
    default: 'left'
  },
  SettingItemListIndex: {
    type: Number,
    default: 0
  },
  data: {
    type: Object,
    default: () => {}
  }
})
const { alignItems, data, SettingItemListIndex } = SettingItem
const { title, content } = data

const imgList = computed(() => {
  let result = []
  for (let i = 0; i < SettingItemList.length; i += 2) {
    result.push([SettingItemList[i], SettingItemList[i + 1]])
  }
  return result
})

const alignItemsValue = computed(() => {
  return alignItems === 'left' ? 'flex-start' : 'flex-end'
})

const marginBotton = computed(() => {
  return SettingItemListIndex % 2 === 0 ? '3rem' : '0.4rem'
})
</script>

<template>
  <div
    class="setting_item"
    :style="{
      'align-items': alignItemsValue,
      'margin-bottom': marginBotton
    }"
  >
    <div class="setting_item_wrapper" :style="{ 'text-align': alignItems }">
      <h1>{{ title }}</h1>
      <p class="setting_item_content" v-html="content"></p>
    </div>
    <div
      class="setting_item_picture"
      :style="{
        'align-items': alignItemsValue
      }"
    >
      <el-image
        v-for="(item, index) in imgList[SettingItemListIndex]"
        :key="index"
        :src="item"
        fit="cover"
        alt=""
        :preview-src-list="SettingItemList"
        :initial-index="
          imgList[SettingItemListIndex].length * SettingItemListIndex + index
        "
        :hide-on-click-modal="true"
      ></el-image>
    </div>
    <div
      class="character_bg"
      v-if="data.character"
      :class="
        data.character.direction === 'left'
          ? 'character_bg_left'
          : 'character_bg_right'
      "
    >
      <div class="character_info_wapper">
        <div class="character_info">
          <h1>{{ data.character.name }}</h1>
          <p>{{ data.character.name_en }}</p>
        </div>
        <el-image
          :src="CharacterList[SettingItemListIndex]"
          fit="cover"
        ></el-image>
      </div>
    </div>
  </div>
</template>

<style lang="scss" scoped>
.setting_item {
  display: flex;
  flex-direction: column;
  position: relative;
  width: 100%;
  height: auto;
  margin-bottom: 3rem;

  .setting_item_wrapper {
    width: 66%;
    height: auto;
    padding: 1rem 2rem;
    background-color: #e1d7bc;
    margin-bottom: 3rem;

    h1 {
      color: #000;
      font-size: 4rem;
    }

    .setting_item_content {
      color: #000;
      font-size: 1.6rem;
      margin-top: 1rem;
    }
  }

  .setting_item_picture {
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    width: 100%;
    height: auto;

    .el-image {
      width: 46%;
      margin-bottom: 1.6rem;
    }
  }

  .character_bg {
    display: flex;
    align-items: center;
    width: 60rem;
    height: 64rem;

    .character_info_wapper {
      display: flex;
      align-items: center;
      position: absolute;

      .el-image {
        height: 50rem;
      }

      .character_info {
        display: flex;
        flex-direction: column;
        align-items: center;
        margin-top: -3rem;
        margin-right: 1rem;

        h1,
        p {
          color: #49453c;
          font-size: 3.6rem;
        }
      }
    }
  }

  .character_bg_right {
    position: absolute;
    top: 15rem;
    left: 50%;
    transform: translateX(-19%);
    background: url('~assets/RocketOfWhispers/setting_item_bg1.png') no-repeat;
    background-size: cover;

    .character_info_wapper {
      right: 16%;
    }
  }

  .character_bg_left {
    position: absolute;
    top: 18rem;
    left: 15%;
    background: url('~assets/RocketOfWhispers/setting_item_bg2.png') no-repeat;
    background-size: cover;

    .character_info_wapper {
      left: 20%;
      flex-direction: row-reverse;

      .el-image {
        height: 53rem;
      }
    }
  }
}
</style>
