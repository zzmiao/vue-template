<template>
	<div id="myChart" :style="{width: '100%', height: '300px'}"></div>
</template>

<script>
	export default {
		name: 'EchartsIndex',
		data() {
			return {

			}
		},
		/**
		 * 实例被挂载后调用
		 */
		mounted: function() {
			this.drawLine();
		},
		methods: {
			/**
			 * 柱状图
			 */
			drawLine() {
				var echarts = require('echarts');
				var myChart = echarts.init(document.getElementById('myChart'));
				myChart.setOption({
					title: {
						text: 'ECharts示例'
					},
					tooltip: {},
					xAxis: {
						data: ['衬衫', '羊毛衫', '雪纺衫', '裤子', '高跟鞋', '袜子']
					},
					yAxis: {},
					series: [{
						name: '销量',
						type: 'bar',
						data: [5, 20, 36, 10, 10, 20]
					}]
				});
			}
		}
	}
</script>

<style>

</style>