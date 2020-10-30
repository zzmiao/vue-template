import Vue from 'vue'
import VueRouter from 'vue-router'

Vue.use(VueRouter)

const routes = [{
		path: '/',
		redirect: '/login'
	}, {
		path: '/login',
		name: 'login',
		meta: {
			title: "登录"
		},
		component: () =>
			import('../views/Login.vue')
	},
	{
		path: '/home',
		name: 'home',
		redirect: '/index',
		meta: {
			title: "首页"
		},
		component: () =>
			import('../views/layout/Home.vue'),
		children: [{
			path: '/index',
			name: 'index',
			meta: {
				title: "首页"
			},
			component: () =>
				import('../views/layout/index/Index.vue')
		}, {
			path: '/echarts',
			name: 'echarts',
			meta: {
				title: "数据统计"
			},
			component: () =>
				import('../views/layout/echarts/index.vue')
		}, {
			path: '/table',
			name: 'table',
			meta: {
				title: "表格"
			},
			component: () =>
				import('../views/layout/table/index.vue')
		}, {
			path: '/example',
			name: 'example',
			meta: {
				title: "案例"
			},
			component: () =>
				import('../views/layout/example/index.vue'),
			children: [{
				path: '/example/example1',
				name: 'example1',
				meta: {
					title: "案例列表"
				},
				component: () =>
					import('../views/layout/example/Example1.vue')
			}]
		}]
	}
]

const router = new VueRouter({
	routes
})

/*
 * 路由拦截
 */
router.beforeEach((to, from, next) => {
	if(!sessionStorage.getItem("username")) {
		if(to.path != "/login") {
			next("./login");
		}
	}
	next();
})

export default router
/**
 * redirect“重定向”的意思是，当用户访问 /a时，URL 将会被替换成 /b，然后匹配路由为 /b，
 */