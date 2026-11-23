<script lang="ts">
	import 'katex/dist/katex.min.css';
	import type { PageData } from './$types';

	let { data }: { data: PageData } = $props();
	let Content = $derived(data.post.component);
	let meta = $derived(data.post.metadata);
</script>

<svelte:head>
	<title>{meta.title} | Aasish</title>
	{#if meta.description}
		<meta name="description" content={meta.description} />
	{/if}
</svelte:head>

<main>
	<a href="/writing" class="back-link">← Writing</a>

	<article class="note">
		<header class="note-header">
			<h1>{meta.title}</h1>
			{#if meta.date || (meta.tags && meta.tags.length > 0)}
				<div class="note-meta">
					{#if meta.date}
						<time>{meta.date}</time>
					{/if}
					{#if meta.date && meta.tags && meta.tags.length > 0}
						<span aria-hidden="true">·</span>
					{/if}
					{#if meta.tags && meta.tags.length > 0}
						<span>{meta.tags.join(' · ')}</span>
					{/if}
				</div>
			{/if}
		</header>

		<div class="prose">
			<Content />
		</div>
	</article>
</main>

<style>
	main {
		max-width: 720px;
		margin: 80px auto 100px;
		padding: 24px;
	}

	.back-link {
		display: inline-block;
		margin-bottom: 2rem;
		font-family: var(--font-mono);
		font-size: 0.75rem;
		color: var(--fg);
		opacity: 0.65;
		text-decoration: none;
		transition: opacity 150ms ease;
	}

	.back-link:hover {
		opacity: 1;
	}

	.note-header {
		margin-bottom: 2.25rem;
		padding-bottom: 1.25rem;
		border-bottom: 1px solid color-mix(in srgb, var(--fg) 12%, transparent);
	}

	.note-header h1 {
		margin: 0 0 0.5rem;
		font-family: var(--font-serif);
		font-size: 2rem;
		line-height: 1.2;
	}

	.note-meta {
		display: flex;
		flex-wrap: wrap;
		gap: 0.5rem;
		font-family: var(--font-mono);
		font-size: 0.75rem;
		color: var(--fg);
		opacity: 0.6;
	}

	/* Obsidian-inspired Markdown prose adapted to site root CSS */
	.prose :global(h2) {
		font-family: var(--font-serif);
		font-size: 1.45rem;
		margin: 2.25rem 0 0.75rem;
		padding-bottom: 0.3rem;
		border-bottom: 1px solid color-mix(in srgb, var(--fg) 10%, transparent);
	}

	.prose :global(h3) {
		font-family: var(--font-sans);
		font-size: 1.15rem;
		margin: 1.75rem 0 0.5rem;
	}

	.prose :global(p) {
		margin: 0 0 1.1rem;
		line-height: 1.7;
	}

	.prose :global(ul),
	.prose :global(ol) {
		margin: 0 0 1.2rem;
		padding-left: 1.5rem;
	}

	.prose :global(li) {
		margin-bottom: 0.35rem;
	}

	.prose :global(blockquote) {
		margin: 1.5rem 0;
		padding: 0.75rem 1.25rem;
		border-left: 3px solid var(--accent);
		background: color-mix(in srgb, var(--fg) 4%, transparent);
		border-radius: 0 3px 3px 0;
	}

	.prose :global(blockquote p:last-child) {
		margin-bottom: 0;
	}

	.prose :global(blockquote[data-callout]) {
		margin: 1.5rem 0;
		padding: 0.85rem 1.25rem;
		border-left: 3px solid var(--accent);
		background: color-mix(in srgb, var(--fg) 4%, transparent);
		border-radius: 0 3px 3px 0;
	}

	.prose :global([data-callout-title]) {
		font-family: var(--font-mono);
		font-size: 0.8rem;
		font-weight: 500;
		text-transform: uppercase;
		letter-spacing: 0.04em;
		margin-bottom: 0.4rem;
		color: var(--fg);
	}

	.prose :global(code) {
		font-family: var(--font-mono);
		font-size: 0.85em;
		padding: 0.15em 0.35em;
		border-radius: 3px;
		background: color-mix(in srgb, var(--fg) 7%, transparent);
	}

	.prose :global(pre) {
		margin: 1.5rem 0;
		padding: 1rem 1.25rem;
		overflow-x: auto;
		border: 1px solid color-mix(in srgb, var(--fg) 12%, transparent);
		border-radius: 3px;
		background: color-mix(in srgb, var(--fg) 5%, transparent);
	}

	.prose :global(pre code) {
		padding: 0;
		background: none;
		font-size: 0.85rem;
		line-height: 1.6;
	}

	.prose :global(hr) {
		border: none;
		border-top: 1px solid color-mix(in srgb, var(--fg) 14%, transparent);
		margin: 2rem 0;
	}

	.prose :global(table) {
		width: 100%;
		border-collapse: collapse;
		margin: 1.5rem 0;
		font-size: 0.9rem;
	}

	.prose :global(th),
	.prose :global(td) {
		text-align: left;
		padding: 0.55rem 0.75rem;
		border-bottom: 1px solid color-mix(in srgb, var(--fg) 12%, transparent);
	}

	.prose :global(th) {
		font-family: var(--font-mono);
		font-size: 0.75rem;
		text-transform: uppercase;
		letter-spacing: 0.04em;
		opacity: 0.7;
	}

	.prose :global(img) {
		max-width: 100%;
		height: auto;
		border-radius: 3px;
		margin: 1.25rem 0;
	}

	.prose :global(.mermaid-diagram) {
		margin: 1.75rem 0;
		padding: 1rem;
		overflow-x: auto;
		display: flex;
		justify-content: center;
		border: 1px solid color-mix(in srgb, var(--fg) 12%, transparent);
		border-radius: 3px;
		background: color-mix(in srgb, var(--fg) 3%, transparent);
	}

	.prose :global(.mermaid-diagram svg) {
		max-width: 100%;
		height: auto;
	}

	.prose :global(.mermaid-diagram .pele) {
		--pele-bg: transparent;
		--pele-fg: var(--fg);
		--pele-muted: color-mix(in srgb, var(--fg) 65%, transparent);
		--pele-line: color-mix(in srgb, var(--fg) 70%, transparent);
		--pele-surface: color-mix(in srgb, var(--bg) 92%, var(--fg));
		--pele-surface-alt: color-mix(in srgb, var(--bg) 96%, var(--fg));
		--pele-border: color-mix(in srgb, var(--fg) 22%, transparent);
		--pele-accent: var(--accent);
	}

	.prose :global(.katex-display) {
		overflow-x: auto;
		overflow-y: hidden;
		padding: 0.25rem 0;
	}
</style>
