<script lang="ts">
	import Input from './ui/input/input.svelte';
	import { Textarea } from './ui/textarea';
	import Button from './ui/button/button.svelte';
	import { m } from '$lib';
</script>

<div class="p-10">
	<form
		action="https://api.staticforms.xyz/submit"
		method="post"
		class="flex h-full flex-col gap-4 lg:max-w-[20rem] xl:max-w-[30rem] 2xl:max-w-[40rem]"
	>
		<h1 class="font-bold text-4xl">{m.contact_us()}</h1>
		<p class="">{m.about_us_expanded()}</p>
		<div class="flex flex-row gap-4">
			<Input type="text" name="frist_name" placeholder="Fornavn" />
			<Input type="text" name="last_name" placeholder="Efternavn" />
		</div>
		<Input type="email" name="email" placeholder="Email" />
		<Textarea name="message" placeholder="Besked" class="min-h-20 flex-1 resize-none" />
		<Input type="text" name="honeypot" style="display:none" />
		<input type="hidden" name="accessKey" value=" cf1c27fe-431b-487e-8ac9-1f0ff15f1d86" />
		<input type="hidden" name="subject" value="Contact us from - akademia.cc" />
		<input type="hidden" name="replyTo" value="@" />
		<input type="hidden" name="redirectTo" value="https://akademia.cc/" />
		<Button type="submit" class="text-lg w-48 h-12">{m.contact_send_message()}</Button>
	</form>
</div>