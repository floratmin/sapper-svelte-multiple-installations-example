<script lang="ts">
	import Nav from '../../components/Nav.svelte';
	import Button from '../../components/Button.svelte';

	export let segment: string;
</script>

<style>
	main {
		position: relative;
		max-width: 56em;
		background-color: white;
		padding: 2em;
		margin: 0 auto;
		box-sizing: border-box;
	}
</style>

<Nav {segment}/>

<main>
	<Button href="/" label="Home" rel="external"/>
	<Button href="../app" label="App" rel="external"/>
	<slot></slot>
</main>