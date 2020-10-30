<template>
  <div class="patient-contact">
    <!-- <img src="@/assets/map.png" alt="patient-map" /> -->
    <!--  <Nav class="navigation" /> -->
    <Header />
    <iframe
      src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2033.5478537929318!2d34.773183581455356!3d-0.6809892608488292!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x182b3bf8d3457fc9%3A0x3ac1e6686dd0e022!2sKisii%20Cultural%20Center!5e0!3m2!1sen!2sse!4v1603894178224!5m2!1sen!2sse"
    ></iframe>
    <div class="patient-details">
      <p class="name">Akinyi Mutoka</p>
      <p class="place">Kissi Cultural Center</p>
    </div>
    <div class="buttons">
      <router-link to="/travel-details">
        <button class="accept">Accept</button>
      </router-link>
      <router-link to="/current-bookings">
        <button class="decline">Decline</button>
      </router-link>
    </div>
    <router-link to="/" class="back">
      &#8249; &#8249; Back to the previous page
    </router-link>
    <Footer />
  </div>
</template>

<script>
/* import Nav from "@/components/Nav.vue"; */
import Footer from "@/components/Footer.vue";
import Header from "@/components/Header.vue";
export default {
  components: {
    Header,
    /*  Nav, */
    Footer,
  },
};
</script>

<style lang="sass" scoped>
@use '@/style/base.sass'

.patient-contact
	height: 100vh
	font-family: base.$font-Roboto
	font-size: 24px
	display: flex
	flex-direction: column
	align-items: center

	.patient-details
		display: flex
		flex-direction: column
		align-items: center

		.name
			font-weight: 700
			margin-bottom: 10px

		.place
			color: base.$orange
			font-size: 18px
			margin-top: 0

.navigation
	display: none

iframe
		width: 100%
		height: 300px

.buttons
	display: flex
	flex-direction: column
	align-items: center
	font-size: 24px
	margin-top: 20px

	.accept
		+base.common-button-orange
		padding: 10px
		border: none
		width: 200px
		margin-bottom: 18px

	.decline
		+base.common-ghost-button-orange
		padding: 10px
		width: 200px
		margin-bottom: 32px

.back
	font-size: 14px
	text-align: center

footer
	align-self: end
	bottom: 0px

@media (min-width: base.$breakpoint)

	.patient-contact
		height: auto
		.patient-details
			.name
				margin-bottom: 20px
				font-size: 36px
			.place
				font-size: 24px

	.navigation
		display: flex
		margin-top: 5px

	iframe
		height: 500px

	.buttons
		display: flex
		flex-direction: row-reverse
		justify-content: center
		margin: 30px 0 40px

		.accept, .decline
			margin: 0 30px
			font-size: 24px

	.back
		font-size: 18px

	footer
		position: relative
		bottom: -70px
</style>
