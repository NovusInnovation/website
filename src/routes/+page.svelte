<script lang="ts">
    import { fly } from 'svelte/transition';
    import { backOut } from 'svelte/easing';
    import { onMount } from 'svelte';

    let showLogo = false;

    onMount(() => {
        setTimeout(() => {
            showLogo = true;
        }, 250);
    });
</script>

<div class="container w-screen items-center flex px-auto justify-center pt-12">
    {#if showLogo}
        <img src="/novusfull.png" alt="NovusGroup Logo" width="400" height="400" in:fly={{
            y: 100,
            easing: backOut
        }}>
    {/if}
</div>