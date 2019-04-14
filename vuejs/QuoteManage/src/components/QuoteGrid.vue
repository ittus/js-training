<template>
	<div class="row">
		<app-quote v-for="(quote, idx) in quotes" @click.native="deleteQuote(idx)">
			{{ quote }}
		</app-quote>
	</div>
</template>

<script>
	import Quote from './Quote.vue';
	export default {
		props: ['quotes'],
		components: {
			appQuote: Quote
		},
		methods: {
			deleteQuote(index) {
				this.$emit('quoteDelete', index);
			}
		}
	}
</script>

<style></style>