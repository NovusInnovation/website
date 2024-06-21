<script>
    export let data;
    console.log('props:', data);
</script>

<main>
    <h1>{data.title}</h1>
    <p>Page {data.content}</p>
</main>