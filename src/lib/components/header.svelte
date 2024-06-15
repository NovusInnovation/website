<script lang="ts">
    import * as m from '$lib/paraglide/messages';
</script>

<header>
    <nav class="w-screen sticky top-0 px-4">
        <div class="flex flex-wrap justify-between items-center mx-auto max-w-screen-xl">
            <div class="flex ">
                <a href="/">
                    <img src="/favicon.png" alt="Logo" class="w-14 h-14" />
                </a>
            </div>
            <ul class="flex flex-row mt-4 gap-3">
                <li><a href="/">{ m.navbar_home }</a></li>
                <li><a href="/about">{ m.navbar_about() }</a></li>
                <li><a href="/projects">{ m.navbar_projects() }</a></li>
                <li><a href="/contact">{ m.navbar_contact}</a></li>
            </ul>
        </div>
    </nav>
</header>