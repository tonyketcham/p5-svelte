<script>
	import MainContainer from '$components/MainContainer.svelte';
	import Sidebar from '$components/Sidebar.svelte';

	const docs = [
		{
			title: 'Get Started',
			route: 'get-started',
		},
	];
</script>

<MainContainer>
	<Sidebar header="Docs" elements={docs} />
	<div class="overflow-auto p-6 flex-1">
		<slot />
	</div>
</MainContainer>
