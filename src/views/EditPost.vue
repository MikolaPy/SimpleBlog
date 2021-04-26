<template>
<div class="container">
        <form @submit.prevent="EditPost">
            <div class="form-group">
                <label>Title</label>
                <input type="text" id="title" v-model="title" class="form-control">
            </div>
            <div class="form-group">
                <label>Body</label>
                <textarea class="form-control" v-model="body" rows="15"></textarea>
            </div>
            <div class="d-grid gap-2 col-4 mx-auto" >
                <button type="submit" class="btn btn-primary">Create Post</button>
            </div>
        </form>
</div>
</template>
<script>

export default {
  name: 'post',
  props: {
    id: Number                      //simple validation
  },
  data() {
  // title and body related to the form
  // user default 
    return {
	  title:"",
      body:"",
      user:1,
	  post: {},
    }
  },
  created() {
    this.loadPost()
  },
  methods: {
    async loadPost() {                                  //load post and bind with form
	  this.post = await fetch(                          
	  `${this.$store.getters.getServerUrl}/posts/${this.id}`
	  ).then(response => response.json());
      this.title = this.post.title;
      this.body = this.post.body;
    },
    async EditPost(){                                   // edit and redirect
      await fetch(`${this.$store.getters.getServerUrl}/posts/${this.id}`, {
        method: 'PUT',
        body: JSON.stringify({
          id: this.id,
          title: this.title ,
          body: this.body,
          userId: this.user ,
        }),
        headers: {
          'Content-type': 'application/json; charset=UTF-8',
        },
      })
      .then( () => this.$router.push({ name : "Home" }));
    }
  }
}
</script>

