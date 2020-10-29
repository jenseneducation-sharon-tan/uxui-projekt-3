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
          class="input"
        />
        <input
          type="text"
          name="accountName"
          placeholder="Account Name"
          class="input"
        />
        <input
          type="text"
          name="telephoneNumber"
          placeholder="Telephone Number"
          class="input"
        />
        <input
          type="text"
          name="password"
          placeholder="Password"
          class="input"
        />
        <input
          type="text"
          name="repeatPassword"
          placeholder="Repeat password"
          class="input"
        />
      </form>
      <button class="button-big" @click="login()">Register</button>
      <div class="text-down">
        <span>Have already account?</span>
        <a href="/login" class="text2">Login</a>
      </div>
      <div class="text-down">
        <span>Forgot your password</span>
        <a href="reset password" class="text2">Reset password</a>
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
