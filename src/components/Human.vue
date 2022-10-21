<template>
 <div class="human" :style="{left:Hleft,bottom:Hbottom}" ref="human">
   <img :src="humanPic" alt="">
 </div>
</template>

<script>
export default {
  name: 'Human',
  data () {
    return {
      Hleft: '20px',
      Hbottom: '187.61px',
      humanAllPic: {
        static: require('@/assets/human/static.gif'),
        dead: require('@/assets/human/dead.gif'),
        goLeft: require('@/assets/human/quite.gif'),
        goRight: require('@/assets/human/quite_right.gif'),
        jumpRight: require('@/assets/human/jump_right.gif'),
        jumpLeft: require('@/assets/human/jump.gif')
      },
      isDead: false,
      humanPic: require('@/assets/human/static.gif')

    }
  },
  mounted () {
    this.moveOpen()
  },
  methods: {
    moveOpen: function () {
      const that = this
      document.onkeydown = function () {
        if (that.isDead) return
        const key = window.event.keyCode
        switch (key) {
          case 65:
            // A
            that.goLeft(0)
            break
          case 68:
            // D
            that.goRight(0)
            break
          case 87:
          case 32:
            // W
            that.jump(8)
            break
        }
      }
      document.onkeyup = function () {
        const key = window.event.keyCode
        switch (key) {
          case 65:
            // A
            that.goLeft(1)
            break
          case 68:
            // D
            that.goRight(1)
            break
        }
      }
      this.moveClock()
    },
    goLeft: function (type) {
      const { humanInfo } = this.$store.state
      if (type === 0) {
        if (!humanInfo.isJump && !this.isDead) {
          this.humanPic = this.humanAllPic.goLeft
        }
        this.changeStatus('isLeft', true)
      } else if (type === 1) {
        if (!humanInfo.isJump && !this.isDead) {
          this.humanPic = this.humanAllPic.static
        }
        this.changeStatus('isLeft', false)
      }
    },
    goRight: function (type) {
      const { humanInfo } = this.$store.state
      if (type === 0) {
        if (!humanInfo.isJump && !this.isDead) {
          this.humanPic = this.humanAllPic.goRight
        }
        this.changeStatus('isRight', true)
      } else if (type === 1) {
        if (!humanInfo.isJump && !this.isDead) {
          this.humanPic = this.humanAllPic.static
        }
        this.changeStatus('isRight', false)
      }
    },
    jumpStop: function () {
      this.humanPic = this.humanAllPic.static
      this.changeStatus('isJump', false)
    },
    jump: function (speed) {
      // 如果死亡或者正在跳跃拒绝发起跳跃行为
      const hunmanInfo = this.$store.state.humanInfo
      if (this.isDead || hunmanInfo.isJump) return
      // 将跳跃状态改为真
      this.changeStatus('isJump', true)
      const jp = () => {
        const { cantJump } = this.$store.getters
        const jpheight = parseFloat(this.Hbottom)
        const Hleft = parseFloat(this.Hleft)
        // 判断上升或者下落时是否碰到障碍物触发特定行为
        if (cantJump(speed > 0, jpheight, Hleft, 'stopArea')) {
          // 当前处于下降就停止
          if (speed <= 0) return this.jumpStop()
          // 当前处于上升就直接将速度改为0变成下降
          speed = 0
        }
        if (cantJump(speed > 0, jpheight, Hleft, 'deadArea')) return this.gotDead()
        if (cantJump(speed > 0, jpheight, Hleft, 'winArea')) return this.win()
        // 判断是否碰地来选择继续上升下降还是停止跳跃
        const isTouchLand = jpheight + speed <= 187.61
        this.Hbottom = isTouchLand ? '187.61px' : jpheight + speed + 'px'
        if (isTouchLand) {
          this.$store.commit('changestayIndex', -1)
          return this.jumpStop()
        }
        // 没有碰到任何意外情况，减速度继续递归
        if (hunmanInfo.isLeft) {
          this.humanPic = this.humanAllPic.jumpLeft
        }
        if (hunmanInfo.isRight) {
          this.humanPic = this.humanAllPic.jumpRight
        }
        speed -= 0.2
        setTimeout(jp, 10)
      }
      jp()
    },
    changeStatus: function (name, value) {
      const info = {
        name,
        value
      }
      this.$store.commit('changeStatus', info)
    },
    gotDead: function () {
      this.isDead = true
      this.humanPic = this.humanAllPic.dead
      setTimeout(() => {
        this.$router.push('/dead')
      }, 2000)
    },
    win: function () {
      this.$router.push('/win')
    },
    moveClock: function () {
      setInterval(() => {
        const { human } = this.$refs
        const { cantgo, freeFall } = this.$store.getters
        const { stayIndex, humanInfo } = this.$store.state
        const Hleft = parseFloat(this.Hleft)
        const Hbottom = parseFloat(this.Hbottom)

        // 因为计时器一直在走，不在左右移动状态或者在死亡状态时不执行逻辑
        if (this.isDead || (!humanInfo.isLeft && !humanInfo.isRight)) return
        // 当小人在最左边或者最右边时不允许在移动
        const condition = humanInfo.isLeft
          ? human.offsetLeft <= 0
          : humanInfo.isRight && (human.offsetLeft + 28) >= 1280
        if (condition) {
          this.Hleft = humanInfo.isLeft ? '0px' : '1265px'
          return
        }
        // 判断是否碰到了障碍物来决定是走路还是死亡还是胜利还是停止
        const left = humanInfo.isLeft ? Hleft - 5 : Hleft + 28
        if (cantgo(left, Hbottom, 'stopArea')) return
        if (cantgo(left, Hbottom, 'deadArea')) return this.gotDead()
        if (cantgo(left, Hbottom, 'winArea')) return this.win()
        // stayindex不是-1就代表当前踩的是障碍物而不是地面
        // freefall判断有没有走出障碍物，走出就下坠
        if (stayIndex !== -1 && freeFall(Hleft)) this.jump(0)

        // 最后执行移动
        const forWard = humanInfo.isLeft ? -2.5 : 2.5
        this.Hleft = Hleft + forWard + 'px'
      }, 10)
    }
  }
}
</script>

<style scoped>
  .human {
    position: absolute;
    width: 28px;
    height: 60px;
    /*background-image: url("../assets/human/quite.gif");*/

  }
  .human img {
    position: absolute;
    bottom: 0;
    left: -23px;
    width: 60px;
    height: 70px;
  }
</style>
