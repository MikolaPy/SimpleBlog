<template>
  <div class="home">
	<div> 
		<h3>{{ user.first_name }} {{ user.last_name }} </h3>
		<img :src="user.avatar" class="img-fluid" >
		<p> Email :{{ user.email }} </p>
		<hr>
	</div>
  </div>
</template>

<script>
  export default {
    name: 'user',
    props: ['id'],
    data() {
	return {
	  user: {},
	}
    },
    components: {},
    created() {
	this.loadUser()
    },
    methods: {
      async loadUser() {
	this.user = await fetch(
	  `${this.$store.getters.getServerUrl}/users/${this.id}`
	).then(response => response.json());
	this.user = this.user.data
	console.log(this.user)
      }
    }
  }
</script>
