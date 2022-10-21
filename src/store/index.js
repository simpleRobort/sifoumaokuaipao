import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

function getCookie (cname) {
  var name = cname + '='
  var ca = document.cookie.split(';')
  for (var i = 0; i < ca.length; i++) {
    var c = ca[i]
    while (c.charAt(0) === ' ') c = c.substring(1)
    if (c.indexOf(name) !== -1) return c.substring(name.length, c.length)
  }
  return ''
}
function setCookie (cname, cvalue, exdays) {
  var d = new Date()
  d.setTime(d.getTime() + (exdays * 24 * 60 * 60 * 1000))
  var expires = 'expires=' + d.toUTCString()
  document.cookie = cname + '=' + cvalue + '; ' + expires
}
export default new Vuex.Store({
  state: {
    humanInfo: {
      isLeft: false,
      isRight: false,
      isJump: false
    },
    landLeft: '0px',
    stopArea: [],
    deadArea: [],
    winArea: [],
    stayIndex: -1,
    pass: getCookie('pass') || '1'
  },
  mutations: {
    changeStatus: function (state, info) {
      state.humanInfo[info.name] = info.value
    },
    changestayIndex: function (state, index) {
      state.stayIndex = index
    },
    changePass: function (state, index) {
      setCookie('pass', index, 7)
      state.pass = index
    },
    addStopArea: function (state, obj) {
      state.stopArea.push(obj)
    },
    addDeadArea: function (state, obj) {
      state.deadArea.push(obj)
    },
    addWinArea: function (state, obj) {
      state.winArea.push(obj)
    }
  },
  actions: {
  },
  getters: {
    cantgo: function (state) {
      return function (left, feet, area) {
        if (!state.humanInfo.isRight && !state.humanInfo.isLeft) return false
        return state[area].some(
          item => (
            left >= item.rl &&
            left < (item.rl + item.rw) &&
            feet >= item.rb &&
            feet < (item.rb + item.rh)
          )
        )
      }
    },
    cantJump: function (state) {
      return function (isUp, feet, left, area) {
        if (isUp) {
          return state[area].some(
            item => (
              (feet + 60) >= item.rb &&
              (feet + 60) < (item.rb + item.rh) &&
              (left + 15) >= item.rl &&
              left <= (item.rl + item.rw)
            )
          )
        } else {
          return state[area].some(
            (item, index) => {
              if (feet >= item.rb &&
                  feet <= (item.rb + item.rh + 6) &&
                  (left + 15) >= item.rl &&
                  left <= (item.rl + item.rw)
              ) {
                state.stayIndex = index
                return true
              }
            }
          )
        }
      }
    },
    freeFall: function (state) {
      return function (left) {
        if (state.isJump) return false
        const isRightDown = state.humanInfo.isRight &&
            left > (state.stopArea[state.stayIndex].rl + state.stopArea[state.stayIndex].rw)
        const isLeftDown = state.humanInfo.isLeft &&
            (left + 15) <= state.stopArea[state.stayIndex].rl
        return isLeftDown || isRightDown
      }
    }
  }
})
