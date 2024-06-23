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

<div class="absolute rounded-[100rem]"></div>
<div class="flex max-h-[75vh] h-[80vw] items-center mb-60">
	<h1
		class="max-w-[30rem] md:max-w-full md:whitespace-nowrap md:text-5xl text-4xl align-middle text-center"
	>
		<span>The team that’s Ready</span>
		<br class="hidden md:block" />
		to build <span class="italic">your</span> next
		<span class="gradient"> Website </span>
	</h1>
</div>
<div class="items-center flex-1 flex px-auto justify-center pt-12"></div>
