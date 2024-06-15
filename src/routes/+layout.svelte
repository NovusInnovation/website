<script>
	import { ParaglideJS } from '@inlang/paraglide-sveltekit'
	import { i18n } from '$lib/i18n'

	import Footer from "$lib/components/footer.svelte";
	import Header from "$lib/components/header.svelte";
    import '../app.css';
</script>

<ParaglideJS {i18n}>
    <main class="min-h-screen">
        <Header />
        <div class="max-w-screen-xl px-12 items-center">
            <slot></slot>
        </div>
        <Footer />
    </main>
</ParaglideJS>