<script>
    export let data;
    console.log('props:', data);
</script>

<main>
    <svelte:component this={data.content} />
</main>