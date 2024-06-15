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
    <main class="min-h-screen bg-background w-screen items-center justify-center">
        <Header />
        <div class="max-w-screen-xl mx-auto">
            <slot></slot>
        </div>
        <div class="w-screen absolute bottom-0">
            <Footer />
        </div>
    </main>
</ParaglideJS>