<template>
  <div class="wrapper">
    <Header />
    <div class="container">
      <h1>Log in</h1>
      <form class="form">
        <input
          type="text"
          name="accountName"
          placeholder="Account Name"
          class="input"
        />
        <input
          type="text"
          name="password"
          placeholder="Password"
          class="input"
        />
      </form>
      <button class="button-big" @click="login()">Log in</button>
      <div class="text-down">
        <span>Don't have account?</span>
        <a href="/registeration" class="text2">Register</a>
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
   +form.form-height(30%)

footer
  display: none

@media screen and (min-width: form.$breakpoint)
  .form
    +form.form-height(20%)

  footer
    display: inline-block
</style>
