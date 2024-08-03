<script setup>
import { defineProps } from 'vue'
import logo_grey from '~assets/logo_grey.png'
import logo_black from '~assets/logo_black.png'

defineProps({
  color: {
    type: String,
    default: '#fff'
  },
  backgroundColor: {
    type: String,
    default: '#000'
  }
})
</script>

<template>
  <footer :style="{ backgroundColor }">
    <div class="navbar" :class="color === '#000' ? 'text_black' : ''">
      <nav>
        <ul>
          <li>FACEBOOK</li>
          <li>DISCORD</li>
          <li>TWITTER</li>
          <li>YOUTUBE</li>
          <li>WEIBO</li>
        </ul>
      </nav>
      <div class="logo">
        <router-link to="/">
          <img :src="color === '#000' ? logo_black : logo_grey" alt="" />
        </router-link>
        <p>Back to top</p>
      </div>
    </div>
  </footer>
</template>

<style lang="scss" scoped>
footer {
  width: 100%;
  min-height: 16rem;
  padding-bottom: 1rem;
  box-sizing: border-box;

  .navbar {
    display: flex;
    flex-direction: column;
    width: 50%;
    height: 100%;
    margin: 0 auto;

    nav {
      width: 100%;
      height: 6rem;

      ul {
        display: flex;
        justify-content: space-between;
        align-items: center;
        width: 100%;
        height: 100%;

        li {
          width: 6.2rem;
          font-size: 1.4rem;
          font-family: 'pingFangSC-Regular';
        }
      }
    }

    .logo {
      width: 100%;
      height: 100%;
      display: flex;
      flex-direction: column;
      align-items: center;
      justify-content: space-evenly;
      padding: 0.3rem;
      box-sizing: border-box;

      img {
        width: 6.6rem;
        object-fit: cover;
      }

      p {
        font-size: 1.8rem;
        font-family: 'pingFangSC-Bold';
      }
    }
  }

  .text_black {
    p,
    li {
      color: #000;
    }
  }
}
</style>
