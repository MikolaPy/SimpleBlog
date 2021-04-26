<template>
<div class="container">
    <h3> {{ post.title }} </h3>
    <p class="lead"> {{ post.body }} </p>
    <button type="button" @click="deletePost" class="btn btn-sm btn-outline-secondary">
        Delete</button>
    <button type="button" @click="goToEdit(post.id)" class="btn btn-sm btn-outline-secondary">Edit</button>
    <hr>

    <h4 style="padding:15px">Comments( {{ comments.length }} )</h4>
    <div class="center-block">
        <div style="margin:30px" v-for="comment in comments" >
            <hr>
            <h5 class="mt-0 font400 clearfix"><small>{{ comment.name }}</small></h5>
            <p>{{ comment.body }}</p>
        </div>
    </div>
    <hr class="mb40">
        <form v-show="isVisableForm" @submit.prevent="newComment">
            <div class="form-group">
                <label>Name</label>
                <input type="text" class="form-control" v-model="commentName">
            </div>
            <div class="form-group">
                <label>Body</label>
                <textarea class="form-control" v-model="commentBody" rows="5"></textarea>
            </div>
            <button type="submit" class="btn btn-primary">Create</button>
        </form>
        <button type="button" v-show="!isVisableForm" @click="isVisableForm=!isVisableForm" class="btn btn-primary">New comment</button>
</div>
</template>
<script>
export default {
  name: 'post',
  props: {
    id: Number                              //from "Home post.id" 
  },
  data() {
    return {
	  post: {},
      comments: {},
      commentName:"",
      commentBody:"",
      isVisableForm: false,                 //visible form 
    }
  },
  components: {},
  created() {
    this.loadPost()
  },
  methods: {
    async loadPost() {                      //load post and comments
	  this.post = await fetch(
	  `${this.$store.getters.getServerUrl}/posts/${this.id}`
	  ).then(response => response.json());
      this.comments = await fetch(
	  `${this.$store.getters.getServerUrl}/posts/${this.id}/comments`
	  ).then(response => response.json());

    },
    newComment(){                                           
    /* toDo ?? */
      this.commentName = "";
      this.commentBody = "";
      this.isVisableForm = !this.isVisableForm;
    },
    async deletePost(){                     //delete post and redirect Home
      await fetch(`${this.$store.getters.getServerUrl}/posts/${this.id}`,{
        method: 'DELETE',
      })
      .then( () => this.$router.push({ name : "Home" }));
    },
    goToEdit(id) {
      this.$router.push({ name : "EditPost" , params : {id:id}})
    },
  }
}
</script>

