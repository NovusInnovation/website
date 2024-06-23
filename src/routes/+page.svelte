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
<div class="size-full overflow-x-clip absolute left-0 top-0 -z-10">
	<div class="blur-effect bg-primary-2 right-0 bottom-0 translate-x-[54%] translate-y-[54%]"></div>
	<div class="blur-effect -translate-x-[54%] -translate-y-[54%] left-0 top-0 bg-primary"></div>
</div>

<div class="relative">
	<div class="flex max-h-[75vh] h-[80vw] items-center mb-60">
		<h1
			class="max-w-[30rem] relative md:max-w-full md:whitespace-nowrap md:text-5xl text-4xl align-middle text-center"
		>
			<div class="bg-red-500/20 size-full absolute">
				<img
					src="svg/elliott-bubble.svg"
					alt="Elliott Bubble"
					class="w-30 h-14 mt-1 opacity-100 transition-opacity duration-1000 ease-out"
				/>
			</div>
			<span>The team that’s Ready</span>
			<br class="hidden md:block" />
			to build <span class="italic">your</span> next
			<span class="gradient"> Website </span>
		</h1>
	</div>
	<div class="items-center flex-1 flex px-auto justify-center pt-12"></div>
</div>

<style>
	.blur-effect {
		@apply absolute rounded-[100%] w-[80vw] h-[60vh] blur-[calc(6rem+10vw)] opacity-70;
	}
</style>
