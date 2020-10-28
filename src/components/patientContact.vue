<template>
  <div class="patient-contact">
<img src="@/assets/map.png" alt="patient-map">
<p class="name">Akinyi Mutoka</p>
<p class="place">Kissi Cultura Center</p>
<button class="accept">Accept</button>
<button class="decline">Decline</button>
<router-link to="/">
 Back to the previous page
</router-link>
  </div>
</template>

<script>
export default {

}
</script>

<style lang="sass" scoped>
@import '@/style/base.sass'

.patient-contact
	font-family: $font-Roboto

.accept
	+common-button-orange
	font-size: 24px
	padding: 20px
	border: none
	width: 400px

.decline
	+common-ghost-button-red
	font-size: 24px
	padding: 20px
	width: 400px







</style>

