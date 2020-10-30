<template>
<div class="wrapper">
    <Header />
  <div class="call-page">
   
    <h1>Call</h1>
    <section class="calls">
      <div class="call-one">
        <img src="../assets/missed-call.png" alt="missed call" />
        <span class="name">Akinyi Matata</span>
        <span class="time">15:30,2020-10-13</span>
        <button class="button-small">Call</button>
      </div>
      <div class="call-one">
        <img src="../assets/call-received.png" alt="received call" />
        <span class="name">Akinyi Matata</span>
        <span class="time">14:50,2020-10-13</span>
        <button class="button-small">Call</button>
      </div>
      <div class="call-one">
        <img src="../assets/call-outgoing.png" alt="call-outgoing" />
        <span class="name">Nia Shwalli</span>
        <span class="time">11:20,2020-10-12</span>
        <button class="button-small">Call</button>
      </div>
    </section>
</div>
  <Footer />
  </div>
</template>

<script>
import Header from "@/components/Header.vue";
import Footer from "@/components/Footer.vue";

export default {
  components: {
    Header,
    Footer
   
  },
};
</script>

<style lang="sass" scoped>
@use '@/style/base'

.call-page
    text-align: center
    display: flex
    flex-direction: column
    align-items: center
    margin: auto

    .calls
       height: 70vh
       background: base.$light-grey
       display: flex
       flex-direction: column
       width:100%
       font-family: base.$font-Roboto
       font-size: 14px
      
       .call-one
           background: base.$white  
           margin: 20px
           height: 40px
           border-radius: 8px
           display: flex
           flex-direction: row
           justify-content: space-around
           font-family: base.$font-Roboto
           align-items: center
           img 
             width: 18px
             height: 18px
           .name
               font-size: 14px
           .time
               font-size: 10px
               
               
.button-small
    +base.common-button-orange()
    //margin: 20px
    width: 40px
    height: 21px
    cursor: pointer
    border: base.$orange
    font-family: base.$font-Roboto
    font-size: 12px
    &:focus
        outline: none
h1
    font-family: base.$font-Alfa
    color: base.$black
    font-size: 24px
    letter-spacing: 2px

@media screen and (min-width: base.$breakpoint)
    h1
       font-size: 36px
   
    .call-page .calls .call-one 
        width: 70%
        align-self: center
        img 
            width: 3% 
            height: 3%

        .name
            font-size: 18px
        .time
            font-size: 14px  
    
</style>