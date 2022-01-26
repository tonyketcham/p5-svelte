<script>
	import P5 from '$lib/P5.svelte';
	import CodeBlock from '$components/CodeBlock.svelte';
	import gettingStartedExample from '$helpers/gettingStartedExample';

	let width = 55;
	let height = 55;

	const sketch = (p5) => {
		p5.setup = () => {
			p5.createCanvas(800, 400);
		};

		p5.draw = () => {
			p5.ellipse(p5.width / 2, p5.height / 2, width, height);
		};
	};
</script>

<article id="get-started" class="flex flex-col space-y-3 max-w-prose">
	<h2 class="text-4xl">Get Started</h2>
	<p>
		Trying to get <a href="https://p5js.org/">p5</a> up and running in
		<a href="https://svelte.dev">Svelte</a> can be a pain. So here's an absolutely dead simple way of
		tossing it into your project.
	</p>

	<p>
		The API is super simple; you get a <code>P5</code> component which accepts a <code>sketch</code>
		prop. You can make use of Svelte's reactivity system to bind props or params within your p5 sketch
		just as you would with regular Svelte! You can even have multiple p5 components per page without
		any scoping issues!
	</p>
	<section id="installation" class="pt-3">
		<h3 class="text-xl mb-3">Installation</h3>
		<CodeBlock code="pnpm i p5-svelte" />
		<p>
			Depending on your environment, you may be alerted upon installing <code>p5-svelte</code> that
			<code>p5</code>
			is a required peer dependency which you must install yourself. Thus do:
		</p>
		<CodeBlock code="pnpm i -D p5" />
		<p>
			Then import the exported <code>P5</code> component from <code>p5-svelte</code> into your desired
			component:
		</p>
		<section class="pt-3">
			<h3 class="text-2xl text-p5">Code</h3>
			<CodeBlock code={gettingStartedExample} />
		</section>
		<h3 class="text-xl mb-3">Output</h3>

		<label>
			Width
			<input type="range" bind:value={width} min="100" max="1000" step="0.01" />
			{width}
		</label>

		<label>
			Height
			<input type="range" bind:value={height} min="100" max="1000" step="0.01" />
			{height}
		</label>

		<P5 {sketch} />
	</section>
</article>

<style lang="postcss">
	p {
		@apply mb-3 opacity-90;
	}
	code {
		@apply bg-gray-700;
		@apply py-0.5 px-1;
		@apply rounded;
	}
</style>
