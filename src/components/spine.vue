<template>
  <div id="spine" class="onTheLand" :style="{left:this.rleft,width:this.rwidth,height:this.rheight,bottom:this.rbottom}"></div>
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
      this.$store.commit('addDeadArea', obj)
    }
  }
}
</script>

<style scoped>
  #spine {
    border: 2px solid orangered;
    background-color: red;
  }
</style>
