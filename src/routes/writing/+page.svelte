<script lang="ts">
	import { getAllPosts } from '$lib/writing';

	const posts = getAllPosts();
</script>

<svelte:head>
	<title>Writing | Aasish</title>
	<meta name="description" content="Notes and writing by Aasish." />
</svelte:head>

<main>
	<h1>Writing</h1>

	{#if posts.length === 0}
		<p class="empty">Nothing published yet.</p>
	{:else}
		<ul class="post-list">
			{#each posts as post (post.slug)}
				<li class="post-item">
					<a href={`/writing/${post.slug}`} class="post-link">
						<div class="post-row">
							<h2 class="post-title">{post.metadata.title}</h2>
							{#if post.metadata.date}
								<time class="post-date">{post.metadata.date}</time>
							{/if}
						</div>

						{#if post.metadata.description}
							<p class="post-desc">{post.metadata.description}</p>
						{/if}

						{#if post.metadata.tags && post.metadata.tags.length > 0}
							<p class="post-tags">{post.metadata.tags.join(' · ')}</p>
						{/if}
					</a>
				</li>
			{/each}
		</ul>
	{/if}
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

	.empty {
		font-family: var(--font-mono);
		font-size: 0.85rem;
		color: var(--fg);
		opacity: 0.6;
	}

	.post-list {
		list-style: none;
		margin: 0;
		padding: 0;
		display: flex;
		flex-direction: column;
	}

	.post-item {
		border-top: 1px solid color-mix(in srgb, var(--fg) 12%, transparent);
	}

	.post-item:last-child {
		border-bottom: 1px solid color-mix(in srgb, var(--fg) 12%, transparent);
	}

	.post-link {
		display: flex;
		flex-direction: column;
		gap: 0.35rem;
		padding: 1.25rem 0;
		color: inherit;
		text-decoration: none;
	}

	.post-row {
		display: flex;
		align-items: baseline;
		justify-content: space-between;
		gap: 1rem;
	}

	.post-title {
		margin: 0;
		font-family: var(--font-serif);
		font-size: 1.25rem;
		font-weight: 500;
		color: var(--fg);
		transition: color 150ms ease;
	}

	.post-link:hover .post-title {
		color: var(--accent);
	}

	.post-date {
		font-family: var(--font-mono);
		font-size: 0.75rem;
		color: var(--fg);
		opacity: 0.55;
		white-space: nowrap;
	}

	.post-desc {
		margin: 0;
		font-family: var(--font-sans);
		font-size: 0.9rem;
		line-height: 1.55;
		color: var(--fg);
		opacity: 0.8;
	}

	.post-tags {
		margin: 0.15rem 0 0;
		font-family: var(--font-mono);
		font-size: 0.7rem;
		color: var(--fg);
		opacity: 0.55;
	}
</style>
