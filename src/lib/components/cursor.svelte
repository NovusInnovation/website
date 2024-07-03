<script lang="ts">
	import { onMount } from 'svelte';
	import { mode } from 'mode-watcher';

	let size = 0;
	let color = $mode == 'dark' ? 'white' : 'black';
	$: color = $mode == 'dark' ? 'white' : 'black';
	let mixBlendMode = 'none';

	$: console.log(color);

	let x = -100;
	let y = -100;

	$: elem?.style.setProperty('--size', `${size}px`);

	let elem: HTMLDivElement | null = null;

	onMount(() => {
		console.log();

		size = 0;
		const initCursor = () => {
			document.onmousemove = (e) => {
				x = e.clientX;
				y = e.clientY;

				if (elem) {
					elem.style.left = `${x}px`;
					elem.style.top = `${y}px`;

					elem?.style.setProperty('--size', `${size}px`);
				}
			};
			document.onmouseover = (e) => {
				const t = e.target as HTMLElement;
				if (
					t.classList.contains('hoverable') ||
					(e.target as HTMLElement).tagName === 'A' ||
					(e.target as HTMLElement).tagName === 'BUTTON'
				) {
					size = 35;
					document.body.style.cursor = 'none';
				} else {
					size = 20;
				}
				const ct = t.getAttribute('data-cursor-text');
				if (ct) {
					cursorText = ct;
					showText = true;
					size = 35;
				} else if (showText) {
					showText = false;
					size = 20;
				}
			};
		};

		document.onmouseleave = () => {
			if (elem) elem.style.display = 'none';
		};
		document.onmouseenter = () => {
			if (elem) elem.style.display = 'block';
		};

		initCursor();
	});

	let cursorText = 'Hello';
	let showText = false;
	let innerElem: HTMLParagraphElement;
</script>

<div
	class="custom-cursor flex bg-foreground/90 opacity-70 items-center {showText
		? 'text-background'
		: 'text-transparent'}"
	style="--mix-blend-mode: {mixBlendMode}; --background-color: {color}; {showText && cursorText
		? 'width: ' + innerElem.clientWidth + 'px;'
		: 'width: var(--size)'};"
	bind:this={elem}
>
	<div class="px-2" bind:this={innerElem}>
		<p>
			{cursorText || ''}
		</p>
	</div>
</div>

<style>
	.custom-cursor {
		overflow: hidden;
		--background-color: 'black';
		--mix-blend-mode: 'none';
		--size: 0;
		/* background-color: white; */
		/* mix-blend-mode: difference; */
		/* mix-blend-mode: exclusion; */

		/* max-width: var(--size); */
		transform: translate(calc(var(--size) * -0.5), -50%);
		height: var(--size);
		position: fixed;
		border-radius: 100px;
		pointer-events: none;
		z-index: 99999;
		transition-property: height, width, max-width, transform;
		transition-duration: 0.4s;
		transition-timing-function: cubic-bezier(0.28, 0.8, 0.36, 1);
		cursor: none;
		white-space: nowrap;
	}
</style>
