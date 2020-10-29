import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'
import patientContact from '../views/patientContact.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
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
