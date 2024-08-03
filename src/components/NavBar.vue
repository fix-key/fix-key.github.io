<script setup>
import { useOpusGameStore } from '@/stores'
import { onMounted, ref, watch } from 'vue'
import { useRoute } from 'vue-router'
import logo_grey from '~assets/logo_grey.png'
import logo_black from '~assets/logo_black.png'

const route = useRoute()
const gameStore = useOpusGameStore()

const logo = [logo_grey, logo_black]

const NavBar = ref(null)
// const path = ref(route.path)

defineExpose({
  NavBar
})

onMounted(() => {
  if (gameStore.page === 3 && !route.path.startsWith('/games/')) {
    $('.logo a').addClass('black')
  } else {
    $('.logo a').removeClass('black')
  }
})

watch(
  gameStore,
  (newValue) => {
    if (newValue.page === 3) {
      $('.logo a').addClass('black')
    } else {
      $('.logo a').removeClass('black')
    }
  },
  {
    immediate: true
  }
)
</script>

<template>
  <div class="nav_sub_wrap" v-if="route.path === '/games'">
    <div
      class="nav_icon"
      :class="{ show: gameStore.index }"
      @click="gameStore.setIndex(!gameStore.index)"
    >
      <span></span><span></span><span></span>
    </div>
    <ul class="nav_sub" v-show="gameStore.index">
      <li><a href="javascript:;">FACEBOOK</a></li>
      <li><a href="javascript:;">DISCORD</a></li>
      <li><a href="javascript:;">TWITTER</a></li>
      <li><a href="javascript:;">TOUTUBE</a></li>
      <li><a href="javascript:;">WEIBO</a></li>
    </ul>
  </div>

  <header ref="NavBar">
    <div class="logo" v-show="true">
      <router-link to="/" id="black">
        <img
          :src="
            gameStore.page === 3 && !route.path.startsWith('/games/')
              ? logo[1]
              : logo[0]
          "
          alt=""
        />
      </router-link>
    </div>

    <nav>
      <ul>
        <li>
          <router-link to="/games" active-class="active">GAMES</router-link>
        </li>
        <li><router-link to="/shop">SHOP</router-link></li>
        <li><router-link to="/">ABOUT</router-link></li>
        <li><router-link to="/">FAQ</router-link></li>
        <li><router-link to="/">PRESS</router-link></li>
        <li><router-link to="/">NEWSLETTER</router-link></li>
        <li><router-link to="/">RECRUIT&CONTACT</router-link></li>
      </ul>
    </nav>
  </header>
</template>

<style lang="scss">
$nav_icon_width: 2rem;

@keyframes logoChange {
  0% {
    opacity: 0;
  }
  50% {
    opacity: 1;
  }
  100% {
    opacity: 0;
  }
}

// 头部
header {
  width: 86rem;
  height: auto;
  margin: 0 auto;
  padding: 1.6rem 2.6rem;

  // logo
  .logo {
    display: flex;
    justify-content: center;
    width: 100%;
    height: auto;

    a {
      position: relative;
      display: block;
      width: 7rem;
      height: 7rem;

      &:before {
        content: '';
        position: absolute;
        left: 0.06rem;
        top: -0.2rem;
        width: 6.5rem;
        height: 6.3rem;
        border: 0.2rem solid rgba(224, 224, 224, 0.8);
        border-radius: 50%;
        margin: 0 auto;
        transition: all 0.3s;
        transform: scale(1.1);
        animation: logoChange 2s infinite ease-in;
      }
    }

    .black {
      &:before {
        border: 0.2rem solid rgba(46, 46, 46, 0.8) !important;
      }
    }

    img {
      width: 100%;
      height: 100%;
    }
  }

  // 导航栏
  nav {
    width: 100%;
    height: 5rem;
    color: #fff;
    margin-top: 0.5rem;
    font-size: 6rem;

    ul {
      display: flex;
      justify-content: space-evenly;
      width: 100%;
      height: 100%;

      li {
        display: flex;
        align-items: center;
        height: 100%;

        a {
          display: block;
          height: 2.2rem;
          font-weight: 600;
          font-size: 1.4rem;
          font-family: 'pingFangSC-Regular';
          letter-spacing: 0.1rem;
          color: #fff;
          text-decoration: none;
        }

        .active,
        .router-link-exact-active {
          color: $bg_active !important;
          border-bottom: 0.1rem solid $bg_active;
        }
      }
    }
  }
}

// 子导航
.nav_sub_wrap {
  position: absolute;
  left: 3rem;
  top: 5rem;
  width: 12rem;
  height: auto;

  // 图标
  .nav_icon {
    width: $nav_icon_width;
    height: 1.6rem;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    cursor: pointer;
    transition: all 0.3s;

    span {
      width: 100%;
      height: 0.16rem;
      background-color: #fff;
      transition: all 0.3s;

      &:nth-child(1) {
        transform-origin: top left;
      }

      &:nth-child(3) {
        transform-origin: bottom left;
      }
    }
  }

  .show {
    span {
      &:nth-child(1) {
        transform: rotate(45deg);
      }

      &:nth-child(2) {
        display: none;
      }

      &:nth-child(3) {
        transform: rotate(-45deg);
      }
    }
  }

  .nav_sub {
    font-weight: 100;
    font-weight: 500;
    font-family: 'pingFangSC-Regular';
    letter-spacing: 0.05rem;
    padding-left: $nav_icon_width + 0.3rem;

    li {
      height: 2rem;
      line-height: 2rem;
      margin-bottom: 1.2rem;

      a {
        color: #fff;
        font-size: 1.2rem;
        text-decoration: none;

        &:hover {
          color: $bg_active;
        }
      }
    }
  }
}
</style>
