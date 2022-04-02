<script lang="ts">
	import P5, { type Sketch, type p5 } from '$lib';

	const sketch: Sketch = (p5) => {
		p5.setup = () => {
			p5.createCanvas(400, 400);
		};
		p5.draw = () => {
			p5.background(255, 0, 0);
		};
	};
	let p5Instance: p5 | null = null;

	function handleInstance(e: CustomEvent) {
		p5Instance = e.detail;
		console.log(p5Instance);
	}

	$: p5InstanceIsAvailable = true;
</script>

<P5 {sketch} on:instance={handleInstance} />

<P5 existingProject={p5Instance} />
