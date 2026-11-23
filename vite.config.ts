import { escapeSvelte, mdsvex } from 'mdsvex';
import { render as renderPele } from 'pele';
import remarkGfm from 'remark-gfm';
import remarkMath from 'remark-math';
import remarkObsidianCallout from 'remark-obsidian-callout';
import rehypeKatexSvelte from 'rehype-katex-svelte';
import adapter from '@sveltejs/adapter-static';
import { sveltekit } from '@sveltejs/kit/vite';
import { defineConfig } from 'vite';

function escapeHtml(str: string): string {
	return str
		.replace(/&/g, '&amp;')
		.replace(/</g, '&lt;')
		.replace(/>/g, '&gt;')
		.replace(/"/g, '&quot;');
}

export default defineConfig({
	plugins: [
		sveltekit({
			compilerOptions: {
				// Force runes mode for the project, except for libraries. Can be removed in svelte 6.
				runes: ({ filename }) =>
					filename.split(/[/\\]/).includes('node_modules') ? undefined : true
			},
			adapter: adapter(),
			prerender: {
				handleUnseenRoutes: 'ignore'
			},
			preprocess: [
				mdsvex({
					extensions: ['.svx', '.md'],
					remarkPlugins: [remarkGfm, remarkMath, remarkObsidianCallout],
					rehypePlugins: [rehypeKatexSvelte as never],
					highlight: {
						highlighter(code, lang) {
							if (lang === 'mermaid') {
								const { svg } = renderPele(code);
								return `<div class="mermaid-diagram">${escapeSvelte(svg)}</div>`;
							}
							const classAttr = lang ? ` class="language-${escapeHtml(lang)}"` : '';
							return `<pre${classAttr}><code>${escapeSvelte(escapeHtml(code))}</code></pre>`;
						}
					}
				})
			],
			extensions: ['.svelte', '.svx', '.md']
		})
	]
});
