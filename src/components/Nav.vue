<template>
  <nav>
    <router-link class="nav_icon bookings" to="/" @click.native="setValue(1)">
      <img
        v-if="currentTab !== 1 && color !== undefined"
        :src="require(`@/assets/bookings-${color}.png`)"
        alt=""
      />
      <img v-else src="@/assets/bookings-orange.png" alt="" />
      <span
        :class="{
          isOpen: currentTab === 1,
          white: color == 'white',
          black: color == 'black',
        }"
        >Bookings</span
      >
    </router-link>
    <router-link class="nav_icon travel-log" to="/travelLogs" @click.native="setValue(2)">
      <img
        v-if="(currentTab !== 2) & (color !== undefined)"
        :src="require(`@/assets/bike-${color}.png`)"
        alt=""
      />
      <img v-else src="@/assets/bike-orange.png" alt="" />
      <span
        :class="{
          isOpen: currentTab === 2,
          white: color == 'white',
          black: color == 'black',
        }"
        >Travel logs</span
      >
    </router-link>
    <router-link class="nav_icon profile" to="/" @click.native="setValue(3)">
      <img
        v-if="(currentTab !== 3) & (color !== undefined)"
        :src="require(`@/assets/person-${color}.png`)"
        alt=""
      />
      <img v-else src="@/assets/person-orange.png" alt="" />
      <span
        :class="{
          isOpen: currentTab === 3,
          white: color == 'white',
          black: color == 'black',
        }"
        >Profile</span
      >
    </router-link>
    <router-link
      class="nav_icon calls"
      to="/calls"
      @click.native="setValue(4), removeIncomingIcon()"
    >
      <div v-if="incomingIcon" class="incoming">
        <div class="incoming_bg"><span>1</span></div>
      </div>
      <img
        v-if="(currentTab !== 4) & (color !== undefined)"
        :src="require(`@/assets/call-${color}.png`)"
        alt=""
      />
      <img v-else src="@/assets/call-orange.png" alt="" />
      <span
        :class="{
          isOpen: currentTab === 4,
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

           .profile
              margin: 0 65px 0 45px

           .incoming
               width: 72px
               right: calc(50% - 272px)

               span
                   font-size: 14px
</style>
