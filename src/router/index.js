import Vue from 'vue'
import VueRouter from 'vue-router'
import Landing from '../views/Landing.vue'
import Registeration from '../views/Registeration.vue'
import Login from '../views/Login.vue'

Vue.use(VueRouter)

const routes = [
 /*  {
    path: '/',
    name: 'Home',
    component: Home
  }, */
  {
    path: '/',
    name: 'Landing',
    component: Landing},
  {
    path: '/registeration',
    name: 'registeration',
    component: Registeration
  },
  {
    path: '/login',
    name: 'login',
    component: Login
  },
 
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
