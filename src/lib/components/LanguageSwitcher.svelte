<script lang="ts">
	import { goto } from '$app/navigation';
	import { i18n } from '$lib/i18n';
	import {
		setLanguageTag,
		languageTag,
		onSetLanguageTag,
		isAvailableLanguageTag
	} from '$lib/paraglide/runtime.js';
	import { onMount } from 'svelte';

	let currentLang = languageTag();

	onSetLanguageTag((tag) => {
		currentLang = tag;
		// Reroute to the correct language
		let currentPath = window.location.pathname;
		// Only remove the language tag if it is present
		let currentPathNoLang = currentPath.replace(/\/(en|dk)/, '');
		let newRouteWithLang = i18n.resolveRoute(currentPathNoLang, tag);
		if (newRouteWithLang !== window.location.pathname) {
			goto(newRouteWithLang);
		}
	});

	onMount(() => {
		setLanguageTag(
			isAvailableLanguageTag(document.documentElement.lang) ? document.documentElement.lang : 'en'
		);
	});
</script>

<div>
	<div class="flex items-center gap-2 text-navigation">
		<button on:click={() => setLanguageTag('en')}>EN</button>
		<button
			on:click={() => setLanguageTag(languageTag() == 'dk' ? 'en' : 'dk')}
			aria-label="Toggle language"
			class="w-8 h-4 rounded-full border border-muted-foreground/50 bg-muted relative"
		>
			<div
				class={'absolute h-full aspect-square top-0 rounded-full bg-black transition-transform duration-1000 ease-out dark:bg-white transform' +
					(currentLang === 'dk' ? ' right-0' : ' translate-x-0')}
			/>
		</button>
		<button on:click={() => setLanguageTag('dk')}>DK</button>
	</div>
</div>
