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

<div class="items-center flex px-auto justify-center pt-12">
	<h1
		class="max-w-[30rem] md:max-w-full md:text-red-500 md:text-5xl md:whitespace-nowrap lg:text-6xl text-4x sm:text-5xl align-middle text-center"
	>
		<span>The team that’s Ready</span>
		<br class="hidden md:block" />
		to build <span class="italic">your</span> next
		<span> Website </span>
	</h1>
</div>
