<template>
 <div class="all" :style="{left:landLeft}">
   <Rock :rleft="'200px'" :rwidth="'60px'" :rheight="'50px'" :rbottom="'187.61px'"></Rock>
   <Rock :rleft="'400px'" :rwidth="'20px'" :rheight="'30px'" :rbottom="'187.61px'"></Rock>
   <Rock :rleft="'300px'" :rwidth="'50px'" :rheight="'10px'" :rbottom="'300.61px'"></Rock>
   <Rock :rleft="'500px'" :rwidth="'40px'" :rheight="'10px'" :rbottom="'400px'"></Rock>
   <Rock :rleft="'700px'" :rwidth="'15px'" :rheight="'10px'" :rbottom="'500.61px'"></Rock>
   <Spine :rleft="'450px'" :rwidth="'20px'" :rheight="'30px'" :rbottom="'187.61px'"></Spine>
   <Spine :rleft="'880px'" :rwidth="'40px'" :rheight="'30px'" :rbottom="'570px'"></Spine>
   <Spine :rleft="'920px'" :rwidth="'40px'" :rheight="'30px'" :rbottom="'610px'"></Spine>
   <Biscuit :rleft="'900px'" :rwidth="'40px'" :rheight="'40px'" :rbottom="'590px'"></Biscuit>
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
    background-color: #00C957;
  }
</style>
