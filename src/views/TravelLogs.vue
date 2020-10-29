<template>
  <div class="TravelLogs">
    <Header />
    <div class="travel-container">
      <h1>Travel logs</h1>
    <div class="travel-logs">
        <TravelDiv v-for="travelLog in travelLogs" v-bind:key="travelLog.id" v-bind:travelLog="travelLog" />
    </div>
    </div>
    <Footer />
  </div>
</template>

<script>
import Header from "@/components/Header.vue";
import Footer from "@/components/Footer.vue";
import TravelDiv from "@/components/TravelDiv.vue"
export default {
  components: {
    Header,
    Footer,
    TravelDiv,
  },
  data:()=>({
     travelLogs:[
         {
             id:1,
             destination:'Ram Hospital',
             distance:'15km',
             status: 'On going',
             fontColor:'red',
             date:'2020-10-10',
             time:'10:12',
             patient:'Iloti Mutako'
         },
         {
             id:2,
             destination:'Hema Hospital',
             distance:'9km',
             status: 'Completed',
             fontColor:'green',
             date:'2020-09-30',
             time:'16:40',
             patient:'Iloti Mutako'
         },
         {
             id:3,
             destination:'Christamarianna',
             distance:'15m',
             status: 'Completed',
             fontColor:'green',
             date:'2020-09-04',
             time:'16:40',
             patient:'Iloti Mutako'
         },
     ] 
  }),
  methods: {
  },
};
</script>

<style lang="sass" scoped>
@use '@/style/base'
.TravelLogs
    text-align: center
    .travel-container
        background: base.$light-grey
        padding: 2rem
</style>
