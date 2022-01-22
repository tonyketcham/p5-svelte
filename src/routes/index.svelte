<script>
	import P5 from '$lib/P5.svelte';

	const sketch = (p5) => {
		let x = 0;
		let y = 0;
		let size = 10;
		let threshold = 0;

		p5.setup = () => {
			p5.createCanvas(400, 400);
		};

		p5.draw = () => {
			p5.stroke(0);
			threshold = p5.random(1);

			if (threshold < 0.1) p5.line(x, y, x + size, y + size);
			else if (0.505 > threshold && threshold > 0.5) p5.line(x, y, x, y + size);
			else p5.line(x, y + size, x + size, y);

			x = x + size;
			if (x > p5.width) {
				x = 0;
				y = y + size;
			}
		};
	};
</script>

<svelte:head>
	<title>p5-svelte</title>
</svelte:head>

<main class="h-full grid place-items-center font-mono bg-blue-100">
	<section>
		<h1 class="text-2xl m-3 text-center">p5-svelte</h1>
		<P5 {sketch} debug />
	</section>
</main>
