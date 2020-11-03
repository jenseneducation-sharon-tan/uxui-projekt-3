<template>
  <div class="travel-div">
            <div class="info">
                <div class="info-group-1">
                    <div class="destination">
                    <p>Destination: </p>
                <p class="bold">{{travelLog.destination}}</p>
                </div>
                <div class="distance">
                    <p>Distance: </p>
                <p class="bold">{{travelLog.distance}}</p>
                </div>
                </div>
            <div class="info-group-2">
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
    width: 756px
    .info
        display: flex
        flex-direction: row
        justify-content: space-between
        .info-group-1
            display: flex
            flex-direction: row
            justify-content: start
            align-items: center
            width: 60%
            margin-right: 1rem 
            .destination
                display: flex
                flex-direction: row
                justify-content: space-between
                .bold
                    font-weight: 600
            .distance
                display: flex
                flex-direction: row
                justify-content: space-between
                .bold
                    font-weight: 600
        .info-group-2
            display: flex
            flex-direction: row
            justify-content: space-between
            align-items: center
            width: 35%
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
                    margin: 0
    .detail
        .time
            display: flex
            flex-direction: row
        .patient
            display: flex
            flex-direction: row
            .bold
                font-weight: 600
@media screen and (max-width: base.$breakpoint)
    p
        font-size: 13px
    .travel-div
        width: 90%
        .info
            display: flex
            flex-direction: column
            justify-content: center
            .info-group-1
                justify-content: space-between
                width: 100%
                margin: 0
            .info-group-2
                width: 100%
</style>
