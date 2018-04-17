import Vue from 'vue';
import App from '@/App.vue';

function run(App) {
	return new Vue({
		el: '#app',
		render: h => h(App)
	});
}

run(App);
