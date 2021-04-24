<template>
  <div class="home">
    <div class="album py-5 bg-light">
    <input v-model="search" class="form-control" placeholder="Filter by title body">
    <h1 class="text-center">ALL POSTS</h1>
        <div class="container" v-cloak>
            <div class="row">
                <div class="col-md-4" v-for="post in displayedPosts">
                    <div class="card mb-4 box-shadow post-cards">
                        <div class="card-body">
                            <h5 class="capitalize">{{post.title}}</h5>

                            <p class="card-text"> {{post.body}} </p>
                            <div class="d-flex justify-content-between align-items-center">
                                <div class="btn-group">
                                    <button type="button" @click="goTo(post.id)" class="btn btn-sm btn-outline-secondary">View</button>
                                    <button type="button" class="btn btn-sm btn-outline-secondary">Edit</button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div class="clearfix btn-group col-md-2 offset-md-5">
                <button type="button" class="btn btn-sm btn-outline-secondary" v-if="page != 1" @click="page--"> << </button>
                <button type="button" class="btn btn-sm btn-outline-secondary" v-for="pageNumber in pages.slice(page-1, page+5)"
                @click="page = pageNumber"> {{pageNumber}} </button>
                <button type="button" @click="page++" v-if="page < pages.length" class="btn btn-sm btn-outline-secondary"> >> </button>
            </div>
        </div>
    </div>
  </div>
</template>
<script>
  export default {
    name: 'Home',
    data() {
      return {
	    listPost:[],
        pages : [],
        page : 1,
        perPage : 12,
        search : "",
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
      setPages () {
        let numberOfPages = Math.ceil(this.listPost.length / this.perPage);
        for (let index = 1;index <= numberOfPages;index++) {
          this.pages.push(index);
        }
      },
      paginate(posts){
        let page = this.page;
        let perPage = this.perPage;
        let from = (page * perPage) - perPage;
        let to =  (page * perPage) ;
        return posts.slice(from,to)
      },
    },
    watch: {
      listPost(){
        this.setPages();
      }
    },
    computed: {
      displayedPosts(){
        let search = this.search.toLowerCase();
        let filtered_post = this.listPost.filter(obj =>
        (obj.title.toLowerCase().indexOf(search) != -1) ||
        (obj.body.toLowerCase().indexOf(search) != -1))
        return this.paginate(filtered_post)
      }
    }
  }

</script>
