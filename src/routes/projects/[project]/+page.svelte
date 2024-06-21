<script>
    export let data;
    console.log('props:', data);
</script>

<main>
    <h1>{data.title}</h1>
    <svelte:component this={data.content} />
</main>