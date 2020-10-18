<script>
	import merge from 'lodash/merge';
	import concat from 'lodash/concat';
	// import successkid from 'images/successkid.jpg';
	let a = {b: {c: 1}};
	let b = {b: {d: 1}};
	let c = JSON.stringify(merge(a, b));
	let e = JSON.stringify(concat(4, 5, 6, [7]));
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

<h1>Main page</h1>

<p>Imported merge and concat from lodash on this page: {c} {e}</p>
<figure>
	<img alt="Success Kid" src="successkid.jpg">
	<figcaption>Have fun with Sapper!</figcaption>
</figure>


<p><strong>Try editing this file (src/routes/index.svelte) to test live reloading.</strong></p>