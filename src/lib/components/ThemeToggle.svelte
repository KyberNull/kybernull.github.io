<script lang="ts">
	import { themeStore } from '$lib/stores/theme.svelte';

	function switchTheme(event: MouseEvent) {
		const nextTheme = themeStore.isDark ? 'light' : 'dark';

		const button = event.currentTarget as HTMLElement;
		const rect = button.getBoundingClientRect();

		const x = rect.left + rect.width / 2;
		const y = rect.top + rect.height / 2;

		document.documentElement.style.setProperty('--theme-x', `${x}px`);
		document.documentElement.style.setProperty('--theme-y', `${y}px`);

		if (!document.startViewTransition) {
			themeStore.toggle();
			return;
		}

		document.startViewTransition(() => {
			themeStore.toggle();
		});
	}
</script>

<button
	class="theme-toggle"
	onclick={switchTheme}
	aria-label={`Switch to ${themeStore.isDark ? 'light' : 'dark'} mode`}
	aria-pressed={themeStore.isDark}
>
	{#if themeStore.isDark}
		☀
	{:else}
		☾
	{/if}
</button>

<style>
	.theme-toggle {
		display: grid;
		place-items: center;

		width: 36px;
		height: 36px;
		flex-shrink: 0;

		border: 1px solid var(--border);
		border-radius: 8px;

		background: transparent;
		color: var(--fg);

		font-size: 18px;
		cursor: pointer;

		transition:
			background-color 200ms ease,
			color 200ms ease,
			border-color 200ms ease;
	}

	.theme-toggle:hover {
		background: var(--surface);
	}

	.theme-toggle:hover {
		background: var(--surface);
	}
</style>
