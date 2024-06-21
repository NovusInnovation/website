import { error } from '@sveltejs/kit';

export async function load({ params }) {
	const project = params.project;
    console.log('project:', project);

    try {
        const data = (await import(/* @vite-ignore */'../../../lib/projects/' + project + '.md'));
        const metadata = data.metadata;
        console.log('data:', data);
        console.log('metadata:', metadata);

        return {
            content: data.default,
            title: metadata.title
        }
    } catch (e) {
        console.error(e);
        return error(404, 'Not found');
    }
}

export const prerender = true;