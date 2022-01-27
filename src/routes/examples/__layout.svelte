<script>
	import MainContainer from '$components/MainContainer.svelte';
	import Sidebar from '$components/Sidebar.svelte';

	let examples = [
		{
			title: '3D',
			route: '/examples/3d',
		},
		// {
		// 	title: 'Sound',
		// 	route: '/examples/sound',
		// },
		{
			title: 'Vectors',
			route: '/examples/vector',
		},
	];
</script>

<MainContainer>
	<Sidebar header="Examples" elements={examples} />
	<div class="overflow-auto p-6 flex-1">
		<div class="max-w-[90ch]">
			<slot />
		</div>
	</div>
</MainContainer>
