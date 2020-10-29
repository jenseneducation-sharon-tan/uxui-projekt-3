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
	cursor: pointer
	z-index: 1
	

.logo 
	background-image: url("../assets/background-pic.png")
	height: 100%
	background-repeat: no-repeat
	background-size: cover
	display: flex
	justify-content: center
	flex-direction: column

.text
	display: flex
	flex-direction: column
	align-self: center
	justify-content: center
	h1
		font-family: base.$font-Alfa
		font-weight: 400
		color: base.$white
		font-size: 48px
		text-align: center
	
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
