<template>
  <nav>
    <router-link
      class="nav_icon bookings"
      to="/current-bookings"
      @mouseover.native="active1 = true"
      @mouseleave.native="active1 = false"
    >
      <img
        v-show="
          this.$route.path !== '/current-bookings' &&
            color !== undefined &&
            active1 !== true
        "
        :src="require(`@/assets/bookings-${color}.png`)"
        alt=""
      />
      <img
        v-show="this.$route.path === '/current-bookings' || active1 == true"
        src="@/assets/bookings-orange.png"
        alt=""
      />
      <span
        :class="{
          active: active1 == true,
          isOpen: this.$route.path === '/current-bookings',
          white: color == 'white',
          black: color == 'black',
        }"
        >Bookings</span
      >
    </router-link>
    <router-link
      class="nav_icon travel-log"
      to="/travelLogs"
      @mouseover.native="active2 = true"
      @mouseleave.native="active2 = false"
    >
      <img
        v-show="
          this.$route.path !== '/travelLogs' &&
            color !== undefined &&
            active2 !== true
        "
        :src="require(`@/assets/bike-${color}.png`)"
        alt=""
      />
      <img
        v-show="this.$route.path === '/travelLogs' || active2 == true"
        src="@/assets/bike-orange.png"
        alt=""
      />
      <span
        :class="{
          active: active2 == true,
          isOpen: this.$route.path === '/travelLogs',
          white: color == 'white',
          black: color == 'black',
        }"
        >Travel logs</span
      >
    </router-link>
    <router-link
      class="nav_icon profile"
      to="/"
      @mouseover.native="active3 = true"
      @mouseleave.native="active3 = false"
    >
      <img
        v-show="
          this.$route.path !== '/' && color !== undefined && active3 !== true
        "
        :src="require(`@/assets/person-${color}.png`)"
        alt=""
      />
      <img
        v-show="this.$route.path === '/' || active3 == true"
        src="@/assets/person-orange.png"
        alt=""
      />
      <span
        :class="{
          active: active3 == true,
          isOpen: this.$route.path === '/',
          white: color == 'white',
          black: color == 'black',
        }"
        >Profile</span
      >
    </router-link>
    <router-link
      class="nav_icon calls"
      to="/calls"
      @click.native="removeIncomingIcon()"
      @mouseover.native="active4 = true"
      @mouseleave.native="active4 = false"
    >
      <div v-if="incomingIcon == true" class="incoming">
        <div class="incoming_bg">
          <span>1</span>
        </div>
      </div>
      <img
        v-show="
          this.$route.path !== '/calls' &&
            color !== undefined &&
            active4 !== true
        "
        :src="require(`@/assets/call-${color}.png`)"
        alt=""
      />
      <img
        v-show="this.$route.path === '/calls' || active4 == true"
        src="@/assets/call-orange.png"
        alt=""
      />
      <span
        :class="{
          active: active4 == true,
          isOpen: this.$route.path === '/calls',
          white: color == 'white',
          black: color == 'black',
        }"
        >Calls</span
      >
    </router-link>
  </nav>
</template>

<script>
export default {
  props: ["color"],
  data: () => ({
    active1: false,
    active2: false,
    active3: false,
    active4: false,
  }),
  computed: {
    incomingIcon() {
      return this.$globalData.incomingIcon;
    },
  },
  methods: {
    removeIncomingIcon() {
      this.$globalData.incomingIcon = false;
    },
  },
};
</script>

<style lang="sass" scoped>
@use '@/style/base.sass'

.white
   color: base.$white

.black
   color: base.$black

.isOpen
    color: base.$orange

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
    cursor: pointer

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
    width: calc(26% - 50px)
    right: 0
    top: -3px

    .incoming_bg
        background: base.$red
        width: 20px
        height: 20px
        border-radius: 50px
        display: flex
        justify-content: center
        align-items: center

@media (min-width: base.$breakpoint)

  nav
    justify-content: center

    span
      font-size: 18px

    a
      margin: 0 32px

    .active
      color: base.$orange

    .profile
      margin: 0 65px 0 45px

    .incoming
      width: 72px
      right: calc(50% - 272px)

      span
        font-size: 14px
</style>
