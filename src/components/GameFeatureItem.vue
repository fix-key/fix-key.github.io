<script setup>
import { ref, defineProps } from 'vue'
import { GameFeaturesItemList } from '@/utils/EchoOfStarSong.js'

defineProps({
  index: {
    type: Number,
    default: 0
  }
})

const GameFeatureItemDataList = ref([
  {
    id: 1,
    title: '從萬千小行星中尋找龍脈',
    cover: GameFeaturesItemList[0],
    description:
      '女主角——<span>艾妲</span>可以於廣大的宇宙中，感知龍脈的轟鳴聲「龍鳴」，並藉此定位小行星，駕駛太空船前往。'
  },
  {
    id: 2,
    title: '揭露龍脈的秘密',
    cover: GameFeaturesItemList[1],
    description:
      '男主角——<span>李莫</span>則會負責探索小行星的深處，為艾妲尋找龍鳴聲的來源，那是建築於小行星中的巨大神殿，隱藏著所有龍脈的秘密...'
  },
  {
    id: 3,
    title: '與形形色色的角色互動，打聽情報',
    cover: GameFeaturesItemList[2],
    description:
      '冒險過程中，主角們將遇到各種不同的角色，不論是販賣龍脈情報的掮客、查緝龍脈盜挖者的軍官，他們會以各種不同的身份阻擋你，但也會成為你的助力。'
  },
  {
    id: 4,
    title: '理解角色們的過往',
    cover: GameFeaturesItemList[3],
    description:
      '混亂的太陽系「群山」，由於龍脈的爭奪而禍亂連年，導致人們都有或多或少的悲傷故事，過程中將會逐漸發現他們的過往，探尋角色的回憶。'
  },
  {
    id: 5,
    title: '旅行於混亂的太陽系',
    cover: GameFeaturesItemList[4],
    description:
      '故事中的舞台，太陽系「群山」，因為爭奪龍脈而陷入混亂，社會瓦解，爭端不斷，主角們將趁此機會，駕駛太空船深入各方勢力，打聽情報，只為追求傳說中的龍脈。'
  },
  {
    id: 6,
    title: '人人可以享受的故事',
    cover: GameFeaturesItemList[5],
    description:
      '龍脈常歌的遊戲以劇情為主，儘管冒險的過程需要解開古老的機關，或於旅行過程管理太空船的資源，但過程以輕難度的遊玩為主，旨在創造良好的敘事體驗。'
  }
])
</script>

<template>
  <div class="Game_feature_item_sub">
    <slot name="item" :data="GameFeatureItemDataList"></slot>
  </div>
</template>

<style lang="scss" scoped>
.Game_feature_item_sub {
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 59%;

  :deep() {
    .Game_features_item_title {
      color: #fff;
      font-size: 2rem;
      font-family: 'pingFangSC-Bold';
    }

    .Game_features_item_cover {
      width: 100%;
      object-fit: cover;
      margin: 1.6rem 0;
    }

    .Game_features_item_description {
      width: 56%;
      font-size: 1.4rem;
      font-family: 'pingFangSC-Regular';
      text-align: center;
      line-height: 2.4rem;

      span {
        color: #eba518;
        font-size: 2rem;
        font-family: 'pingFangSC-Bold';
      }
    }
  }
}
</style>
