import Vue from 'vue'
import App from './App.vue'

export const eventBus = new Vue({
	methods: {
		chooseServer(server) {
			this.$emit('CHOOSE_SERVER', server);
		},
		updateServer(server_id) {
			this.$emit('UPDATE_SERVER', server_id);
		}
	}
});
new Vue({
  el: '#app',
  render: h => h(App)
})
