import { createApp } from 'vue'
import { createPinia } from 'pinia'

import $ from 'jquery'
window.$ = $

import App from './App.vue'
import router from './router'
import swiperPlugin from './plugins/swiper-plugin'

const app = createApp(App)

app.config.globalProperties.$ = $

app.use(createPinia())
app.use(router)
app.use(swiperPlugin)

app.mount('#app')
