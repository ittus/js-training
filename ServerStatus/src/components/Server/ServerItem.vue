<template>
    <li @click="chooseServer"
        class="list-group-item">
    	Server #{{ item.id }} - {{ item.status }}
    </li>

</template>

<script>
	import { eventBus } from '../../main.js';
	export default {
		props: ['item'],
		methods: {
			chooseServer() {
				eventBus.chooseServer(this.item);
			}
		}
	}
</script>

<style>

</style>
