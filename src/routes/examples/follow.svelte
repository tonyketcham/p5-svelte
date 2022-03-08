<script>
	import P5 from '$lib/P5.svelte';
	import CodeBlock from '../../components/CodeBlock.svelte';

	const sketch = `(p5) => {
		let x = [],
			y = [],
			segNum = 6,
			segLength = 40;

		for (let i = 0; i < segNum; i++) {
			x[i] = 0;
			y[i] = 0;
		}

		p5.setup = () => {
			p5.createCanvas(865, 400);
			p5.strokeWeight(12);
			p5.stroke('#ed225d80');
		};

		p5.draw = () => {
			p5.background(0);
			dragSegment(0, p5.mouseX, p5.mouseY);
			for (let i = 0; i < x.length - 1; i++) {
				dragSegment(i + 1, x[i], y[i]);
			}
		};

		function dragSegment(i, xin, yin) {
			const dx = xin - x[i];
			const dy = yin - y[i];
			const angle = p5.atan2(dy, dx);
			x[i] = xin - p5.cos(angle) * segLength;
			y[i] = yin - p5.sin(angle) * segLength;
			segment(x[i], y[i], angle);
		}

		function segment(x, y, a) {
			p5.push();
				p5.translate(x, y);
				p5.rotate(a);
				p5.line(0, 0, segLength, 0);
			p5.pop();
		}
	};`;

	const sketchFunct = eval(sketch);
</script>

<article class="flex flex-col space-y-3">
	<h2 class="text-4xl">↬ Follow</h2>
	<p>
		A segmented line follows the mouse. The relative angle from each segment to the next is
		calculated with atan2() and the position of the next is calculated with sin() and cos().
	</p>
	<p>
		Adapted from <a href="https://p5js.org/examples/interaction-follow-3.html" target="_blank"
			>this p5 example</a
		>.
	</p>
	<h3 class="text-2xl text-p5">Sketch</h3>
	<div class=" border border-p5/40 rounded-md overflow-hidden">
		<P5 sketch={sketchFunct} />
	</div>
	<section class="pt-3">
		<h3 class="text-2xl text-p5">Code</h3>
		<CodeBlock isSketch code={sketch} />
	</section>
</article>
