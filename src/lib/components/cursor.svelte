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
		document;
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
				const t = e.target as HTMLElement;
				if (
					t.classList.contains('hoverable') ||
					(e.target as HTMLElement).tagName === 'A' ||
					(e.target as HTMLElement).tagName === 'BUTTON'
				) {
					isBig = true;
					document.body.style.cursor = 'none';
				} else {
					isBig = false;
				}
				const ct = t.getAttribute('data-cursor-text');
				if (ct) {
					cursorText = ct;
					showText = true;
					isBig = true;
				} else if (showText) {
					showText = false;
					isBig = false;
				}
			};
		};

		initCursor();
	});

	let cursorText = 'Hello';
	let showText = false;
</script>

<div
	class="custom-cursor opacity-75 -translate-x-[50%] -translate-y-[50%] flex items-center px-2 {showText
		? 'text-background'
		: 'text-transparent'}"
	style="--mix-blend-mode: {mixBlendMode}; --background-color: {color}; {showText
		? 'max-width: 8rem'
		: ''};"
	bind:this={elem}
>
	{cursorText || ''}
</div>

<style>
	.custom-cursor {
		overflow: hidden;
		--background-color: 'black';
		--mix-blend-mode: 'none';
		--size: 20;
		background-color: var(--background-color);
		mix-blend-mode: var(--mix-blend-mode);
		width: auto;
		max-width: var(--size);
		height: var(--size);
		position: fixed;
		border-radius: 100px;
		pointer-events: none;
		z-index: 99999;
		transition-property: height, width, max-width;
		transition-duration: 0.4s;
		transition-timing-function: cubic-bezier(0.28, 0.8, 0.36, 1);
		cursor: none;
		white-space: nowrap;
	}
</style>
