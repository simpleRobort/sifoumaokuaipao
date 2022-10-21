<template>
  <div class="all" :style="{left:landLeft}">
    <Rock :rleft="'200px'" :rwidth="'200px'" :rheight="'20px'" :rbottom="'260.61px'"></Rock>
    <Rock :rleft="'75px'" :rwidth="'20px'" :rheight="'30px'" :rbottom="'450px'"></Rock>
    <Rock :rleft="'300px'" :rwidth="'200px'" :rheight="'10px'" :rbottom="'500.61px'"></Rock>
    <Rock :rleft="'150px'" :rwidth="'30px'" :rheight="'10px'" :rbottom="'350.61px'"></Rock>
    <Rock :rleft="'500px'" :rwidth="'40px'" :rheight="'3px'" :rbottom="'400px'"></Rock>
    <Rock :rleft="'600px'" :rwidth="'40px'" :rheight="'5px'" :rbottom="'530px'"></Rock>
    <Rock :rleft="'650px'" :rwidth="'15px'" :rheight="'400px'" :rbottom="'187.61px'"></Rock>
    <Rock :rleft="'900px'" :rwidth="'15px'" :rheight="'350px'" :rbottom="'250.61px'"></Rock>
    <Rock :rleft="'1000px'" :rwidth="'40px'" :rheight="'15px'" :rbottom="'250.61px'"></Rock>
    <Rock :rleft="'1150px'" :rwidth="'15px'" :rheight="'120px'" :rbottom="'187.61px'"></Rock>
    <Rock :rleft="'705px'" :rwidth="'100px'" :rheight="'20px'" :rbottom="'450.61px'"></Rock>
    <Rock :rleft="'0px'" :rwidth="'1980px'" :rheight="'10px'" :rbottom="'653.61px'"></Rock>
    <Rock :rleft="'805px'" :rwidth="'92px'" :rheight="'20px'" :rbottom="'350.61px'"></Rock>
    <Spine :rleft="'840px'" :rwidth="'56px'" :rheight="'5px'" :rbottom="'372.61px'"></Spine>
    <Spine :rleft="'450px'" :rwidth="'195px'" :rheight="'4px'" :rbottom="'187.61px'"></Spine>
    <Spine :rleft="'775px'" :rwidth="'200px'" :rheight="'30px'" :rbottom="'570px'"></Spine>
    <Spine :rleft="'670px'" :rwidth="'15px'" :rheight="'390px'" :rbottom="'187.61px'"></Spine>
    <Spine :rleft="'685px'" :rwidth="'15px'" :rheight="'10px'" :rbottom="'567.61px'"></Spine>
    <Biscuit :rleft="'1200px'" :rwidth="'40px'" :rheight="'40px'" :rbottom="'200px'"></Biscuit>
    <div class="land"></div>
  </div>
</template>

<script>
import { mapState } from 'vuex'
import Rock from './rock'
import Spine from './spine'
import Biscuit from './biscuit'
export default {
  computed: {
    ...mapState(['landLeft'])
  },
  components: {
    Rock,
    Spine,
    Biscuit
  }
}
</script>

<style scoped>
  .all {
    position: absolute;
    width: 100%;
    height: 100%;
  }
  .land {
    position: absolute;
    width: 200%;
    height: 187.61px;
    bottom: 0;
    background: url("../assets/land2.png");
  }
</style>
