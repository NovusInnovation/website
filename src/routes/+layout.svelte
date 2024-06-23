<script>
	import { ParaglideJS } from '@inlang/paraglide-sveltekit';
	import { i18n } from '$lib/i18n';
	import { ModeWatcher } from 'mode-watcher';

	import Footer from '$lib/components/footer.svelte';
	import Header from '$lib/components/header.svelte';
	import '../app.css';
</script>

<ModeWatcher />

<ParaglideJS {i18n}>
	<main class="min-h-screen w-screen flex flex-col">
		<Header />
		<div class="max-w-screen-xl relative mx-auto flex-1 px-24">
			<slot />
			<div class="absolute"></div>
		</div>
		<Footer />
	</main>
</ParaglideJS>
