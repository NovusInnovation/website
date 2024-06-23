<script>
	import { m } from '$lib';
	import { receive, send } from '$lib/crossfade';
</script>

<div class="flex items-center justify-center text-center">
	<div>
		<h1 class="text-3xl font-bold">{m.welcome()}</h1>
		<p class="mt-4 text-lg">{m.about_us()}</p>
	</div>
	<img
		src="/novusfull.png"
		alt="NovusGroup Logo"
		class="absolute"
		width="400"
		height="400"
		in:receive={{ key: 'novus-logo' }}
		out:send={{ key: 'novus-logo' }}
		style="transform: translateX(-300px);"
	/>
</div>
