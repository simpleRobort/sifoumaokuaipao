<template>
  <div class="first">
    <Land><div>123</div></Land>
    <Human></Human>
    <Tips></Tips>
  </div>
</template>

<script>
import Land from '@/components/Land.vue'
import Human from '@/components/Human.vue'
import Tips from '@/components/tips.vue'
export default {
  name: 'Home',
  components: {
    Land,
    Human,
    Tips
  }
}
</script>

<style scoped>
  .first {
    width: 100%;
    height: 100%;
    background: url("../assets/Sky1.jpg") repeat-x;
    background-size: 82%;
  }
</style>
