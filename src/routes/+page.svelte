<script lang="ts">
	import { fly } from 'svelte/transition';
	import { backOut } from 'svelte/easing';
	import { onDestroy, onMount } from 'svelte';

	let showLogo = false;

	onMount(() => {
		setTimeout(() => {
			showLogo = true;
		}, 250);
	});

	let perspectiveElem: HTMLDivElement | null = null;

	let bgGlowElem1: HTMLDivElement | null = null;
	let bgGlowElem2: HTMLDivElement | null = null;

	let interval: ReturnType<typeof setInterval>;
	onMount(() => {
		document.onscroll = () => {
			if (perspectiveElem) {
				console.log(window.scrollY);
				perspectiveElem.style.perspectiveOrigin = `center calc(${window.scrollY + window.innerHeight / 2}px)`;
			}

			if (bgGlowElem1 && bgGlowElem2) {
				bgGlowElem1.style.translate = `0 ${-window.scrollY * 0.65}px`;
				bgGlowElem2.style.translate = `0 ${-window.scrollY * 0.6}px`;
			}
		};
		clearInterval(interval);
		let i = 0;
		interval = setInterval(() => {
			i++;
			console.log('hi');
			replaceChars(whatWeDo[i % whatWeDo.length], 0);
		}, 2000);
	});

	let text = 'Website';

	function replaceChars(str: string, index) {
		if (text[index] === undefined && str[index] === undefined) {
			return;
		}
		text = replaceAt(text, index, str[index] || '   ');

		setTimeout(() => {
			replaceChars(str, index + 1);
		}, 100);
	}

	function replaceAt(str: string, index: number, replacement: string) {
		return str.substring(0, index) + replacement + str.substring(index + replacement.length);
	}

	onDestroy(() => {
		clearInterval(interval);
	});

	const whatWeDo = ['Website', 'App', 'Software', 'Design'];
</script>

<title>Novus Group</title>
<meta
	name="description"
	content="Novus Group is a software development company that specializes in web development, mobile development, and custom software solutions."
/>
<div class="size-full fixed left-0 top-0 -z-10 pointer-events-none">
	<div
		class="blur-effect bg-primary-2 right-0 bottom-0 translate-x-[54%] translate-y-[54%]"
		bind:this={bgGlowElem2}
	></div>
	<div
		class="blur-effect -translate-x-[54%] -translate-y-[54%] left-0 top-0 bg-primary"
		bind:this={bgGlowElem1}
	></div>
</div>

<div class="relative">
	<div class="flex max-h-[75vh] h-[80vw] items-center mb-60">
		<h1
			class="cont-3d max-w-[30rem] relative md:max-w-full md:whitespace-nowrap sm:text-3xl md:text-5xl lg:text-6xl text-4xl align-middle text-center !leading-[1.5em]"
			bind:this={perspectiveElem}
		>
			<span>The team that’s Ready</span>
			<br class="hidden md:block" />
			to build <span class="italic">your</span> next
			<span class="gradient inline-block w-[15rem] overflow-[inline] text-left"> {text} </span>
			<img
				src="svg/elliott-bubble.svg"
				alt="Elliott Bubble"
				class="h-[3.8em] right-0 bottom-0 translate-x-[62%] translate-y-[80%] profile-bubble"
				style="translate: 0 0 125px;"
			/>
			<img
				src="svg/jonathan-bubble.svg"
				alt="Jonathan Bubble"
				class="h-[4em] left-0 top-0 -translate-x-[70%] -translate-y-[70%] profile-bubble"
				style="translate: 0 0 -100px;"
			/>
		</h1>
	</div>
	<div class="items-center flex-1 flex px-auto justify-center pt-12"></div>
</div>

<style>
	.blur-effect {
		@apply absolute rounded-[100%] w-[80vw] h-[60vh] blur-[calc(6rem+10vw)] opacity-70;
	}

	.profile-bubble {
		@apply absolute rounded-full backdrop-blur-[0.06em];
	}

	.cont-3d {
		transform-style: preserve-3d;
		perspective: 1000px;
		perspective-origin: center 50vh;
	}
</style>
