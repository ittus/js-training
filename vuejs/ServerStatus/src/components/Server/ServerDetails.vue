<template>
    <div class="col-xs-12 col-sm-6">
        <p v-if="server == null">Server Details are currently not updated</p>
        <p v-else>Server #{{ server.id }} - {{ server.status }}</p>
        <hr>
        <button @click="changeStatus" :style="{disabled: (server == null)}">Change to normal</button>
    </div>

</template>

<script>
	import { eventBus } from '../../main.js';
	export default {
		data: function() {
			return {
				server: null
			};
		},
		created() {
			eventBus.$on('CHOOSE_SERVER', (server) => {
				this.server = server
			});
		}, 
		methods: {
			changeStatus() {
				if (this.server != null) {
					this.server.status = 'Normal';
					eventBus.updateServer(this.server.id);
				}
			}
		}
	}
</script>

<style>

</style>
