<script lang="ts">
	import { page } from '$app/stores';
	export let header: string = '';
	export let rootroute: string = '';
	export let elements: SidebarElement[] = [];

	type SidebarElement = {
		title: string;
		route: string;
	};
</script>

<aside class="sticky top-20 h-full mr-3 border-r border-white/10 w-56">
	<div class="border-b border-white/10">
		<a href={rootroute}>
			<h1 class="py-2 m-2 text-lg text-center border border-white/10 rounded hover:bg-white/10">{header}</h1>
		</a>
	</div>
	<ul class="py-2 space-y-2">
		{#each elements as example, i (example.route)}
			<li>
				<a href={example.route} sveltekit:prefetch class="text-p5 bg-p5/20 hover:text-white hover:bg-white/20 block px-2 py-1 mx-2 rounded {$page.url.pathname.startsWith(example.route) ? 'outline outline-1' : 'hover:bg-white/20 hover:text-white'}">{example.title}</a>
			</li>
		{/each}
	</ul>
</aside>
