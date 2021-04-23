<template>
  <div class="home">
	<div v-for="post in listPost":key="post.id"  > 
		<a href='#' @click="goTo(post.id)" ><h3>{{ post.first_name }}</h3></a>
		<img :src="post.avatar" class="img-fluid" >
		<p> Email :{{ post.email }} </p>
		
		<hr>
	</div>
	<h3> Page :{{ page }} of {{ totalPage }}   </h3>
  </div>
</template>

<script>
  export default {
    name: 'Home',
    data() {
	return {
	  allData: {},
	  page:1, 
	  totalPage:1, 
	  listPost: {}, 
	}
    },
    components: {},
    created() {
	this.LoadListPost()
    },
    methods: {
      async LoadListPost() {
	this.allData = await fetch(
	  `${this.$store.getters.getServerUrl}/users/`
	).then(response => response.json());
	this.listPost = this.allData.data;
	this.page = this.allData.page
	this.totalPage = this.allData.total_pages
	console.log(this.allData)
     },

     goTo(id) {
	this.$router.push({ name : "user" , params : {id:id}})
     }
    }
  }
</script>
