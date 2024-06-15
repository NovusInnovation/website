<script>
	import { ParaglideJS } from '@inlang/paraglide-sveltekit'
	import { i18n } from '$lib/i18n'
    import { ModeWatcher } from 'mode-watcher';

	import Footer from "$lib/components/footer.svelte";
	import Header from "$lib/components/header.svelte";
    import '../app.css';
</script>

<ModeWatcher />

<ParaglideJS {i18n}>
    <main class="min-h-screen w-screen flex flex-col justify-between">
        <Header />
        <div class="max-w-screen-xl mx-auto min-h-48">
            <slot />
        </div>
        <Footer />
    </main>
</ParaglideJS>