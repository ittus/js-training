<template>
    <div class="container">
    	<app-header :quoteCount="quotes.length" :maxQuotes="maxQuotes"></app-header>
    	<app-new-quote @quoteAdd="newQuote"></app-new-quote>
    	<app-quote-grid :quotes="quotes" @quoteDelete="deleteQuote"></app-quote-grid>
    	<div class="row">
    		<div class="col-sm-12 text-center">
    			<div class="alert alert-info">Info: Click on a quote to delete it!</div>
    		</div>
    	</div>
    </div>
</template>

<script>
	import QuoteGrid from './components/QuoteGrid.vue';
	import NewQuote from './components/NewQuote.vue';
	import Header from './components/Header.vue';
    export default {
        data: function() {
        	return {
        		maxQuotes: 10,
        		quotes: [
        			'Just a quote to see st'
        		]
        	}
        },
        components: {
        	'app-quote-grid': QuoteGrid,
        	'app-new-quote': NewQuote,
        	'app-header': Header
        },
        methods: {
        	newQuote(quote) {
        		if (this.quotes.length > this.maxQuotes) {
        			return alert("Please delete quote first!");
        		}
        		this.quotes.push(quote);
        	}, 
        	deleteQuote(idx) {
        		this.quotes.splice(idx, 1);
        	}
        }
    }
</script>

<style>
</style>
