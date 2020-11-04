<template>
  <div class="travel-container wrapper">
    <Header />
    <div class="sub-header">
      <div class="top">
        <h1>Travel details</h1>
        <p class="weather">
          <span><img src="../assets/sun.png" />28&#8451;</span>
        </p>
      </div>
      <div class="destination-container">
        <p class="destination">Destination: <b>Kissi Cultural Center</b></p>
        <p class="weather">
          <span><img src="../assets/sun.png" />28&#8451;</span>
        </p>
      </div>
    </div>
    <div class="patient-location">
      <div class="left">
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2033.5478537929318!2d34.773183581455356!3d-0.6809892608488292!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x182b3bf8d3457fc9%3A0x3ac1e6686dd0e022!2sKisii%20Cultural%20Center!5e0!3m2!1sen!2sse!4v1603894178224!5m2!1sen!2sse"
        ></iframe>
        <p class="destination-info">
          It should take <b><span>40</span> minutes</b> to the destination
        </p>
      </div>
      <div class="right">
        <div class="bottom">
          <div class="patient-info">
            <p>Patient: <b>Akinyi Mutoka</b></p>
            <div class="buttons">
              <button class="hospital">
                <span><img src="../assets/call-red.png" alt="phone"/></span>Call
                Hospital
              </button>
              <button class="patient">
                <span><img src="../assets/call-white.png" alt="phone"/></span
                >Call Patient
              </button>
            </div>
          </div>
          <div class="voice-type">
            <textarea
              name="voice-type"
              cols="30"
              rows="10"
              placeholder="Note"
            ></textarea>
            <button class="voice" @click="toggleMic" v-show="!showMic">
              Voice Typing
              <!--  <span class="tooltiptext">Click and hold to talk</span> -->
            </button>
            <div class="mic" v-show="showMic"></div>
            <img
              src="../assets/mic.svg"
              alt="microphone"
              @click="toggleMic"
              v-show="showMic"
            />
          </div>
        </div>
      </div>
    </div>
    <Footer />
  </div>
</template>

<script>
import Footer from "@/components/Footer.vue";
import Header from "@/components/Header.vue";
export default {
  components: {
    Header,
    Footer,
  },
  data: function() {
    return {
      showMic: false,
    };
  },
  methods: {
    toggleMic() {
      this.showMic = !this.showMic;
    },
  },
};
</script>

<style lang="sass" scoped>
@use '@/style/base.sass'

.travel-container
	width: 100%
	

.sub-header
	font-family: base.$font-Roboto

.top
	display: flex
	justify-content: center
	h1
		font-family: base.$font-Alfa
		font-size: 24px
		margin: 0
	img
		width: 40%
		position: relative
		bottom: -6px
		margin-right: 5px
		@-webkit-animation: pulse 2s ease-in
		@-moz-animation: pulse 2s ease-in
		animation: pulse 2s ease-in
		@webkit-animation-iteration-count: infinite
		@moz-animation-iteration-count: infinite
		animation-iteration-count: infinite

		@keyframes pulse
			0%
				-webkit-transform: scale(1)
				opacity: 0.8
			25%
				-webkit-transform: scale(1.2)
				opacity: 0.9
			50%
				-webkit-transform: scale(1.3)
				opacity: 1
			75%
				-webkit-transform: scale(1.2)
				opacity: 0.9
			100%
				-webkit-transform: scale(1)
				opacity: 0.8

	.weather
		margin: 0 0 0 30px
		position: relative
		top: -3px

.destination-container
	.destination
		color: base.$white
		background-color: base.$black
		padding: 10px
		//width: 100%
		text-align: center
		margin: 16px 0 0 0
	.weather
		display: none

.patient-location
	//width: 100%

	.left
		iframe
			width: 100%
			height: 300px
			border: none

.destination-info
	text-align: center
	margin: 0
	padding: 6px
	background-color: base.$white
	font-size: 14px
	b
		color: base.$orange

		span
			font-size: 24px

.bottom
	margin: 0
	background-color: base.$light-grey
	.patient-info
		font-size: 24px
		text-align: center
	p
		margin: 0
		padding: 15px
.buttons
	display: flex
	justify-content: center
	font-size: 14px
	margin-bottom: 30px

	span > img
		width: 12%
		margin-right: 6px
		position: relative
		bottom: -3px
	.patient
		+base.common-button-red()
		width: 130px
		height: 35px
		margin-left: 25px

	.hospital
		+base.common-ghost-button-red()
		width: 130px
		height: 35px

.voice-type
	display: flex
	flex-direction: column
	align-items: center

	textarea
		width: 85%
		height: 70px
		border-radius: 10px
	::placeholder
		padding: 5px 10px

	.voice
		+base.common-button-orange()
		font-family: base.$font-Roboto
		align-self: flex-end
		font-size: 14px
		color: base.$white
		border: none
		margin: 15px
		margin-right: 35px
		padding: 6px 10px
		&:hover .tooltiptext
			visibility: visible
		.tooltiptext
			visiblity: hidden
			color: red
			text-align: center
			background-color: pink
			position: absolute
			z-index: 1
	img
		width: 50px
		height: 50px
		align-self: flex-end
		margin-right: 30px
		position: relative
		top: 5px

footer
	//align-self: end
	position: sticky
	bottom: 0

	.mic
		width: 14px
		height: 13px
		border-radius: 50%
		align-self: flex-end
		margin-right: 48px
		position: relative
		bottom: -20px
		animation-name: pulse1
		animation-duration: 1.5s
		animation-iteration-count: infinite
		animation-timing-function: linear
		@keyframes pulse1
			0%
				box-shadow: 0px 0px 5px 0px rgba(255,0,0,.3)
			65%
				box-shadow: 0px 0px 5px 13px rgba(255,0,0,.3)
			90%
				box-shadow: 0px 0px 5px 13px rgba(255,0,0,0)


footer
	//align-self: end

@media (min-width: base.$breakpoint)
	.travel-container
		flex-direction: column
		align-items: center


		.sub-header
			width: 100%
		.patient-location
			width: 100%


	.top
		flex-direction: column
		align-items:  center
		h1
			font-size: 36px
			margin: 15px
		.weather
			display: none

	.destination-container
		display: flex
		justify-content: center
		background-color: base.$black
		.destination
			font-size: 24px
			width: auto
			margin-top: 4px

		.weather
			display: initial
			color: white
			background-color: transparent
			top: 3px
			position: relative
			margin-right: 5px
			margin-left: 20px

		img
			width: 40%
			position: relative
			top: 7px
			margin-right: 5px
			@-webkit-animation: pulse 2s ease-in
			@-moz-animation: pulse 2s ease-in
			animation: pulse 2s ease-in
			@webkit-animation-iteration-count: infinite
			@moz-animation-iteration-count: infinite
			animation-iteration-count: infinite

			@keyframes pulse
				0%
					-webkit-transform: scale(1)
					opacity: 0.8
				25%
					-webkit-transform: scale(1.2)
					opacity: 0.9
				50%
					-webkit-transform: scale(1.3)
					opacity: 1
				75%
					-webkit-transform: scale(1.2)
					opacity: 0.9
				100%
					-webkit-transform: scale(1)
					opacity: 0.8

	.patient-location
		display: flex

		.right
			width: 40%
			flex-direction: column
			align-items: center
			.bottom
				width: 100%
				height: 100%
				p
					padding-top: 10%
				.buttons
					flex-direction: column
					align-items: center
					.hospital
						width: 150px
						height: 40px
						margin-top: 20px
						margin-bottom: 20px
					.patient
						width: 150px
						height: 40px
						margin-left: 0
			.voice-type
				padding-bottom: 10%
				textarea
					width: 85%
					height: 70px
					border-radius: 10px
				img
					width: 50px
					height: 50px
				.mic
					width: 14px
					height: 13px
					border-radius: 50%
					align-self: flex-end
					margin-right: 48px
					position: relative
					bottom: -20px
					animation-name: pulse1
					animation-duration: 1.5s
					animation-iteration-count: infinite
					animation-timing-function: linear
					@keyframes pulse1
						0%
							box-shadow: 0px 0px 5px 0px rgba(255,0,0,.3)
						65%
							box-shadow: 0px 0px 5px 13px rgba(255,0,0,.3)
						90%
							box-shadow: 0px 0px 5px 13px rgba(255,0,0,0)
		.left
			width: 60%

			iframe
				width: 100%
				height: 80%
			.destination-info
				padding: 20px 0
</style>
