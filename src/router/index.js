import { createRouter, createWebHistory } from 'vue-router'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      component: () => import('@/views/layout/LayoutContainer.vue'),
      redirect: '/games',
      children: [
        {
          path: '/games',
          component: () => import('@/views/games/GamesPage.vue')
        },
        {
          path: '/shop',
          component: () => import('@/views/shop/ShopPage.vue')
        },
        {
          path: '/about',
          component: () => import('@/views/about/AboutPage.vue')
        },
        {
          path: '/faq',
          component: () => import('@/views/faq/FaqPage.vue')
        },
        {
          path: '/press',
          component: () => import('@/views/press/PressPage.vue')
        },
        {
          path: '/newsletter',
          component: () => import('@/views/newsletter/NewSletterPage.vue')
        },
        {
          path: '/recruit&contact',
          component: () =>
            import('@/views/recruit&contact/RecruitContactPage.vue')
        }
      ]
    },
    {
      path: '/games/EchoOfStarSong',
      component: () => import('@/views/games/EchoOfStarSong.vue')
    },
    {
      path: '/games/RocketOfWhispers',
      component: () => import('@/views/games/RocketOfWhispers.vue')
    },
    {
      path: '/games/TheDayWeFoundEarth',
      component: () => import('@/views/games/TheDayWeFoundEarth.vue')
    },
    {
      path: '/games/PrismPeak',
      component: () => import('@/views/games/PrismPeak.vue')
    }
  ]
})

export default router
