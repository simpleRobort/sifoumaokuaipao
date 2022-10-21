<template>
  <div class="winPage">
    <h1>一般般</h1>
    <div @click="playAgian()">下一关</div>
    <div @click="back()">爷不玩了</div>
  </div>
</template>

<script>
export default {
  props: {
  },
  methods: {
    playAgian: function () {
      var p = this.$store.state.pass
      if (p === '1') {
        this.$store.commit('changePass', 2)
        this.$router.push('/second')
      } else if (p === '2') {
        this.$store.commit('changePass', 2)
        this.$router.push('/second')
      }
      // this.$router.push('/first')
      window.location.reload()
    },
    back: function () {
      this.$router.push('/')
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
  .winPage {
    position: absolute;
    top: 50px;
    left: 50%;
    padding-top: 50px;
    transform: translate(-50%,0);
    width: 600px;
    height: 450px;
    text-align: center;
    border: 5px solid black;
    border-radius: 15px;
  }
  .winPage h1 {
    font-size: 80px;
    font-family: "造字工房韵黑体（非商用）";
  }
  .winPage div {
    cursor: pointer;
    margin: 50px auto;
    width: 200px;
    font-family: "造字工房韵黑体（非商用）";
    line-height: 60px;
    font-size: 30px;
    height: 60px;
    border: 5px solid black;
    border-radius: 30px;
  }
  .winPage div:hover {
    background-color: black;
    color: white;
  }
</style>
