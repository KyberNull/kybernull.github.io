<script lang="ts">
	let name = 'Aasish';
	import About, { metadata } from '$lib/content/about.md';
</script>

<svelte:head>
	<title>{metadata.title} | Aasish</title>
	<meta name="description" content={metadata.description} />
</svelte:head>

<main>
	<h1>Hi, I'm {name}.</h1>
	<About />
</main>

<style>
	main {
		max-width: 720px;
		margin: 100px auto;
		padding: 24px;
	}
</style>
