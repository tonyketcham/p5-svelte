<script lang="ts">
	import CodeBlock from '$components/CodeBlock.svelte';

	const tsImportExample = `import type { Sketch } from 'p5-svelte';`;

	const sketchType = `// p5-svelte/types.d.ts
import type p5 from 'p5';

/**
 * A closure representing a p5 sketch in [Instance Mode](https://github.com/processing/p5.js/wiki/Global-and-instance-mode).
 *
 * Within the closure you can set optional \`preload()\`, \`setup()\`, and/or \`draw()\` properties on the given p5 instance.
 */
export type Sketch = (sketch: p5) => void;`;

	const tsExampleSketch = `(p5) => {
		p5.setup = () => {
			p5.createCanvas(p5.windowWidth, p5.windowHeight);
		};
		p5.draw = () => {
			p5.ellipse(p5.width / 2, p5.height / 2, p5.width, p5.height);
		};
	}`;

	const jsIntellisenseSketch = `<script>
	import P5 from 'p5-svelte';

	/**
	 * @type {import('package').Sketch}
	 */
	const sketch = (p5) => {
		p5.setup = () => {
			p5.createCanvas(400, 400);
		};
		p5.draw = () => {
			p5.background(255, 0, 0);
		};
	};
\</\script>

<P5 {sketch} />`;
</script>

<article id="TypeScript" class="doc">
	<h2 class="text-4xl">↳ TypeScript</h2>
	<p class="pb-3">
		For better developer experience and type-safety while writing p5-svelte sketches, a <code
			>Sketch</code
		>
		type is exposed from <code>p5-svelte</code>:
	</p>
	<CodeBlock code={tsImportExample} lang="ts" />

	<section id="sketch-usage-example">
		<h3>Sketch Usage Example</h3>
		<CodeBlock code={tsExampleSketch} isSketch lang="svelte-ts" />
	</section>

	<section id="sketch-type-def">
		<h3>Sketch Type Definition</h3>
		<p>
			For reference, here is the typedef under the hood - it's admittedly a simple passthrough to
			the p5 type defs:
		</p>
		<CodeBlock code={sketchType} lang="ts" />
	</section>

	<section id="intellisense">
		<h3>Intellisense</h3>
		<p>
			Not using TypeScript? No worries - you can leverage your IDE's intellisense with jsdoc type
			hints:
		</p>
		<CodeBlock code={jsIntellisenseSketch} lang="ts" />
	</section>
</article>
