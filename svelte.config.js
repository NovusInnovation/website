import adapter from '@sveltejs/adapter-cloudflare';
import { vitePreprocess } from '@sveltejs/vite-plugin-svelte';
import { mdsvex } from 'mdsvex';

/** @type {import('@sveltejs/kit').Config} */
const config = {
	// Consult https://kit.svelte.dev/docs/integrations#preprocessors
	// for more information about preprocessors
	preprocess: [
		vitePreprocess(),
		mdsvex({
			extensions: ['.md'],
		}),
	],
	extensions: ['.svelte', '.svx', '.md'],

	kit: {
		// adapter-auto only supports some environments, see https://kit.svelte.dev/docs/adapter-auto for a list.
		// If your environment is not supported, or you settled on a specific environment, switch out the adapter.
		// See https://kit.svelte.dev/docs/adapters for more information about adapters.
		adapter: adapter({ routes: { include: ['/*'], exclude: ['<all>', '/sitemap.xml'] }}),
		alias: {
			$paraglide: "./src/paraglide/",
			$components: './src/components',
			$lib: './src/lib',
			$stores: './src/stores',
			$styles: './src/styles',
			$utils: './src/utils',
			"@/*": "./path/to/lib/*",
		},
		prerender: {
			origin: 'https://novusgroup.dk',
			entries: ['*'],
		}
	}
};

export default config;
