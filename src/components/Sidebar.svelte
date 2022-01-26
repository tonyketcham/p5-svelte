<script lang="ts">
	export let header: string = '';
	export let elements: SidebarElement[] = [];

	type SidebarElement = {
		title: string;
		route: string;
	};
</script>

<aside class="sticky top-16 h-[80%] m-3 ml-0 p-3 border-r border-white border-opacity-10 w-56">
	<h1 class="border-b-2">{header}</h1>
	<ul class="py-3 space-y-1">
		{#each elements as example, i (example.route)}
			<li class="text-p5 hover:text-white">
				<a href={example.route} sveltekit:prefetch class="w-full block">{example.title}</a>
			</li>
		{/each}
	</ul>
</aside>
