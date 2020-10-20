<template>
	<el-aside class="home-aside" width="200px" v-bind:style="{height:homeAsideHeight+'px'}">
		<el-row class="tac">
			<el-col :span="24">
				<el-menu v-bind:default-active="$route.path" exact class="el-menu-vertical-demo" @open="handleOpen" @close="handleClose" router>
					<NavItem v-for="v in items" v-bind:key="v.url" v-bind:item="v" v-bind:basePath="v.url"></NavItem>
				</el-menu>
			</el-col>
		</el-row>
	</el-aside>
</template>

<script>
	import NavItem from "./NavItem.vue"
	export default {
		name: "Nav",
		components: {
			NavItem
		},
		data() {
			return {
				homeAsideHeight: '',
				items: [{
					name: "首页",
					url: "/index",
					icon: 'el-icon-s-home'
				}, {
					name: "数据统计",
					url: "/echarts",
					icon: 'el-icon-s-data'
				}, {
					name: '案例',
					url: "/example",
					icon: "el-icon-menu",
					childs: [{
						name: '案例列表',
						url: "/example/example1",
						icon: "el-icon-menu",
					}]
				}]
			}
		},
		methods: {
			handleOpen(key, keyPath) {
				console.log(key, keyPath);
			},
			handleClose(key, keyPath) {
				console.log(key, keyPath);
			}
		},
		created: function() {
			this.$data.homeAsideHeight = this.getClientSize().clientHeight;
		}
	}
</script>

<style scoped="scoped">

</style>

<!--
	router	是否使用 vue-router 的模式，启用该模式会在激活导航时以 index 作为 path 进行路由跳转
-->