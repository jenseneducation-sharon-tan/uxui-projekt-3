<template>

  <div class="home">
	<Header class="header"/>
  <router-link to="/Registeration">
	<div class="logo">
	<img class="logo_image"  v-if="windowWidth <768" alt="" src="../assets/logo.png" >
	<div class="text" v-else >
		<h1>Help us reduce maternal mortality in Africa with Eezer's motorcycle ambulances</h1>
		<div class="background">
			<h2>Our goal is to develop safe and cost-effective transport solutions for pregnant mothers and to have 3000 motorcycle ambulances in Africa by 2030.</h2></div></div>
  </div>
  </router-link>
  <Footer class="footer"/>
  </div>
</template>

<script>

import Header from "@/components/Header.vue";
import Footer from "@/components/Footer.vue";
export default {
  name: 'Landing',
  components: {
   Header, Footer
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
	height: 100vh

a
	text-decoration: none
	outline: none
	cursor: pointer

.logo_image 
	align-self: center
	justify-self: center
	width: 120px
	height: 150px
	z-index: 1
	animation: bounceIn 0.6s
	@keyframes bounceIn 
		0% 
			opacity: 1
			transform: scale(.3)
		50% 
			opacity: 1
			transform: scale(1.05)
		70% 
			opacity: 1
			transform: scale(.9)
		100% 
			opacity: 1
			transform: scale(1)
	
.logo 
	background-image: url("../assets/background-pic.png")
	height: 100%
	background-repeat: no-repeat
	background-size: cover
	display: flex
	justify-content: center
	flex-direction: column

.text
	+base.flex-column-align-center()
	justify-content: center
	h1
		color: base.$white
		font-size: 48px
		text-align: center
		font-weight: 400
	
.background
	background-color: base.$black
	opacity: 0.31
	width: 600px
	margin: 20px
	padding: 50px
	align-self: center
	h2
		font-family: base.$font-Alfa
		font-weight: 150
		color: base.$white
		font-size: 24px
	@keyframes wobble-top 
		16.65% 
			transform: skew(-12deg)
		33.3% 
			transform: skew(10deg)
		49.95% 
			transform: skew(-6deg)
		66.6% 
			transform: skew(4deg)
		83.25% 
			transform: skew(-2deg)
		100% 
			transform: skew(0)
	&:hover 
		animation-name: wobble-top
		animation-duration: 1s
		animation-timing-function: ease-in-out
		animation-iteration-count: 1

header
	display: none 

footer
	display: none
	
@media  (min-width: base.$breakpoint)

	header
		display: flex

	footer
		display: flex
		position: relative


	


</style>
