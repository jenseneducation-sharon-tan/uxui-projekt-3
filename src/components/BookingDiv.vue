
<template>
  <div class="booking">
    <div class="booking-info">
            <p>Booking time: {{booking.time}}, {{booking.date}}</p>
            <div class="booking-info-name">
              <p>Name: </p>
              <p class="bold">{{booking.patient}}</p>
            </div>
            <div class="booking-info-location">
              <p>Location: </p>
              <p class="bold">{{booking.location}}</p>
            </div>
          </div>
          <div class="booking-btn-div">
              <router-link to="/patient-contact">
              <button class="booking-btn">See More</button>
              </router-link>
          </div>
  </div>
</template>
<script>
export default {
    name:'BookingDiv',
    props:['booking']
};
</script>

<style lang='sass' scoped>
@use '@/style/base'
.booking
    background: base.$white
    padding: 1rem
    margin: 1rem
    border-radius: 20px
    display: flex
    flex-direction: column
    width: 28%
    .booking-info
        text-align: left
        .booking-info-name, .booking-info-location
            display: flex
            flex-direction: row
            justify-content: start
            .bold
                font-weight: 600
    .booking-btn-div
        .booking-btn
            +base.common-button-orange
            margin-top: 15px
            padding: 10px
            border: none
            width: 200px
@media (max-width: base.$breakpoint)
    p
        font-size: 11px
    .booking
        flex-direction: row
        align-items: center
        padding: 0.5rem
        margin: 0.5rem
        width: 100%
        .booking-info
            width: 65%
        .booking-btn-div
            width:30%
            .booking-btn
                width: 120px

@media (max-width: 450px)
    .booking
        margin: 0
        margin-bottom: 1rem
        .booking-info
            width: 60%
        .booking-btn-div
            width:40%
@media (max-width: 375px)
    .booking
        .booking-info
            width: 60%
        .booking-btn-div
            width:40%
            .booking-btn
                width: 100px
                font-size: 12px
</style>