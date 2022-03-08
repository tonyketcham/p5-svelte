<script>
	import P5 from '$lib/P5.svelte';
	import CodeBlock from '../../components/CodeBlock.svelte';

	const sketch = `(p5) => {
		p5.setup = () => {
			p5.createCanvas(865, 400, p5.WEBGL);
		};

		p5.draw = () => {
			p5.background(0);
			let radius = p5.width * 1.5;

			//drag to move the world.
			p5.orbitControl();

			p5.normalMaterial();
			p5.translate(0, 0, -600);
			for (let i = 0; i <= 12; i++) {
				for (let j = 0; j <= 12; j++) {
					p5.push();
					let a = (j / 12) * p5.PI;
					let b = (i / 12) * p5.PI;
					p5.translate(
						p5.sin(2 * a) * radius * p5.sin(b),
						(p5.cos(b) * radius) / 2,
						p5.cos(2 * a) * radius * p5.sin(b)
					);
					if (j % 2 === 0) {
						p5.cone(30, 30);
					} else {
						p5.box(30, 30, 30);
					}
					p5.pop();
				}
			}
		};
	};`;
	const sketchFunct = eval(sketch);
</script>

<article class="flex flex-col space-y-3">
	<h2 class="text-4xl">◎ 3D: Orbit Control</h2>
	<p>Click and drag on the canvas for orbit control; it allows you to move around the world.</p>
	<p>
		Adapted from <a href="https://p5js.org/examples/3d-orbit-control.html" target="_blank"
			>this p5 example</a
		>.
	</p>
	<h3 class="text-2xl text-p5">Sketch</h3>
	<div class="border border-p5/40 rounded-md overflow-hidden">
		<P5 sketch={sketchFunct} />
	</div>
	<section class="pt-3">
		<h3 class="text-2xl text-p5">Code</h3>
		<CodeBlock isSketch code={sketch} />
	</section>
</article>
