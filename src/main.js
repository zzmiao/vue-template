import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'

import ElementUI from 'element-ui';
import 'element-ui/lib/theme-chalk/index.css';
Vue.use(ElementUI);

import axios from "axios";

Vue.config.productionTip = false;

axios.defaults.baseURL = "http://172.17.0.121:8080/";
Vue.prototype.$http = axios;

/**
 * 获取屏幕的可是宽高
 */
Vue.prototype.getClientSize = function() {
	let clientWidth = document.body.clientWidth;
	let clientHeight = document.body.clientHeight;
	return {
		clientWidth,
		clientHeight
	}
}

new Vue({
	router,
	store,
	render: h => h(App)
}).$mount('#app')

/**
 * render 方法 自带形参(createElement) 参数createElement是一个方法
 * render:function(createElement){
 * 	return createElement(App);
 * }
 * h是createElement方法的缩写
 * 
 * 把加载的内容通过$mount渲染在index.html这个页面中id为#app的地方
 */