<script lang="ts">
	import { onMount } from 'svelte';
	import { mode } from 'mode-watcher';
	import { onSetLanguageTag } from '$lib/paraglide/runtime';

	let size = 20;
	let color = $mode == 'dark' ? 'white' : 'black';
	$: color = $mode == 'dark' ? 'white' : 'black';
	let mixBlendMode = 'none';
	let isBig = false;

	$: size = isBig ? 35 : 20;

	$: console.log(color);

	let x = -100;
	let y = -100;

	let elem: HTMLDivElement | null = null;

	onMount(() => {
		document
		isBig = false;
		const initCursor = () => {
			document.onmousemove = (e) => {
				x = e.clientX;
				y = e.clientY;

				if (elem) {
					elem.style.left = `${x}px`;
					elem.style.top = `${y}px`;
					elem.style.setProperty('--size', `${size}px`);
				}
			};
			document.onmouseover = (e) => {
				if ((e.target as HTMLElement).classList.contains('hoverable') || (e.target as HTMLElement).tagName === 'A' || (e.target as HTMLElement).tagName === 'BUTTON'){
					isBig = true;
					document.body.style.cursor = 'none';
				} else {
					isBig = false;
				}
			};
		};

		initCursor();
	});
</script>

<div
	class="custom-cursor opacity-75 -translate-x-[50%] -translate-y-[50%]"
	style="--mix-blend-mode: {mixBlendMode}; --background-color: {color}"
	bind:this={elem}
/>

<style>
	.custom-cursor {
		--background-color: 'black';
		--mix-blend-mode: 'none';
		--size: 20;
		background-color: var(--background-color);
		mix-blend-mode: var(--mix-blend-mode);
		width: var(--size);
		height: var(--size);
		position: fixed;
		border-radius: 50%;
		pointer-events: none;
		z-index: 99999;
		transition-property: height, width;
		transition-duration: 0.2s;
		transition-timing-function: cubic-bezier(0.28, 0.8, 0.36, 1);
		cursor: none;
	}
</style>
