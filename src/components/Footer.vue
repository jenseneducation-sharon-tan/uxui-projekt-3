<template>
  <footer>
    <Nav v-bind:color="color" />
    <div class="footer_desktop">
      <span>© 2020 Eezer AB</span>
      <div class="contact">
        <div class="telephone">
          <img src="@/assets/call-orange.png" alt="" />
          <span>+254 567 4526</span>
        </div>
        <div class="email">
          <img src="@/assets/email.png" alt="" />
          <span>info@eezer.com</span>
        </div>
      </div>
    </div>
  </footer>
</template>

<script>
import Nav from "@/components/Nav.vue";
export default {
  components: {
    Nav,
  },
  data: () => ({
    color: "white",
  }),

  methods: {
    setValue(val) {
      this.currentTab = val;
    },
    removeIncomingIcon() {
      this.incomingIcon = false;
    },
  },
};
</script>

<style lang="sass" scoped>
@use '@/style/base.sass'

footer
    width: 100%
    height: 56px
    background-color: base.$black
    position: absolute
    margin-top: auto
    display: flex
    justify-content: center

.footer_desktop
    display: none

@media (min-width: base.$breakpoint)
    footer
       height: 142px

    nav
        display: none

    .footer_desktop
        display: flex
        flex-direction: column
        align-items: center
        justify-content: center
        color: base.$white
        margin: 20px 0
        font-size: 24px
        font-weight: 700

        .contact
            font-size: 18px
            font-weight: 400
            display: flex
            div
                margin:24px
                display: flex
                align-items: center

                span
                    margin: 0 16px
</style>
