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

	.intro-stamp {
		padding-top: 0.5rem;
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
</style>
