<template>
    <div class="col-xs-12 col-sm-6">
        <ul class="list-group">
            <server-item v-for="server in servers" :item="server"></server-item>
        </ul>
    </div>
</template>

<script>
	import ServerItem from './ServerItem.vue';
	import { eventBus } from '../../main.js';
	export default {
		data: function() {
			return {
				servers: [
					{id: 1, status: "Normal"},
					{id: 2, status: "Critical"},
					{id: 3, status: "Starting"},
					{id: 4, status: "Shutdown"},
					{id: 5, status: "Normal"},
				]
			}
		},
		components: {
			'server-item': ServerItem
		},
		created() {
			eventBus.$on('UPDATE_SERVER', (server_id) => {
				for (var i = 0; i < this.servers.length; i++) {
					if (server_id == this.servers[i].id) {
						this.servers[i].status = 'Normal';
					}
				}
			});
		}
	}
</script>

<style>

</style>
