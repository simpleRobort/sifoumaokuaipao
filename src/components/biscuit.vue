<template>
  <div id="biscuit" class="onTheLand" :style="{left:this.rleft,width:this.rwidth,height:this.rheight,bottom:this.rbottom}"></div>
</template>

<script>
export default {
  props: ['rleft', 'rwidth', 'rheight', 'rbottom'],
  created () {
    this.init()
  },
  methods: {
    init: function () {
      var obj = {
        rl: parseFloat(this.rleft.replace('px', '')),
        rw: parseFloat(this.rwidth.replace('px', '')),
        rh: parseFloat(this.rheight.replace('px', '')),
        rb: parseFloat(this.rbottom.replace('px', ''))
      }
      this.$store.commit('addWinArea', obj)
    }
  }
}
</script>

<style scoped>
  #biscuit {
    border-radius: 50px;
    background-color: gold;
  }
</style>
