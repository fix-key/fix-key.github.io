<script setup></script>

<template>
  <div class="container">
    <NavBar></NavBar>

    <router-view></router-view>
  </div>
</template>

<style lang="scss">
// 容器
.container {
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  position: relative;
  overflow: hidden;
  width: 100vw;
  height: 100vh;
  color: #fff;
  background-size: cover;
  padding-bottom: 2rem;
  transition: all 0.5s;
  z-index: 99;
}
</style>
