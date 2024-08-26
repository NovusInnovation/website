<script lang="ts">
	import { onDestroy, onMount } from 'svelte';
	import { m } from '$lib';

	let showLogo = false;

	onMount(() => {
		setTimeout(() => {
			showLogo = true;
		}, 250);
	});

	let perspectiveElem: HTMLDivElement | null = null;

	let bgGlowElem1: HTMLDivElement | null = null;
	let bgGlowElem2: HTMLDivElement | null = null;

	let i = 0;

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
		interval = setInterval(() => {
			i = (i + 1) % whatWeDo.length;

			const elem = document.getElementById('whatWeDo');
			const currentText = elem?.firstChild?.children[i] as HTMLElement;

			elem!.style.width = `${currentText.clientWidth}px`;
		}, 3000);
	});

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
			class="cont-3d max-w-[30rem] relative md:max-w-full md:whitespace-nowrap sm:text-3xl md:text-[min(3.5rem,4.7vw)] text-4xl align-middle text-center !leading-[1.5em] sm:w-[19ch]"
			bind:this={perspectiveElem}
		>
			<img
				src="svg/elliott-bubble.svg"
				alt="Elliott Bubble"
				class="hidden sm:block h-[3.8em] right-0 bottom-0 translate-x-[62%] translate-y-[80%] profile-bubble"
				style="translate: 0 0 125px;"
				data-cursor-text="Elliott F."
			/>
			<img
				src="svg/jonathan-bubble.svg"
				alt="Jonathan Bubble"
				class="hidden sm:block h-[4em] left-0 top-0 -translate-x-[70%] -translate-y-[70%] profile-bubble"
				style="translate: 0 0 -100px;"
				data-cursor-text="Jonathan B."
			/>
			<!-- <img
				src="svg/johannes-bubble.svg"
				alt="Johannes Bubble"
				class="hidden sm:block h-[4em] left-[60%] top-0 -translate-x-[50%] -translate-y-[100%] profile-bubble"
				style="translate: 0 0 -50px;"
				data-cursor-text="Johannes B."
			/> -->
			<img
				src="svg/johannes-bubble.svg"
				alt="Johannes Bubble"
				class="hidden sm:block h-[4em] left-[20%] bottom-0 -translate-x-[0] translate-y-[80%] profile-bubble"
				style="translate: 0 0 -40px;"
				data-cursor-text="Johannes B."
			/>

			<span>{@html m.landing1()}</span>
			<br class="hidden md:block" />
			{@html m.landing2()}
			<br class="xs:hidden" />
			<span
				class="inline-block overflow-y-clip translate-y-[20%] h-[1.1em] w-[15rem] text-left transition-all ease-in-out duration-1000"
				id="whatWeDo"
				style="overflow-inline: clip;"
			>
				<div
					style="translate: 0px {-(100 / 4) * i - 3}%"
					class="transition-all ease-in-out duration-500 flex flex-col xs:items-start items-center"
				>
					{#each whatWeDo as t}
						<span class="inline-block z-10 gradient text-center" data-cursor-text="What We Do"
							>{t}</span
						>
						<!-- content here -->
					{/each}
				</div>
			</span>
		</h1>
	</div>
	<div class="items-center flex-1 flex px-auto justify-center pt-12"></div>
</div>

<style>
	.blur-effect {
		@apply absolute rounded-[100%] w-[80vw] h-[60vh] blur-[calc(6rem+10vw)] opacity-45;
	}

	.profile-bubble {
		@apply absolute rounded-full backdrop-blur-[0.06em];
		animation: anim 300ms ease-out;
	}

	@keyframes anim {
		0% {
			scale: 0;
			transform-origin: center;
		}
		100% {
			scale: 1;
		}
	}

	.cont-3d {
		transform-style: preserve-3d;
		perspective: 1000px;
		perspective-origin: center 50vh;
	}
</style>
