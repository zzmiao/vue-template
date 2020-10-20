<template>
	<el-breadcrumb separator-class="el-icon-arrow-right" class="breadCrumb">
		<el-breadcrumb-item v-for="(v,i) in lists" v-bind:key="i">
			<router-link v-bind:to="v.path">{{v.meta.title}}</router-link>
		</el-breadcrumb-item>
	</el-breadcrumb>
</template>

<script>
	export default {
		name: 'BreadCrumb',
		data() {
			return {
				lists: ""
			}
		},
		created: function() {
			this.$data.lists = this.$route.matched;
		},
		watch: {
			$route(to, from) {
				/**
				 * 监听路由变化时
				 */
				this.$data.lists = to.matched;
			}
		}
	}
</script>

<style scoped="scoped">
	.breadCrumb {
		width: 50%;
		height: 60px;
		display: flex;
		align-items: center;
	}
</style>

<!--
	created 在实例创建完成后被立即调用。
-->