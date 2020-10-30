import Vue from 'vue'
import VueRouter from 'vue-router'
import Landing from '../views/Landing.vue'
import Registeration from '../views/Registeration.vue'
import Login from '../views/Login.vue'
import PatientContact from '../views/PatientContact.vue'
import TravelDetails from '../views/TravelDetails.vue'
import CurrentBookings from '../views/CurrentBookings.vue'
import travelLogs from '../views/TravelLogs.vue'

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
	component: Landing
  },
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
    path: '/patient-contact',
    name: 'Patient Contact',
    component: PatientContact
  },
  {
    path: '/travel-details',
    name: 'Travel Details',
    component: TravelDetails
  },
  {
    path: '/current-bookings',
    name: 'Current Bookings',
    component: CurrentBookings
  },
 {
    path: '/travelLogs',
    name: 'TravelLogs',
    component: travelLogs
  },
 
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
