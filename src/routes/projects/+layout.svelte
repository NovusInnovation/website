<script lang="ts">
  import * as Dialog from "$lib/components/ui/dialog/index.js";
  import { page } from "$app/stores";
  import { i18n } from '$lib/i18n.js'
  import { goto } from '$app/navigation'

  let open = $page.route.id !== '/projects';
  page.subscribe((value) => {
    open = value.route.id !== '/projects';
  });

  function onOpenChange(isOpen: boolean) {
    if (!isOpen) {
      goto(i18n.resolveRoute('/projects'));
    }
  }
</script>

<div class="container mx-auto p-4">
	<h1 class="text-3xl font-bold mb-4">Our projects:</h1>

	<h1 class="mb-2 font-bold text-4xl">Nørrebro Skakklubs website</h1>
	<div class="container items-center flex px-auto justify-center pt-12">
		<a href="/projects/nbskak">
			<img src="/NBSkak.webp" alt="NBskak" width="750" height="750" style="border-radius: 50px;" />
		</a>
	</div>
	<ul class="list-disc ml-6">
		<li class="mb-2">Chessbot which competed in the Sebastian Lague coding challenge</li>
		<li class="mb-2">Viranoid 2023 winning gamejam game</li>
		<li class="mb-2">GravityDrop</li>
	</ul>
</div>

<Dialog.Root bind:open onOpenChange={onOpenChange}>
  <Dialog.Content class="w-full max-w-[80vw] h-full max-h-[75vh]">
    <slot />
  </Dialog.Content>
</Dialog.Root>