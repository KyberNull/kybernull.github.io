<script lang="ts">
	let {
		github = '',
		linkedin = '',
		email = ''
	}: {
		github?: string;
		linkedin?: string;
		email?: string;
	} = $props();
</script>

<footer class="site-footer">
	<div class="footer-content">
		<div class="social-links">
			{#if github}
				<a href={github} target="_blank" rel="noopener noreferrer">
					GitHub <span>↗</span>
				</a>
			{/if}

			{#if linkedin}
				<a href={linkedin} target="_blank" rel="noopener noreferrer">
					LinkedIn <span>↗</span>
				</a>
			{/if}

			{#if email}
				<a href={`mailto:${email}`}>
					Email <span>↗</span>
				</a>
			{/if}
		</div>

		<span class="copyright">
			© {new Date().getFullYear()} Aasish
		</span>
	</div>
</footer>

<style>
	.site-footer {
		width: 100%;
		margin-top: 6rem;
		border-top: 1px solid var(--border);
	}

	.footer-content {
		width: min(100% - 3rem, 760px);
		min-height: 76px;
		margin-inline: auto;

		display: flex;
		align-items: center;
		justify-content: space-between;
		gap: 1.5rem;
	}

	.social-links {
		display: flex;
		align-items: center;
		flex-wrap: wrap;
		gap: 1.5rem;
	}

	.social-links a {
		color: var(--fg);
		font-family: var(--font-mono);
		font-size: 0.7rem;
		text-decoration: none;
		opacity: 0.65;
		transition:
			color 150ms ease,
			opacity 150ms ease;
	}

	.social-links a:hover {
		color: var(--accent);
		opacity: 1;
	}

	.social-links a span {
		font-size: 0.65rem;
	}

	.copyright {
		color: var(--fg);
		font-family: var(--font-mono);
		font-size: 0.65rem;
		opacity: 0.5;
		white-space: nowrap;
	}

	@media (max-width: 480px) {
		.footer-content {
			width: calc(100% - 2rem);
			padding-block: 1.25rem;
			flex-direction: column;
			align-items: flex-start;
			gap: 1rem;
		}
	}
</style>
