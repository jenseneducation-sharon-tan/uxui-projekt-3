import Vue from "vue";
import App from "./App.vue";
import router from "./router";

Vue.prototype.$globalData = Vue.observable({
  loggedIn: false,
});

Vue.config.productionTip = false;

new Vue({
  router,
  render: (h) => h(App),
}).$mount("#app");
