<script>
	import { m } from '$lib';

	export let year = new Date().getFullYear();
</script>

<footer class="bg-accent">
	<div class="w-full max-w-screen-xl mx-auto p-4 md:py-8">
		<div class="sm:flex sm:items-center sm:justify-between">
			<a href="/" class="flex items-center mb-4 sm:mb-0 space-x-3 rtl:space-x-reverse">
				<img src="/favicon.png" class="h-8" alt="Novus Logo" />
				<span class="self-center text-2xl font-semibold whitespace-nowrap"
					>Novus</span
				>
			</a>
			<ul
				class="flex flex-wrap items-center mb-6 text-sm font-medium sm:mb-0"
			>
				<li>
					<a href="/" class="hover:underline me-4 md:me-6">{m.navbar_home()}</a>
				</li>
				<li>
					<a href="/about" class="hover:underline me-4 md:me-6">{m.navbar_about()}</a>
				</li>
				<li>
					<a href="/projects" class="hover:underline me-4 md:me-6">{m.navbar_projects()}</a>
				</li>
				<li>
					<a href="/contact" class="hover:underline">{m.navbar_contact()}</a>
				</li>
			</ul>
		</div>
		<hr class="my-6 sm:mx-auto lg:my-8" />
		<span class="block text-sm sm:text-center"
			>© {year} <a href="/" class="hover:underline">Novus Group™</a>. {m.rights_reserved()}.</span
		>
	</div>
</footer>
