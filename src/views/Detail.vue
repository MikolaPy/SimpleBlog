<template>
<div class="album py-5 bg-light">
<div class="container">

<h3> {{ post.title }} </h3>
<p class="lead"> {{ post.body }} </p>
<button type="button" @click="goTo(post.id)" class="btn btn-sm btn-outline-secondary">
        Delete</button>
<button type="button" class="btn btn-sm btn-outline-secondary">Edit</button>
<hr>

<h4>Comments( {{ comments.length }} )</h4>
<div class="media mb40">
    <div v-for="comment in comments" class="media-body">
        <h5 class="mt-0 font400 clearfix">{{ comment.name }}</h5>
        <p> {{ comment.body }} </p>
    </div>
</div>
<hr class="mb40">
        <form v-show="isVisableForm" role="form">
            <div class="form-group">
                <label>Name</label>
                <input type="text" class="form-control">
            </div>
            <div class="form-group">
                <label>Body</label>
                <textarea class="form-control" rows="5"></textarea>
            </div>
            <button @click="newComment" type="button" class="btn btn-primary">Create</button>
        </form>
        <button type="button" v-show="!isVisableForm" @click="isVisableForm=!isVisableForm" class="btn btn-primary">New comment</button>
    </div>
</div>
</template>
<script>


export default {
  name: 'post',
  props: ['id'],
  data() {
    return {
	  post: {},
      isVisableForm: false,
      comments: {},
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

    },
    newComment(){
      this.isVisableForm = !this.isVisableForm;
    }
  }
}
</script>

