<script lang="ts">
	import { ParaglideJS } from '@inlang/paraglide-sveltekit';
	import { i18n } from '$lib/i18n';
	import { ModeWatcher } from 'mode-watcher';

	import Footer from '$lib/components/footer.svelte';
	import Header from '$lib/components/header.svelte';
	import '../app.css';
	import { fly } from 'svelte/transition';

	export let data;
	export let previusUrl: string = '';

	function animate(projects: boolean, url: string) {
		if (projects) return previusUrl;

		previusUrl = url;
		return url;
	}
</script>

<ModeWatcher />

<ParaglideJS {i18n}>
	<main class="min-h-screen flex flex-col">
		<Header />
		{#key animate(data.url.includes('/projects/'), data.url)}
			<div class="max-w-screen-xl mx-auto flex-1 px-10 sm:px-24" 
			in:fly={{
				x: -200, duration: 300, delay: 300
			}}
			out:fly={{
				x: 200, duration: 300
			}}>
				<slot />
			</div>
		{/key}
		<Footer />
	</main>
</ParaglideJS>
