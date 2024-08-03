<script setup>
import { defineProps, ref } from 'vue'

const List = defineProps({
  AboutUsList: {
    type: Array
  },
  data: {
    type: Object,
    default: () => ({})
  },
  width: {
    type: String,
    default: '100'
  },
  textAlign: {
    type: String
  }
})

const { AboutUsList, data } = List
const {
  left: { left_title, GeneralSituationItemDataList },
  right: { right_title, content }
} = data

const GeneralSituation = ref(null)

defineExpose({
  GeneralSituation
})
</script>

<template>
  <div
    class="general_situation"
    :style="{ width: width + 'rem' }"
    ref="GeneralSituation"
  >
    <div class="left">
      <p class="title">{{ left_title }}</p>
      <GeneralSituationItem
        v-for="item in GeneralSituationItemDataList"
        :key="item.id"
        :sub_title="item.sub_title"
        :underline="item.underline"
      >
        <p v-for="(text, index) in item.content" :key="index">{{ text }}</p>
      </GeneralSituationItem>
    </div>
    <div class="right">
      <p class="title">{{ right_title }}</p>
      <p
        class="content"
        v-for="(item, index) in content"
        :key="index"
        v-html="item"
        :style="{ textAlign }"
      ></p>
      <el-image
        v-for="(item, index) in AboutUsList"
        :key="index"
        :src="item"
        alt=""
      />
    </div>
  </div>
</template>

<style lang="scss" scoped>
.general_situation {
  display: flex;
  justify-content: space-between;

  .title {
    color: #fff;
    font-size: 3.6rem;
    font-style: italic;
    font-family: 'pingFangSC-Bold';
    margin-bottom: 0.8rem;
  }

  .left {
    width: 29%;
  }

  .right {
    display: flex;
    flex-direction: column;
    align-items: center;
    width: 71%;

    .title {
      text-align: center;
    }

    .content {
      width: 100%;
      color: #fff;
      font-size: 1.7rem;
      font-family: 'pingFangSC-Regular';
      line-height: 2.6rem;
      margin-top: 0.2rem;
    }

    .el-image {
      width: 61.6rem;
      height: 23rem;
      margin-top: 2.6rem;
    }
  }
}
</style>
