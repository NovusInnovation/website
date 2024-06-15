<script lang="ts">
	import * as m from '$lib/paraglide/messages';
	import LanguageSwitcher from './LanguageSwitcher.svelte';
	import ThemeSwitcher from './ThemeSwitcher.svelte';
</script>

<header class="" style="min-height: 7vh;">
	<nav class="w-screen sticky top-0 px-4">
		<div class="flex flex-wrap justify-between items-center mx-auto max-w-screen-xl">
			<div>
				<a href="/">
					<img src="/novusfull.png" alt="Logo" class="w-30 h-14 mt-1" />
				</a>
			</div>
			<ul class="flex flex-row mt-4 gap-5 items-center">
				<li><a href="/">{m.navbar_home()}</a></li>
				<li><a href="/about">{m.navbar_about()}</a></li>
				<li><a href="/projects">{m.navbar_projects()}</a></li>
				<li><a href="/contact">{m.navbar_contact()}</a></li>
				<ThemeSwitcher />
				<LanguageSwitcher />
			</ul>
		</div>
	</nav>
</header>
