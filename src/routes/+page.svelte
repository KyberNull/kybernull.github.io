<script lang="ts">
	let name = 'Aasish';
	import About, { metadata } from '$lib/content/about.md';
	import Stamp from '$lib/components/Stamp.svelte';
</script>

<svelte:head>
	<title>{metadata.title} | Aasish</title>
	<meta name="description" content={metadata.description} />
</svelte:head>

<main>
	<div class="intro-layout">
		<div class="intro-body">
			<h1>Hi, I'm {name}.</h1>
			<About />
		</div>
		<div class="intro-stamp">
			<Stamp
				src="/images/bokeh.jpg"
				alt="Abstract orange and green bokeh"
				caption="A LITTLE CURIOSITY"
			/>
			<div class="intro-verse">
				<p lang="sa">
					कर्मण्येवाधिकारस्ते मा फलेषु कदाचन ।
					<br />
					मा कर्मफलहेतुर्भूर्मा ते सङ्गोऽस्त्वकर्मणि ॥
				</p>
				<span>BHAGAVAD GITA · 2.47</span>
			</div>
		</div>
	</div>
</main>

<style>
	main {
		max-width: 720px;
		margin: 100px auto;
		padding: 24px;
	}
	.intro-layout {
		display: grid;
		grid-template-columns: minmax(0, 1fr) 190px;
		gap: 3rem;
		align-items: start;
	}

	.intro-body {
		min-width: 0;
	}

	/* Stack on smaller screens */
	@media (max-width: 700px) {
		.intro-layout {
			grid-template-columns: 1fr;
			gap: 2rem;
		}

		.intro-stamp {
			justify-self: start;
		}
	}

	.intro-stamp {
		display: flex;
		flex-direction: column;
		align-items: center;
		gap: 2rem;
		padding-top: 0.5rem;
	}

	.intro-verse {
		width: 240px;
		text-align: center;
	}

	.intro-verse p {
		font-family: 'Noto Serif Devanagari', serif;
		font-size: 0.95rem;
		line-height: 2;
		color: var(--fg);
		margin: 0;
	}

	.intro-verse span {
		display: block;
		margin-top: 0.75rem;
		font-family: var(--font-mono);
		font-size: 0.6rem;
		letter-spacing: 0.08em;
		color: var(--fg);
		opacity: 0.65;
	}
</style>
