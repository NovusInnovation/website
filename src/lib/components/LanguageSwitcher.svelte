<script lang="ts">
	import { goto } from "$app/navigation";
	import { i18n } from "$lib/i18n";
    import { setLanguageTag, languageTag, onSetLanguageTag, isAvailableLanguageTag } from "$lib/paraglide/runtime.js"
    import type { AvailableLanguageTag } from "$lib/paraglide/runtime.js";
	import { onMount } from "svelte";

    let currentLanguage: AvailableLanguageTag = 'en'

    onSetLanguageTag((tag) => {
        // Update the language switcher button position
        currentLanguage = tag;
        // Reroute to the correct language
        let currentPath = window.location.pathname;
        // Remove the language tag from the path (Only en has a language tag)
        currentPath = currentPath.replace(/^\/en/, '');
        if (tag == 'dk') {
            console.log(`${currentPath}`)
            i18n.route(currentPath)
        } else {
            i18n.route(`/${tag}${currentPath}`)   
        }
    });

    onMount(() => {
        currentLanguage = isAvailableLanguageTag(document.documentElement.lang) ? document.documentElement.lang : 'en';
        setLanguageTag(currentLanguage);
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