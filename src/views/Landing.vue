<template>

  <div class="home">
   <meta name="viewport" content="width=device-width, initial-scale=1.0">
	<div class="logo">
	<img class="logo_image"  v-if="windowWidth <768" alt="" src="../assets/logo.png" >
	<div class="text" v-else >
		<h1>Help us reduce maternal mortality in Africa with Eezer's motorcycle ambulances</h1>
		<div class="background">
			<h2>Our goal is to develop safe and cost-effective transport solutions for pregnant mothers and to have 3000 motorcycle ambulances in Africa by 2030.</h2></div></div>
  </div>
  </div>
</template>

<script>
// @ is an alias to /src
/* import HelloWorld from '@/components/HelloWorld.vue' */

export default {
  name: 'Landing',
  components: {
   
  },
data: function () {
    return {
/* isVisible: true, */
windowWidth: window.innerWidth
};
},
methods: {
		setWindowWidth() {
      this.windowWidth = window.innerWidth;
    }
	},
created() {
    window.addEventListener(
      'resize',
      this.setWindowWidth
    )
  },
}
</script>

<style lang="sass" scoped >
@use '@/style/base.sass'

.home 
	height: 100%

.landing_image 
	height: 100%

.logo_image 
	margin: auto 0
	align-self: center
	justify-self: center
	width: 120px
	height: 150px
.logo 
	background-image: url("../assets/background-pic.png")
	height:100vh
	background-repeat: no-repeat
	background-size: cover
	display: flex
	justify-content: center
	display: flex
	flex-direction: column
	h1
		font-family: base.$font-Alfa
		font-weight: 400
		color: base.$white
		font-size: 48px
.text
	display: flex
	flex-direction: column

.background
	background-color: base.$black
	opacity: 0.3
	width: 600px
	margin: 20px
	padding: 50px
	align-self: center
	h2
		font-family: base.$font-Alfa
		font-weight: 100
		color: base.$white
		font-size: 24px


</style>
