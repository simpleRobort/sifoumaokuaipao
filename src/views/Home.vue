<template>
  <div class="home">
    <img class="bg" src="../assets/bgimg2.png" alt="">
    <img class="bg2" src="../assets/bgimg1.png" alt="">
    <WelcomePage/>
  </div>
</template>

<script>
// @ is an alias to /src
import WelcomePage from '@/components/WelcomePage.vue'

export default {
  name: 'Home',
  components: {
    WelcomePage
  }
}
</script>

<style scoped>
.bg {
  position: absolute;
  left: 800px;
  top: 180px;
  width: 400px;
  height: 400px;
}
.bg2 {
  position: absolute;
  left: 60px;
  top: 200px;
  width: 400px;
  height: 400px;
}
.home {
  width: 100%;
  height: 100%;
  background-color: #C1F5E3;
}
</style>
