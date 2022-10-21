<template>
  <div class="WelcomePage">
    <h1>思否猫快跑</h1>
    <div @click="play()">开始</div>
    <div>设置</div>
    <div>关于</div>
  </div>
</template>

<script>
export default {
  name: 'HelloWorld',
  props: {
  },
  methods: {
    play: function () {
      this.$router.push('/first')
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
  .WelcomePage {
    position: absolute;
    top: 40px;
    left: 50%;
    transform: translate(-50%,0);
    width: 600px;
    height: 600px;
    text-align: center;
  }
  .WelcomePage h1 {
    font-size: 80px;
    font-family: "造字工房韵黑体（非商用）";
  }
  .WelcomePage div {
    cursor: pointer;
    margin: 30px auto;
    width: 200px;
    font-family: "造字工房韵黑体（非商用）";
    line-height: 60px;
    font-size: 30px;
    height: 60px;
    border: 5px solid black;
    border-radius: 30px;
  }
  .WelcomePage div:hover {
    background-color: black;
    color: white;
  }
</style>
