<script lang="ts">
	import type { ProjectData } from '../../routes/projects/+page.server';

	let { project }: { project: ProjectData } = $props();

	let tags = $derived.by(() => {
		const items: string[] = [];
		if (project.language) items.push(project.language);
		for (const topic of project.topics) {
			if (topic.toLowerCase() !== project.language?.toLowerCase()) {
				items.push(topic);
			}
		}
		if (project.license) items.push(project.license);
		return items;
	});
</script>

<article class="project-card">
	<div class="card-body">
		<header class="card-header">
			<h2 class="repo-name">{project.name}</h2>
			{#if tags.length > 0}
				<p class="repo-meta">{tags.join(' · ')}</p>
			{/if}
		</header>

		{#if project.description}
			<p class="repo-desc">{project.description}</p>
		{/if}

		<footer class="card-links">
			{#if project.homepage}
				<a href={project.homepage} target="_blank" rel="noopener noreferrer">Website</a>
			{/if}
			<a href={project.html_url} target="_blank" rel="noopener noreferrer">GitHub</a>
		</footer>
	</div>
</article>

<style>
	.project-card {
		position: relative;
		background: #fffaf0;
		border: 1px solid color-mix(in srgb, var(--fg) 12%, transparent);
		border-radius: 3px;
		box-shadow: 0 2px 6px rgb(0 0 0 / 6%);
		transition: border-color 180ms ease;
	}

	:global([data-theme='dark']) .project-card {
		background: #20252c;
		border-color: color-mix(in srgb, var(--fg) 12%, transparent);
		box-shadow: 0 4px 14px rgb(0 0 0 / 28%);
	}

	.project-card:hover {
		border-color: var(--accent);
	}

	.card-body {
		display: flex;
		flex-direction: column;
		gap: 0.75rem;
		padding: 1.5rem 1.75rem;
	}

	.card-header {
		display: flex;
		flex-direction: column;
		gap: 0.3rem;
	}

	.repo-name {
		margin: 0;
		font-family: var(--font-serif);
		font-size: 1.4rem;
		font-weight: 500;
		line-height: 1.25;
		color: var(--fg);
	}

	.repo-meta {
		margin: 0;
		font-family: var(--font-mono);
		font-size: 0.75rem;
		color: var(--fg);
		opacity: 0.6;
	}

	.repo-desc {
		margin: 0;
		font-family: var(--font-sans);
		font-size: 0.95rem;
		line-height: 1.6;
		color: var(--fg);
		opacity: 0.85;
	}

	.card-links {
		margin-top: 0.25rem;
		display: flex;
		align-items: center;
		gap: 1.25rem;
	}

	.card-links a {
		font-family: var(--font-mono);
		font-size: 0.8rem;
		color: var(--fg);
		text-decoration: none;
		border-bottom: 1px solid color-mix(in srgb, var(--fg) 30%, transparent);
		padding-bottom: 1px;
		transition: border-color 150ms ease;
	}

	.card-links a:hover {
		border-bottom-color: var(--accent);
	}
</style>
