import Vue from 'vue'
import VueRouter from 'vue-router'
import Landing from '../views/Landing.vue'
import Registeration from '../views/Registeration.vue'
import Login from '../views/Login.vue'
import patientContact from '../views/patientContact.vue'

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
  {
    path: '/patientContact',
    name: 'Patient Contact',
    component: patientContact
  },
 
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
