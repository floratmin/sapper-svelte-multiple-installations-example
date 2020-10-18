<script>
	// import shop from 'images/shop.jpg';
	import merge from 'lodash/merge';	
	import chunk from 'lodash/chunk';
	let a = {b: {c: 2}};
	let b = {b: {d: 2}};
	let c = JSON.stringify(merge(a,b));
	let d = [1, 2, 3, 4];
	let e = JSON.stringify(chunk(d, 2));
</script>

<style>
	h1, figure, p {
		text-align: center;
		margin: 0 auto;
	}

	h1 {
		font-size: 2.8em;
		text-transform: uppercase;
		font-weight: 700;
		margin: 0 0 0.5em 0;
	}

	figure {
		margin: 0 0 1em 0;
	}

	img {
		width: 100%;
		max-width: 400px;
		margin: 0 0 1em 0;
	}

	p {
		margin: 1em auto;
	}

	@media (min-width: 480px) {
		h1 {
			font-size: 4em;
		}
	}
</style>

<svelte:head>
	<title>Sapper project template</title>
</svelte:head>

<h1>Shop page</h1>
<p>Imported merge and chunk from lodash on this page: {c} {e}</p>
<figure>
	<img alt="Success Kid" src="../shop.jpg">
	<figcaption>Have fun with Sapper!</figcaption>
</figure>

<p><strong>Try editing this file (src/routes/index.svelte) to test live reloading.</strong></p>