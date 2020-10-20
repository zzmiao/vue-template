<template>
	<div id="app">
		<router-view/>
	</div>
</template>
<script>
	export default {
		name: 'App',
		components: {

		},
		data() {
			return {

			}
		},
		methods: {
			getClientSize: function() {
				let clientWidth = document.body.clientWidth;
				let clientHeight = document.body.clientHeight;
				return {
					clientWidth,
					clientHeight
				}
			},
		},
		computed: {

		}

	}
</script>
<style>
	@import url("assets/css/index.css");
</style>