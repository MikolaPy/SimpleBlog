<template>
  <div id="app">
    <Nav />
        <div class="container album py-5 bg-light">
            <router-view/>
	    </div>
  </div>
</template>

<style>
</style>
<script>
	import Nav from "./components/Nav";
    // Navbar 
	export default {
		components: {Nav}
	}
</script>
