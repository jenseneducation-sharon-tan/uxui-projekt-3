<template>
  <div class="TravelLogs wrapper">
    <Header />
    <div class="travel-container">
      <div class="travelLog-title">
        <h1>Travel logs</h1>
      </div>
      <div class="travel-logs">
        <TravelDiv
          v-for="travelLog in travelLogs"
          v-bind:key="travelLog.id"
          v-bind:travelLog="travelLog"
        />
      </div>
    </div>
    <Footer />
  </div>
</template>

<script>
import Header from "@/components/Header.vue";
import Footer from "@/components/Footer.vue";
import TravelDiv from "@/components/TravelDiv.vue";
export default {
  components: {
    Header,
    Footer,
    TravelDiv,
  },
  data: () => ({
    travelLogs: [
      {
        id: 1,
        destination: "Ram Hospital",
        distance: "15km",
        status: "On going",
        fontColor: "red",
        date: "2020-10-10",
        time: "10:12",
        patient: "Iloti Mutako",
      },
      {
        id: 2,
        destination: "Hema Hospital",
        distance: "9km",
        status: "Completed",
        fontColor: "green",
        date: "2020-09-30",
        time: "16:40",
        patient: "Iloti Mutako",
      },
      {
        id: 3,
        destination: "Christamarianna",
        distance: "15m",
        status: "Completed",
        fontColor: "green",
        date: "2020-09-04",
        time: "16:40",
        patient: "Iloti Mutako",
      },
    ],
  }),
  methods: {},
};
</script>

<style lang="sass" scoped>
@use '@/style/base'
.TravelLogs
    .travel-container
        text-align: center
        background: base.$light-grey
        padding-bottom:2rem
        height: 90vh
        .travelLog-title
            background: base.$white
            padding-bottom:1rem
        .travel-logs
            padding: 2rem
            display: flex
            flex-direction: column
            align-items: center
@media screen and (max-width: base.$breakpoint)
    .TravelLogs
        .travel-container
            .travel-logs
                padding: 0
</style>
