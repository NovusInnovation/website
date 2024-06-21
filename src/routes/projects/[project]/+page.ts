import { error } from '@sveltejs/kit';
import { languageTag } from '$lib/paraglide/runtime.js';

export async function load({ params, depends }) {
	const project = params.project;
	depends('paraglide:lang');

	try {
		const lang = languageTag();
		const data = await import(`../../../lib/projects/${project}_${lang}.md`);
		const metadata = data.metadata;

		return {
			content: data.default,
			title: metadata.title
		};
	} catch (e) {
		console.error(e);
		return error(404, 'Not found');
	}
}
