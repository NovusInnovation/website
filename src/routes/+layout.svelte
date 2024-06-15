<script>
	import Footer from "$lib/components/footer.svelte";
	import Header from "$lib/components/header.svelte";
    import '../app.css';
</script>

<main class="min-h-screen">
    <Header />
    <slot></slot>
    <Footer />
</main>