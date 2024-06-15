<script lang="ts">
	import { goto } from "$app/navigation";
	import { i18n } from "$lib/i18n";
    import { setLanguageTag, languageTag, onSetLanguageTag, isAvailableLanguageTag } from "$lib/paraglide/runtime.js"
	import { onMount } from "svelte";

    onSetLanguageTag((tag) => {
        // Reroute to the correct language
        let currentPath = window.location.pathname;
        // Only remove the language tag if it is present
        let currentPathNoLang = currentPath.replace(/\/(en|dk)/, '');
        let newRouteWithLang = i18n.resolveRoute(currentPathNoLang, tag);
        console.log(newRouteWithLang);
        if (newRouteWithLang !== window.location.pathname) {
            goto(newRouteWithLang);
        }
    });

    onMount(() => {
        setLanguageTag(isAvailableLanguageTag(document.documentElement.lang) ? document.documentElement.lang : 'en');
    });
</script>

<div>
    <div class="flex items-center gap-8 text-navigation">
        <button on:click={() => setLanguageTag('en')}>EN</button>
        <button on:click={() => setLanguageTag(languageTag() == 'dk' ? 'en' : 'dk')} aria-label="Toggle language" class="h-15 w-30 rounded-full border border-light-border dark:border-dark-border">
            <div class="relative -top-1 -left-1 h-15 w-15 rounded-full bg-black transition-transform duration-100 ease-out dark:bg-white transform translate-x-0"></div>
        </button>
        <button on:click={() => setLanguageTag('dk')}>DK</button>
    </div>
</div>