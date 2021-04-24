<template>

<div class="container">

<div class="post-content">
<h3> {{ post.title }} </h3>

<p class="lead"> {{ post.body }} </p>

<hr class="mb40">
<h4>Comments( {{ comments.length }} )</h4>
<div class="media mb40">
    <div v-for="comment in comments" class="media-body">
        <h5 class="mt-0 font400 clearfix">{{ comment.name }}</h5>
        <p> {{ comment.body }} </p>
    </div>
</div>


<hr class="mb40">
<h4 class="mb40 text-uppercase font500">Post a comment</h4>
<form role="form">
<div class="form-group">
<label>Name</label>
<input type="text" class="form-control">
</div>
<div class="form-group">
<label>Body</label>
<textarea class="form-control" rows="5"></textarea>
</div>
<div class="clearfix float-right">
<button type="button" class="btn btn-primary btn-lg">Create</button>
</div>
</form>
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

