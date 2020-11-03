<template>
  <div class="current-bookings">
    <Header />
    <div class="booking-container">
      <div class="booking-title">
          <h1>Patient near me</h1>
      </div>
      <div class="bookings">
        <BookingDiv v-for="booking in currentBookings" v-bind:key="booking.id" v-bind:booking="booking"/>
      </div>
    </div>
    <Footer />
  </div>
</template>

<script>
import Header from "@/components/Header.vue";
import Footer from "@/components/Footer.vue";
import BookingDiv from '@/components/BookingDiv.vue'
export default {
  components: {
    Header,
    Footer,
    BookingDiv
  },
  data:()=>({
     currentBookings:[
         {
             id:1,
             location:'Kissi Cultural Center',
             date:'2020-10-13',
             time:'15:30',
             patient:'Akinyi Matata'
         },
         {
             id:2,
             location:'House 6, Kissi Main Village',
             date:'2020-10-13',
             time:'19:30',
             patient:'Nia Shwalli'
         },
     ] 
  }),
};
</script>

<style lang='sass' scoped>
@use '@/style/base'
.current-bookings
    .booking-container
        text-align: center
        background: base.$light-grey
        padding-bottom:2rem
        height: 80vh
        .booking-title
            background: base.$white
            padding-bottom:1rem 
    .bookings
        display: flex
        padding: 2rem
@media (max-width: base.$breakpoint)
    .current-bookings
        .bookings
            flex-direction: column
            justify-content: center
            align-items: center
</style>
