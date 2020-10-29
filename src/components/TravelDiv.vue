<template>
  <div class="travel-div">
            <div class="info">
                <div class="destination">
                    <p>Destination: </p>
                <p class="bold">{{travelLog.destination}}</p>
                </div>
                <div class="distance">
                    <p>Distance: </p>
                <p class="bold">{{travelLog.distance}}</p>
                </div>
                <div class="status">
                    <p>Status: </p>
                <p v-bind:class="travelLog.fontColor"> {{travelLog.status}}</p>
                </div>
                <div class="detailBtn" v-if="open" v-on:click="toggleDetail">
                    <h1 class="toggleInfo">+</h1>
                </div>
                <div class="detailBtn" v-else v-on:click="toggleDetail">
                    <h1 class="toggleInfo">-</h1>
                </div>
            </div>
            <div class="detail" v-if="open">
                    <div class="time">
                    <p>Date: {{travelLog.date}}, Time: {{travelLog.time}}</p>
                </div>
                <div class="patient">
                    <p>Patient:</p>
                    <p class="bold">{{travelLog.patient}}</p>
                </div>
                </div>
  </div>
</template>

<script>
export default {
    name:'TravelDiv',
    props:['travelLog'],
  data:()=>({
     open:true
  }),
  methods: {
      toggleDetail(){
          this.open = !this.open
      }
  },
};
</script>

<style lang="sass" scoped>
@use '@/style/base'
.travel-div
    background: base.$white
    margin: 1rem
    padding: 1rem
    border-radius: 20px
    .info
        display: flex
        flex-direction: row
        flex-wrap: wrap
        justify-content: space-between
        align-items: center
        .destination
            display: flex
            flex-direction: row
            justify-content: center
            .bold
                font-weight: 600

        .distance
            display: flex
            flex-direction: row
            justify-content: center
            .bold
                font-weight: 600

        .status
            display: flex
            flex-direction: row
            justify-content: center
            .red
                color: base.$red
                font-weight: 600
            .green
                color: base.$green
                font-weight: 600
        .detailBtn
            cursor: pointer
            .toggleInfo
                color: base.$grey
    .detail
        .time
            display: flex
            flex-direction: row
        .patient
            display: flex
            flex-direction: row
            .bold
                font-weight: 600
</style>
