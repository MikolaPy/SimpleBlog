<template>
  <div class="home">
	<div v-for="post in listPost":key="post.id"  > 
		<a href='#' @click="goTo(post.id)" ><h3>{{ post.title }}</h3></a>
        <p> {{ post.body }} 
		<hr>
	</div>
  </div>
</template>

<script>
  export default {
    name: 'Home',
    data() {
      return {
	    listPost: {},
	  };
    },
    components: {},
    created() {
	this.LoadListPost()
    },
    methods: {
      async LoadListPost() {
        this.listPost = await fetch(
	    `${this.$store.getters.getServerUrl}/posts/`
	    ).then(response => response.json());
      },

      goTo(id) {
	    this.$router.push({ name : "user" , params : {id:id}})
     },
     
    }
  }
</script>
