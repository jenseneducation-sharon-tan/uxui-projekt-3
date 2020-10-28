<template>
  <footer>
    <nav>
      <router-link class="nav_icon bookings" to="/" @click.native="setValue(1)">
        <img v-if="currentTab !== 1" src="@/assets/bookings-white.png" alt="" />
        <img v-else src="@/assets/bookings-orange.png" alt="" />
        <span :class="{ isOpen: currentTab === 1 }">Bookings</span>
      </router-link>
      <router-link
        class="nav_icon travel-log"
        to="/"
        @click.native="setValue(2)"
      >
        <img v-if="currentTab !== 2" src="@/assets/bike-white.png" alt="" />
        <img v-else src="@/assets/bike-orange.png" alt="" />
        <span :class="{ isOpen: currentTab === 2 }">Travel logs</span>
      </router-link>
      <router-link class="nav_icon profile" to="/" @click.native="setValue(3)">
        <img v-if="currentTab !== 3" src="@/assets/person-white.png" alt="" />
        <img v-else src="@/assets/person-orange.png" alt="" />
        <span :class="{ isOpen: currentTab === 3 }">Profile</span>
      </router-link>
      <router-link
        class="nav_icon calls"
        to="/"
        @click.native="setValue(4), removeIncomingIcon()"
      >
        <div v-if="incomingIcon" class="incoming">
          <div class="incoming_bg"><span>1</span></div>
        </div>
        <img v-if="currentTab !== 4" src="@/assets/call-white.png" alt="" />
        <img v-else src="@/assets/call-orange.png" alt="" />
        <span :class="{ isOpen: currentTab === 4 }">Calls</span>
      </router-link>
    </nav>
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
export default {
  data: () => ({
    currentTab: 0,
    incomingIcon: true,
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

.isOpen
    color: base.$orange

footer
    width: 100%
    height: 56px
    background-color: base.$black
    position: absolute
    bottom: 0
    display: flex
    justify-content: center

nav
    display: flex
    justify-content: space-around
    width: 100%
    padding:6px 0

.nav_icon
    display: flex
    flex-direction: column
    justify-content: space-between
    align-items: center
    font-family: base.$font-Roboto
    font-weight: 700
    color: base.$white
    font-size: 12px

a
    text-decoration: none
    outline: none


.bookings
    img
       margin-top: 2px
       margin-bottom: 4px

.travel-log
    img
       margin-bottom: 1px

.profile
    margin: 0 6px
    img
       margin-bottom: 3px

.calls
    height:100%
    position:relative
    img
       margin-top: 6px
       margin-bottom: 7px

.incoming
    position: absolute
    display: flex
    justify-content: center
    align-items: center
    z-index: 1
    height:100%
    right: 4%
    top: -3px

    .incoming_bg
        background: base.$red
        width: 20px
        height: 20px
        border-radius: 50px
        display: flex
        justify-content: center
        align-items: center

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
