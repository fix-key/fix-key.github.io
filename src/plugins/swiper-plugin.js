// swiper-plugin.js
import { Swiper, SwiperSlide } from 'swiper/vue'
// 引入Swiper的核心样式和所有模块样式
import 'swiper/css'
import 'swiper/css/bundle'

export default {
  install(app) {
    app.component('Swiper', Swiper)
    app.component('SwiperSlide', SwiperSlide)
  }
}
