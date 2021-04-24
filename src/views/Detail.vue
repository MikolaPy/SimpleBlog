<template>
  <div class="home">
	<div> 
		<h3> {{ post.title}}</h3>
		<p> {{post.body }} </p>
		<hr>
        <h2> Comments: </h2>
        <div v-for="comment in comments":key="comment.id"  > 
            <h2> {{ comment.name}}</h2>
            <p> {{ comment.body }} </p>
            <p>Email: {{ comment.email }} </p>
        </div>
	</div>
  </div>
</template>

<script>
export default {
  name: 'post',
  props: ['id'],
  data() {
    return {
	  post : {},
      comments : {},
    }
  },
  components: {},
  created() {
    this.loadUser()
  },
  methods: {
    async loadUser() {
	  this.post = await fetch(
	  `${this.$store.getters.getServerUrl}/posts/${this.id}`
	  ).then(response => response.json());

      this.comments = await fetch(
	  `${this.$store.getters.getServerUrl}/posts/${this.id}/comments`
	  ).then(response => response.json());

    }
  }
}
</script>
