<script>
	import MainContainer from '$components/MainContainer.svelte';
	import Sidebar from '$components/Sidebar.svelte';

	const docs = [
		{
			title: '⫸ Get Started',
			route: '/docs/get-started',
		},
		{
			title: '↳ TypeScript',
			route: '/docs/typescript',
		},
	];
</script>

<MainContainer>
	<Sidebar header="📘 Docs" elements={docs} />
	<div class="overflow-auto p-6 flex-1">
		<slot />
	</div>
</MainContainer>
