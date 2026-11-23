import type { PageServerLoad } from './$types';

export const prerender = true;

export interface ProjectData {
	slug: string;
	name: string;
	description: string | null;
	html_url: string;
	homepage: string | null;
	language: string | null;
	topics: string[];
	license: string | null;
}

const REPOS = ['KyberNull/kybernull.github.io'];

interface GitHubRepoResponse {
	name: string;
	description: string | null;
	html_url: string;
	homepage: string | null;
	language: string | null;
	topics?: string[];
	license?: { spdx_id?: string | null } | null;
}

export const load: PageServerLoad = async ({ fetch }) => {
	const headers: Record<string, string> = {
		Accept: 'application/vnd.github+json',
		'User-Agent': 'kybernull.github.io'
	};

	const token = process.env.GITHUB_TOKEN;
	if (token) {
		headers.Authorization = `Bearer ${token}`;
	}

	const projects: ProjectData[] = await Promise.all(
		REPOS.map(async (slug) => {
			try {
				const res = await fetch(`https://api.github.com/repos/${slug}`, { headers });
				if (!res.ok) {
					throw new Error(`GitHub API returned ${res.status}`);
				}
				const json = (await res.json()) as GitHubRepoResponse;
				const spdx = json.license?.spdx_id;

				return {
					slug,
					name: json.name,
					description: json.description,
					html_url: json.html_url,
					homepage: json.homepage?.trim() || null,
					language: json.language,
					topics: Array.isArray(json.topics) ? json.topics : [],
					license: spdx && spdx !== 'NOASSERTION' ? spdx : null
				};
			} catch {
				const fallbackName = slug.split('/')[1] ?? slug;
				return {
					slug,
					name: fallbackName,
					description: null,
					html_url: `https://github.com/${slug}`,
					homepage: null,
					language: null,
					topics: [],
					license: null
				};
			}
		})
	);

	return { projects };
};
