<template>
  <div class="wrapper">
    <Header />
    <div class="container">
      <h1>Register</h1>
      <form class="form">
        <input
          type="text"
          name="fullName"
          placeholder="Full Name"
          value="Alamini Gaalav"
          class="input"
        />
        <input
          type="text"
          name="accountName"
          placeholder="Account Name"
          value="aalmini@eezer.com"
          class="input"
        />
        <input
          type="text"
          name="telephoneNumber"
          placeholder="Telephone Number"
          class="input"
          value="+254720266878"
        />
        <input
          type="password"
          name="password"
          placeholder="Password"
          value="aaaaaaaa"
          class="input"
        />
        <input
          type="password"
          name="repeatPassword"
          placeholder="Repeat password"
          value="aaaaaaaa"
          class="input"
        />
      </form>
      <button class="button-big" @click="login()">Register</button>
      <div class="text-down">
        <span>Have already account?</span>
        <router-link to="/login" class="text2">Login</router-link>
      </div>
      <div class="text-down">
        <span>Forgot your password</span>
        <router-link to="" class="text2">Reset password</router-link>
      </div>
    </div>
    <Footer />
  </div>
</template>

<script>
import Header from "@/components/Header.vue";
import Footer from "@/components/Footer.vue";
export default {
  components: {
    Header,
    Footer,
  },
  methods: {
    login() {
      this.$globalData.loggedIn = true;
      this.$router.push("/current-bookings");
    },
  },
};
</script>

<style lang="sass" scoped>
@use '@/style/form'
.form
   +form.form-height(50%)

footer
  display: none

@media screen and (min-width: form.$breakpoint)

  footer
    display: inline-block
</style>
