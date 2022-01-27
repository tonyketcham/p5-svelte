<script>
	import P5 from '$lib/P5.svelte';
	import CodeBlock from '../../components/CodeBlock.svelte';

	const sketch = `(p5) => {
		p5.setup = () => {
			p5.createCanvas(800, 400);
			p5.background(0);
		};

		p5.draw = () => {
			p5.translate(p5.width / 2, p5.height / 2);

			let v = p5.createVector(p5.random(-100, 100), p5.random(-100, 100));
			v.mult(p5.random(50, 100));

			p5.strokeWeight(1);
			p5.stroke(255, 200);
			p5.line(0, 0, v.x, v.y);
		};
	};`;

	const sketchFunct = eval(sketch);
</script>

<article class="flex flex-col space-y-3">
	<h2 class="text-4xl">Random Vectors</h2>
	<p>
		Adapted from Daniel Shiffman's <i>The Nature of Code</i>
		<a
			href="https://thecodingtrain.com/learning/nature-of-code/1.3-random-vector.html"
			target="_blank">example</a
		>.
	</p>
	<P5 sketch={sketchFunct} />
	<section class="pt-3">
		<h3 class="text-2xl text-p5">Code</h3>
		<CodeBlock isSketch code={sketch} />
	</section>
</article>
