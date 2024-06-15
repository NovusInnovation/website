// See https://kit.svelte.dev/docs/types#app
// for information about these interfaces
import type { AvailableLanguageTag } from "$lib/paraglide/runtime"
import type { ParaglideLocals } from "@inlang/paraglide-sveltekit"

declare global {
	namespace App {
        interface Platform {
            env: Env
            cf: CfProperties
            ctx: ExecutionContext
        }
        interface Locals {
			paraglide: ParaglideLocals<AvailableLanguageTag>
		}
    }
}

export {};