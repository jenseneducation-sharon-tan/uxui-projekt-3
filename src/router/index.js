import Vue from "vue";
import VueRouter from "vue-router";
import Landing from "../views/Landing.vue";
import Registeration from "../views/Registeration.vue";
import Login from "../views/Login.vue";
import PatientContact from "../views/PatientContact.vue";
import TravelDetails from "../views/TravelDetails.vue";
import CurrentBookings from "../views/CurrentBookings.vue";
import travelLogs from "../views/TravelLogs.vue";
import Profile from "../views/Profile.vue";
import Calls from "../views/Calls";

Vue.use(VueRouter);

const routes = [
  /*  {
    path: '/',
    name: 'Home',
    component: Home
  }, */
  {
    path: "/",
    name: "Landing",
    component: Landing,
  },

  {
    path: "/registeration",
    name: "registeration",
    component: Registeration,
  },
  {
    path: "/login",
    name: "login",
    component: Login,
  },
  {
    path: "/patient-contact",
    name: "PatientContact",
    component: PatientContact,
  },
  {
    path: "/travel-details",
    name: "Travel Details",
    component: TravelDetails,
  },
  {
    path: "/current-bookings",
    name: "CurrentBookings",
    component: CurrentBookings,
  },
  {
    path: "/travelLogs",
    name: "TravelLogs",
    component: travelLogs,
  },
  {
    path: "/profile",
    name: "Profile",
    component: Profile,
  },
  {
    path: "/calls",
    name: "calls",
    component: Calls,
  },
];

const router = new VueRouter({
  mode: "hash",
  base: process.env.BASE_URL,
  routes,
});

export default router;
