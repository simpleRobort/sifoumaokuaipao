import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'
import first from '../views/first.vue'
import second from '../views/second.vue'
import dead from '../views/dead.vue'
import win from '../views/win.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/first',
    name: 'first',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: first
  },
  {
    path: '/second',
    name: 'second',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: second
  },
  {
    path: '/dead',
    name: 'dead',
    component: dead
  },
  {
    path: '/win',
    name: 'win',
    component: win
  }
]

const router = new VueRouter({
  routes
})

export default router
