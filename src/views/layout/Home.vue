<template>
	<div class="home">
		<el-container>
			<el-container class="home-container">
				<!--左侧菜单栏-start-->
				<Nav></Nav>
				<!--左侧菜单栏-end-->
				<!--右侧内容区-start-->
				<el-container class="home-container">
					<!--header头部-->
					<el-header class="home-header" v-bind:style="{height:homeHeaderHeight+'px'}">
						<!--面包屑-start-->
						<bread-crumb></bread-crumb>
						<!--面包屑-end-->
						<el-button type="primary" class="sign-out" v-on:click="signOut">退出</el-button>
					</el-header>
					<!--container-->
					<el-main class="home-main" v-bind:style="{height:homeMainHeight+'px'}">
						<router-view />
					</el-main>
					<!--footer底部-->
					<el-footer class="home-footer" v-bind:style="{height:homeFooterHeight+'px'}">
						Copyright © 2020 Zzmiao. All Rights Reserved
					</el-footer>
				</el-container>
				<!--右侧内容区-end-->
			</el-container>
		</el-container>
	</div>
</template>

<script>
	import Nav from "./Nav.vue"
	import BreadCrumb from "./BreadCrumb.vue"
	export default {
		name: 'Home',
		components: {
			Nav,
			BreadCrumb
		},
		data() {
			return {
				homeHeaderHeight: "60",
				homeMainHeight: '',
				homeFooterHeight: '60'
			}
		},
		methods: {
			signOut: function() {
				sessionStorage.clear();
				this.$router.push("/login");
			}
		},
		beforeCreate: function() {

		},
		created: function() {
			this.$data.homeMainHeight = this.getClientSize().clientHeight - this.$data.homeHeaderHeight - this.$data.homeFooterHeight;
		}

	}
</script>
<style scoped="scoped">
	.home-header {
		background-color: #bccde2;
		position: relative;
	}
	
	.home-aside {
		background-color: #e3eef9;
		overflow-y: scroll;
	}
	
	.home-main {
		overflow-y: scroll;
	}
	
	.home-footer {
		background-color: #999;
		display: flex;
		align-items: center;
		justify-content: center;
	}
	
	.sign-out {
		position: absolute;
		top: 10px;
		right: 10px;
	}
</style>