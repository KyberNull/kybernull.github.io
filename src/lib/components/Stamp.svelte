<script>
	let { src, alt = 'Decorative photograph', caption = 'A LITTLE CURIOSITY' } = $props();
</script>

<figure class="stamp">
	<div class="stamp-content">
		<div class="stamp-frame">
			<img {src} {alt} />
		</div>

		{#if caption}
			<figcaption>{caption}</figcaption>
		{/if}
	</div>
</figure>

<style>
	.stamp {
		--paper: #fffaf0;
		--stamp-ink: #292720;
		--perforation: 5px;
		--spacing: 13px;

		position: relative;
		isolation: isolate;
		width: 190px;
		margin: 0;
		padding: 0;

		transform: rotate(3deg);
		transform-origin: center;

		filter: drop-shadow(0 2px 4px rgb(0 0 0 / 10%));
	}

	/* The stamp's scalloped silhouette */
	.stamp::before {
		content: '';
		position: absolute;
		inset: 0;
		z-index: -1;

		background:
            /* Solid centre */
			linear-gradient(var(--paper), var(--paper)) center / calc(100% - 10px) calc(100% - 10px)
				no-repeat,
			/* Top and bottom perforations */
			radial-gradient(
					circle,
					var(--paper) var(--perforation),
					transparent calc(var(--perforation) + 0.5px)
				)
				top center / var(--spacing) 10px repeat-x,
			radial-gradient(
					circle,
					var(--paper) var(--perforation),
					transparent calc(var(--perforation) + 0.5px)
				)
				bottom center / var(--spacing) 10px repeat-x,
			/* Left and right perforations */
			radial-gradient(
					circle,
					var(--paper) var(--perforation),
					transparent calc(var(--perforation) + 0.5px)
				)
				left center / 10px var(--spacing) repeat-y,
			radial-gradient(
					circle,
					var(--paper) var(--perforation),
					transparent calc(var(--perforation) + 0.5px)
				)
				right center / 10px var(--spacing) repeat-y;
	}

	.stamp-content {
		padding: 12px;
		display: flex;
		flex-direction: column;
		gap: 10px;
	}

	.stamp-frame {
		width: 100%;
		aspect-ratio: 4 / 5;
		overflow: hidden;
	}

	.stamp img {
		display: block;
		width: 100%;
		height: 100%;
		object-fit: cover;
	}

	figcaption {
		color: var(--stamp-ink);
		font-family: var(--font-mono);
		font-size: 0.65rem;
		line-height: 1.4;
		letter-spacing: 0.06em;
		text-align: center;
	}

	/* Dark theme */
	:global([data-theme='dark']) .stamp {
		--paper: #d8d7d0;
		--stamp-ink: #292720;
	}
</style>
