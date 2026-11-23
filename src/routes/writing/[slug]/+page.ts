import { error } from '@sveltejs/kit';
import { getAllPosts, getPostBySlug } from '$lib/writing';
import type { EntryGenerator, PageLoad } from './$types';

export const prerender = true;

export const entries: EntryGenerator = () => {
	return getAllPosts().map((post) => ({ slug: post.slug }));
};

export const load: PageLoad = ({ params }) => {
	const post = getPostBySlug(params.slug);
	if (!post) {
		throw error(404, 'Note not found');
	}
	return { post };
};
