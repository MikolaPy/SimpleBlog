<template>
<div class="container">
        <form @submit.prevent="CreatePost">
            <div class="form-group">
                <label>Title</label>
                <input type="text" id="title" v-model="title" class="form-control">
            </div>
            <div class="form-group">
                <label>Body</label>
                <textarea class="form-control" rows="15"></textarea>
            </div>
            <div class="d-grid gap-2 col-4 mx-auto" >
                <button type="submit" id="body" v-model="body" class="btn btn-primary">Create Post</button>
            </div>
        </form>
</div>
</template>
<script>


export default {
  name: 'CreatePost',
  data() {
    return {
	  title:"",
      body:"",
      user:1,
    }
  },
  methods: {
    async loadUser() {
	  this.post = await fetch(
	  `${this.$store.getters.getServerUrl}/posts/${this.id}`
	  ).then(response => response.json());
    },
    CreatePost(){
      fetch('https://jsonplaceholder.typicode.com/posts', {
        method: 'POST',
        body: JSON.stringify({
          title: this.title ,
          body: this.body,
          userId: this.user ,
        }),
        headers: {
          'Content-type': 'application/json; charset=UTF-8',
        },
      })
      .then((response) => response.json())
      .then((json) => console.log(json));
    }
  },
}


</script>

