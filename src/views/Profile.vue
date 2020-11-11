<template>

<div class="wrapper">
	<Header class="header"/>
<div class="profile">
	<figure><img class="persona_image"  alt="" src="../assets/persona.png" ></figure>
	<p class="name">Alamini Gaalav</p>
	<div class="details">
		<div class="address">
			<img src="../assets/location.png" alt="" />
			<span> House no 2, Near Mama Grace Shop, 8Q9C+7V Kisii, Kenya</span>
		</div>
		<div class="phone">
			<img src="../assets/call-orange.png" alt="" />
			<span> +254720266878</span>
		</div>
		<div class="email">
			<img src="../assets/email.png" alt="" />
			<span>aalmini@eezer.com</span>
		</div>
	</div>
	<div class="buttons">
        <button class="edit">Edit</button>
        <button class="save">Save</button>
    </div>
</div>
	<Footer class="footer"/>
</div>

</template>

<script>
import Header from "@/components/Header.vue";
import Footer from "@/components/Footer.vue";

export default {
components: {
   Header, Footer
  },
}
</script>

<style lang="sass" scoped>
@use '@/style/base.sass'
.profile
	display: flex
	flex-direction: column
	align-items: center
	height: 100vh
	max-width: base.$breakpoint
	margin: auto

	.persona_image
		margin-top:50px

		@include base.animation(spin 1s ease infinite)

		@keyframes spin 
			30%  
				transform: scale(1.2)
			40%, 60%
				transform: rotate(-20deg) scale(1.2)
			50%
				transform: rotate(20deg) scale(1.2)
			70%
				transform: rotate(0deg) scale(1.2)
			100%
				transform: scale(1)

.name
	
	font-family: base.$font-Roboto
	font-size: 24px
	font-weight: bold
	
.details
	+base.flex-column-align-center
	font-size: 12px
	font-weight: 400
	display: flex
	border: 2px solid base.$orange
	box-shadow: 5px 5px 10px base.$grey
	border-radius: 5px
	margin: 10px auto
	width: 80%
	div
		margin:20px
		display: flex
		align-items: center
		border-bottom: 1px solid base.$black
		width: 80%
		img
			margin: 0px 10px 5px 0px
			@include base.animation(float 6s ease-in-out infinite)
			@keyframes float 
				0% 
				
					transform: translatey(0px)
	
				50% 
				
					transform: translatey(-5px)
	
				100% 
				
					transform: translatey(0px)
				
				

		span
			margin: 0px 10px 5px 0px
			padding-left: 20px

header
	display: none

.buttons
	+base.flex-row-justify-center
	margin:20px
	justify-content: space-evenly
	
	.edit
			+base.common-ghost-button-orange
			padding: 10px
			width: 120px
			font-size: 14px
			margin:10px 20px
	.save
			+base.common-button-orange
			padding: 10px
			border: none
			width: 120px
			font-size: 14px	
			margin:10px 20px

@media  (min-width: base.$breakpoint)

	header
		display: flex

	.name
		font-size: 36px

	.details
		font-size: 18px

	.buttons
		.edit, .save
			font-size: 24px
			width: 244px




</style>