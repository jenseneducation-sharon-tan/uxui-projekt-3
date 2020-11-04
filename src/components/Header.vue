<template>
  <header>
    <router-link to="/">
      <img class="logo" src="@/assets/logo.png" alt="" />
    </router-link>

    <Nav
      v-if="
        (this.$route.path !== '/' &&
          this.$route.path !== '/registeration' &&
          this.$route.path !== '/login') ||
          loggedIn
      "
      v-bind:color="color"
    />

    <div v-else class="login-container">
      <router-link
        :class="{
          orange: this.$route.path == '/registeration',
          black: this.$route.path != '/registeration',
        }"
        to="/registeration"
        >Register</router-link
      >
      <router-link
        :class="{
          orange: this.$route.path == '/login',
          black: this.$route.path != '/login',
        }"
        to="/login"
        >Log in</router-link
      >
    </div>
  </header>
</template>

<script>
import Nav from "@/components/Nav.vue";
export default {
  components: {
    Nav,
  },
  data: () => ({
    color: "black",
  }),
  computed: {
    loggedIn() {
      return this.$globalData.loggedIn;
    },
  },
};
</script>

<style lang="sass" scoped>
@use '@/style/base.sass'

header
    width: 100%
    .logo
      text-align: left
    img
      height:32px
      margin: .5em auto .1em .7em
      cursor: pointer
      z-index: 1
      position: relative
    nav
       display: none

    .login-container
        display: none


@media (min-width: base.$breakpoint)
    header
        height: 74px
        display: flex
        align-items: center
        justify-content: space-between
        background: base.$white
        box-shadow: 0em 0.3em 8px 0.1em base.$grey
        position: sticky
        top: 0
        z-index: 999

        img
           height:50px
           margin: 0 16px

        nav
           display: flex
           position: absolute

        .login-container
            display: inline-block
            margin-right: 32px
            a
                margin: 0 24px
                color: base.$black
                font-weight: 700
                text-decoration: none
                font-size: 20px
                &:hover
                      color: base.$orange

            .orange
                 color: base.$orange

            .black
                 color: base.$black
</style>
