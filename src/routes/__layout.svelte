<script>
	import '../app.css';
</script>

<svelte:head>
	<title>p5-svelte</title>
	<meta
		name="description"
		content="A component for easily using p5 sketches in Svelte. Allows using Svelte's reactivity system in p5."
	/>
	<meta
		name="keywords"
		content="p5, p5.js, svelte, generative, procedural, art, reactivity, component, p5-svelte"
	/>
</svelte:head>

<header class="flex justify-between fixed inset-0 bottom-auto p-3 font-mono h-12">
	<h1 class="w-32 text-lg"><a href="/" sveltekit:prefetch>p5-svelte</a></h1>
	<nav aria-label="primary" class="my-auto">
		<ul class="flex space-x-6 font-semibold text-p5">
			<li>
				<a href="/docs/get-started" sveltekit:prefetch class="hover:text-white">get started</a>
			</li>
			<li><a href="/examples" sveltekit:prefetch class="hover:text-white">examples</a></li>
		</ul>
	</nav>
	<nav aria-label="external" class="flex justify-end w-32">
		<a
			href="https://github.com/tonyketcham/p5-svelte"
			class="hover:text-svelte motion-safe:transition-colors"
			target="_blank"
		>
			<svg
				xmlns="http://www.w3.org/2000/svg"
				width="24"
				height="24"
				viewBox="0 0 24 24"
				fill="currentColor"
				stroke-width="2"
				class="ai ai-GithubFill"
				role="presentation"
				><path
					fill-rule="evenodd"
					clip-rule="evenodd"
					d="M12 0C5.37 0 0 5.37 0 12c0 5.31 3.435 9.795 8.205 11.385.6.105.825-.255.825-.57 0-.285-.015-1.23-.015-2.235-3.015.555-3.795-.735-4.035-1.41-.135-.345-.72-1.41-1.23-1.695-.42-.225-1.02-.78-.015-.795.945-.015 1.62.87 1.845 1.23 1.08 1.815 2.805 1.305 3.495.99.105-.78.42-1.305.765-1.605-2.67-.3-5.46-1.335-5.46-5.925 0-1.305.465-2.385 1.23-3.225-.12-.3-.54-1.53.12-3.18 0 0 1.005-.315 3.3 1.23.96-.27 1.98-.405 3-.405s2.04.135 3 .405c2.295-1.56 3.3-1.23 3.3-1.23.66 1.65.24 2.88.12 3.18.765.84 1.23 1.905 1.23 3.225 0 4.605-2.805 5.625-5.475 5.925.435.375.81 1.095.81 2.22 0 1.605-.015 2.895-.015 3.3 0 .315.225.69.825.57A12.02 12.02 0 0 0 24 12c0-6.63-5.37-12-12-12z"
				/></svg
			>
		</a>
	</nav>
</header>
<slot />
