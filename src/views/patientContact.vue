<template>
    <div class="patient-contact">
        <!-- <img src="@/assets/map.png" alt="patient-map" /> -->
        <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2033.5478537929318!2d34.773183581455356!3d-0.6809892608488292!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x182b3bf8d3457fc9%3A0x3ac1e6686dd0e022!2sKisii%20Cultural%20Center!5e0!3m2!1sen!2sse!4v1603894178224!5m2!1sen!2sse"
        ></iframe>
        <p class="name">Akinyi Mutoka</p>
        <p class="place">Kissi Cultural Center</p>
        <div class="buttons">
            <button class="accept">Accept</button>
            <button class="decline">Decline</button>
        </div>
        <router-link to="/">
            &#8249; &#8249; Back to the previous page
        </router-link>
    </div>
</template>

<script>
export default {};
</script>

<style lang="sass" scoped>
@use '@/style/base.sass'

.patient-contact
	font-family: base.$font-Roboto
	font-size: 24px

	.name
		font-weight: 700
		margin-bottom: 10px

	.place
		color: base.$orange
		font-size: 18px
		margin-top: 0

iframe
		width: 100%
		height: 300px

.buttons
	display: flex
	flex-direction: column
	align-items: center
	font-size: 24px
	margin-top: 33px

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

a
	font-size: 18px

@media screen and (min-width: base.$breakpoint)
	.name
		font-size: 36px

	.place
		font-size: 24px

	.buttons
		display: flex
		flex-direction: row-reverse
		justify-content: space-evenly
		margin: 30px 0

		.accept, .decline
			margin-bottom: 0
</style>
