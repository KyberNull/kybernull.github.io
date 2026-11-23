<script lang="ts">
	import favicon from '$lib/assets/favicon.png';
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
	<link rel="icon" type="image/png" href={favicon} />
</svelte:head>

<div class="app-shell">
	<Navbar />

	<div class="page-content">
		{@render children()}
	</div>

	<Footer
		github="https://github.com/KyberNull"
		linkedin="https://www.linkedin.com/in/aasish-srivatsa-yenni-2531a7175/"
		twitter="https://x.com/KyberNull"
		mail="mailto:aasish@kybernull.dev"
	/>
</div>

<style>
	.app-shell {
		min-height: 100dvh;
		display: flex;
		flex-direction: column;
	}

	.page-content {
		flex: 1;
	}
</style>
