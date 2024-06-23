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

<title>Novus Group</title>
<meta
	name="description"
	content="Novus Group is a software development company that specializes in web development, mobile development, and custom software solutions."
/>

<div class="container items-center flex px-auto justify-center pt-12">
	{#if showLogo}
		<img
			src="/novusfull.png"
			alt="NovusGroup Logo"
			width="400"
			height="400"
			in:fly={{
				y: 100,
				easing: backOut
			}}
		/>
	{/if}
</div>
