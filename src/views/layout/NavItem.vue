<template>
	<div>
		<!--无子级-->
		<el-menu-item v-bind:index="basePath" v-if="!item.childs">
			<i v-bind:class="item.icon"></i>
			<span slot="title">{{item.name}}</span>
		</el-menu-item>
		<!--有子级-->
		<el-submenu v-bind:index="basePath" v-else>
			<template slot="title">
				<i v-bind:class="item.icon"></i>
				<span>{{item.name}}</span>
			</template>
			<NavItem v-for="child in item.childs" v-bind:key="child.url" v-bind:item="child" v-bind:basePath="child.url"></NavItem>
		</el-submenu>
	</div>
</template>

<script>
	export default {
		name: "NavItem",
		data() {
			return {

			}
		},
		props: ["item", "basePath"]
	}
</script>

<style>

</style>
<!--
	props 可以是数组或对象，用于接收来自父组件的数据
-->