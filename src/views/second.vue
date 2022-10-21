<template>
  <div class="second">
    <LandSecond></LandSecond>
    <Human></Human>
  </div>
</template>

<script>
import LandSecond from '@/components/LandSecond.vue'
import Human from '@/components/Human.vue'
export default {
  name: 'second',
  components: {
    LandSecond,
    Human
  }
}
</script>

<style scoped>
  .second {
    width: 100%;
    height: 100%;
    background: url("../assets/Sky2.jpg") no-repeat;
    /* background-size: 100%; */
  }
</style>
