<script>
	import Footer from "$lib/components/footer.svelte";
	import Header from "$lib/components/header.svelte";
    import '../app.css';
</script>

<main class="min-h-screen">
    <Header />
    <div class="max-w-screen-xl px-12 items-center">
        <slot></slot>
    </div>
    <Footer />
</main>