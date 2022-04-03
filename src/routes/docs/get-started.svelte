<script lang="ts">
	import P5 from '$lib/P5.svelte';
	import type { Sketch } from '$lib';
	import CodeBlock from '$components/CodeBlock.svelte';
	import gettingStartedExample from '$helpers/gettingStartedExample';
	import RangeSlider from 'svelte-range-slider-pips';

	let dimensions = [180, 130];
	$: width = dimensions[0];
	$: height = dimensions[1];

	const sketch: Sketch = (p5) => {
		p5.setup = () => {
			p5.createCanvas(865, 400);
		};

		p5.draw = () => {
			p5.ellipse(p5.width / 2, p5.height / 2, width, height);
		};
	};
</script>

<article id="get-started" class="doc">
	<h2 class="text-4xl">⫸ Get Started</h2>
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
	<section id="installation">
		<h3>Installation</h3>
		<CodeBlock code="pnpm i p5-svelte" />
		<p>
			Depending on your environment, you may be alerted upon installing <code>p5-svelte</code> that
			<code>p5</code>
			is a required peer dependency which you must install yourself. Thus do:
		</p>
		<CodeBlock code="pnpm i -D p5" />
		<p>
			Then import the exported <code>P5</code> component from <code>p5-svelte</code> into your desired
			component.
		</p>
		<section>
			<h3>Example</h3>
			<CodeBlock code={gettingStartedExample} />
		</section>
		<h3 class="text-xl">Output</h3>

		<div class="border border-p5/40 rounded-md overflow-hidden mt-3">
			<P5 {sketch} />
		</div>

		<div
			class="m-20 mt-12"
			style="--range-handle-focus:#ed225d; --range-handle:#ed225daa; --range-handle-inactive:#ed225d;"
		>
			<RangeSlider
				bind:values={dimensions}
				min={100}
				max={1000}
				float
				pips
				pipstep={100}
				all="label"
				id="slider"
			/>
		</div>
	</section>
</article>
