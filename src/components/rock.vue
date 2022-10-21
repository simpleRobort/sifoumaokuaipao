<template>
  <div id="rock" class="onTheLand" :style="{left:this.rleft,width:this.rwidth,height:this.rheight,bottom:this.rbottom}"></div>
</template>

<script>
export default {
  name: 'rock',
  props: ['rleft', 'rwidth', 'rheight', 'rbottom'],
  created () {
    this.init()
  },
  methods: {
    init: function () {
      const obj = {
        rl: parseFloat(this.rleft.replace('px', '')),
        rw: parseFloat(this.rwidth.replace('px', '')),
        rh: parseFloat(this.rheight.replace('px', '')),
        rb: parseFloat(this.rbottom.replace('px', ''))
      }
      this.$store.commit('addStopArea', obj)
    }
  }
}
</script>

<style scoped>
  #rock {
    border: 2px solid black;
    /*background-color: black;*/
  }
</style>
