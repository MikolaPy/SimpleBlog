<template>
  <div id="app">
    <Nav />
	<main>
	    <div class="container">
		<router-view/>
	    </div>
	</main>
  </div>
</template>

<style>
</style>
<script>
	import Nav from "./components/Nav";
	export default {
		components: {Nav}
	}
</script>
