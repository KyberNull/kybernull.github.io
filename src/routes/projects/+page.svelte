<script lang="ts">
	import ProjectCard from '$lib/components/ProjectCard.svelte';
	import type { PageData } from './$types';

	let { data }: { data: PageData } = $props();
</script>

<svelte:head>
	<title>Projects | Aasish</title>
	<meta name="description" content="Projects by Aasish." />
</svelte:head>

<main>
	<h1>Projects</h1>

	<div class="projects-list">
		{#each data.projects as project (project.slug)}
			<ProjectCard {project} />
		{/each}
	</div>
</main>

<style>
	main {
		max-width: 720px;
		margin: 100px auto;
		padding: 24px;
	}

	h1 {
		margin: 0 0 2rem;
	}

	.projects-list {
		display: flex;
		flex-direction: column;
		gap: 1.5rem;
	}
</style>
