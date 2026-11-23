import type { Component } from 'svelte';

export interface WritingMetadata {
	title: string;
	date?: string;
	description?: string;
	tags?: string[];
	draft?: boolean;
}

export interface WritingPost {
	slug: string;
	metadata: WritingMetadata;
	component: Component;
}

interface MarkdownModule {
	default: Component;
	metadata?: Partial<WritingMetadata>;
}

const modules = import.meta.glob<MarkdownModule>('/src/lib/content/writing/*.md', {
	eager: true
});

export function getAllPosts(): WritingPost[] {
	const posts: WritingPost[] = [];

	for (const [path, mod] of Object.entries(modules)) {
		const slug = path.split('/').pop()?.replace(/\.md$/, '') ?? '';
		if (!slug) continue;

		const meta = mod.metadata ?? {};
		if (meta.draft) continue;

		posts.push({
			slug,
			metadata: {
				title: meta.title ?? slug,
				date: meta.date,
				description: meta.description,
				tags: Array.isArray(meta.tags) ? meta.tags : []
			},
			component: mod.default
		});
	}

	return posts.sort((a, b) => {
		const da = a.metadata.date ? Date.parse(a.metadata.date) : 0;
		const db = b.metadata.date ? Date.parse(b.metadata.date) : 0;
		return db - da;
	});
}

export function getPostBySlug(slug: string): WritingPost | undefined {
	return getAllPosts().find((p) => p.slug === slug);
}
