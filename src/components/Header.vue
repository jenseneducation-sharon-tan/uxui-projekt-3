<template>
  <header>
    <img src="@/assets/logo.png" alt="" />
    <Nav v-bind:color="color" />
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
};
</script>

<style lang="sass" scoped>
@use '@/style/base.sass'

header
    width: 100%
    img
      height:40px
      margin: 0.7em auto 0 0.7em
    nav
       display: none


@media (min-width: base.$breakpoint)
    header
        height: 74px
        display: flex
        align-items: center
        justify-content: space-between
        background: base.$white
        box-shadow: 0em 0.3em 8px 0.1em base.$grey
        position: relative

        img
           height:50px
           margin: 0 16px

        nav
           display: flex
           position: absolute
</style>
