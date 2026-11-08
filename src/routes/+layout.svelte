<script lang="ts">
	import favicon from '$lib/assets/favicon.svg';
	import Navbar from '$lib/components/Navbar.svelte';
	import Footer from '$lib/components/Footer.svelte';
	import { themeStore } from '$lib/stores/theme.svelte';
	import '../app.css';
	import { onMount } from 'svelte';

	let { children } = $props();

	onMount(() => {
		themeStore.init();
	});
</script>

<svelte:head>
	<link rel="icon" href={favicon} />
</svelte:head>

<Navbar />

{@render children()}

<Footer
	github="https://github.com/KyberNull"
	linkedin="https://www.linkedin.com/in/aasish-srivatsa-yenni-2531a7175/"
	twitter="https://x.com/KyberNull"
/>
