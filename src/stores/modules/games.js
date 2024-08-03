import { defineStore } from 'pinia'
import { ref } from 'vue'

export const useOpusGameStore = defineStore(
  'games',
  () => {
    // 当前页数
    const page = ref(0)
    // 添加页数
    const addPage = () => {
      page.value++
    }
    // 减少页数
    const reducePage = () => {
      page.value--
    }
    // 设置页数
    const setPage = (num) => {
      page.value = num
    }

    // 图片切换标识
    const index = ref(false)
    // 设置图片标识
    const setIndex = () => {
      index.value = !index.value
    }

    return { page, addPage, reducePage, setPage, index, setIndex }
  },
  {
    persist: true
  }
)
