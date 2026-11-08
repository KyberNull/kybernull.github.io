<script lang="ts">
	import ThemeToggle from './ThemeToggle.svelte';
</script>

<header class="site-header">
	<nav class="navbar" aria-label="Main navigation">
		<div class="nav-links">
			<a href="/" class="nav-link">Home</a>
			<a href="/projects" class="nav-link">Projects</a>
			<a href="/notes" class="nav-link">Notes</a>
			<ThemeToggle />
		</div>
	</nav>
</header>

<style>
	.site-header {
		width: 100%;
		border-bottom: 1px solid var(--border);
	}

	.navbar {
		width: min(100% - 3rem, 760px);
		min-height: 68px;
		margin-inline: auto;

		display: flex;
		align-items: center;
		justify-content: flex-end;
	}

	.nav-links {
		display: flex;
		align-items: center;
		gap: 1.75rem;
	}

	.nav-link {
		color: var(--fg);
		font-family: var(--font-sans);
		font-size: 0.875rem;
		text-decoration: none;
		opacity: 0.7;
		transition:
			color 150ms ease,
			opacity 150ms ease;
	}

	.nav-link:hover {
		color: var(--accent);
		opacity: 1;
	}

	@media (max-width: 480px) {
		.navbar {
			width: calc(100% - 2rem);
			min-height: 60px;
			gap: 1rem;
		}

		.nav-links {
			gap: 1rem;
		}

		.nav-link {
			font-size: 0.8rem;
		}
	}
</style>
