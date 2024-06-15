<script>
	import { goto } from "$app/navigation";
	import { m } from "$lib";
	import { onMount } from "svelte";

    onMount(() => {
        setTimeout(() => {
            goto("/");
        }, 5000);
    });
</script>

<div>
    <h1>{m.message_confirm_title()}</h1>
    <p>{m.message_confirm()}</p>
</div>