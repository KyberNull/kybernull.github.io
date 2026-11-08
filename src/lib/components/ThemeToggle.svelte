<script lang="ts">
    import { themeStore } from '$lib/stores/theme.svelte';
</script>

<button
    class="theme-toggle"
    onclick={themeStore.toggle}
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
        position: fixed;
        right: 24px;
        bottom: 24px;

        display: grid;
        place-items: center;

        width: 42px;
        height: 42px;

        border: 1px solid var(--border);
        border-radius: 8px;

        background: var(--bg);
        color: var(--fg);

        font-size: 20px;
        cursor: pointer;

        transition:
            background-color 200ms ease,
            color 200ms ease,
            border-color 200ms ease;
    }

    .theme-toggle:hover {
        background: var(--surface);
    }
</style>