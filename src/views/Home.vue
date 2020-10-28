<template>
  <div class="home">
    <patientContact/>
  </div>
</template>

<script>
// @ is an alias to /src
import patientContact from '@/components/patientContact.vue'

export default {
  name: 'Home',
  components: {
	patientContact
  }
}
</script>
