<script lang="ts">
	import { crossfade, fly } from 'svelte/transition';
	import { backOut } from 'svelte/easing';
	import { onMount } from 'svelte';

	import { receive, send } from '$lib/crossfade';

	let showLogo = false;

	onMount(() => {
		setTimeout(() => {
			showLogo = true;
		}, 1000);
	});
</script>

<title>Novus Group</title>
<meta
	name="description"
	content="Novus Group is a software development company that specializes in web development, mobile development, and custom software solutions."
/>

<div class="container items-center flex px-auto justify-center pt-12">
	<div>
		<img
			src="/novusfull.png"
			alt="NovusGroup Logo"
			class="absolute"
			width="400"
			height="400"
			in:receive={{ key: 'novus-logo' }}
			out:send={{ key: 'novus-logo' }}
		/>
	</div>
</div>
