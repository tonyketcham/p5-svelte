<script>
	import P5 from '$lib/P5.svelte';

	let branchHeight = 120;

	const sketch = (p5) => {
		let theta;

		p5.setup = () => {
			p5.createCanvas(1200, 800);
		};

		p5.draw = () => {
			p5.background(0);
			p5.frameRate(60);
			p5.stroke(237, 34, 93);
			// Let's pick an angle 0 to 90 degrees based on the mouse position
			let a = (p5.mouseX / p5.width) * 90;
			// Convert it to radians
			theta = p5.radians(a);
			// Start the tree from the bottom of the screen
			p5.translate(p5.width / 2, p5.height / 1.2);
			// Draw a line 120 pixels
			p5.line(0, 0, 0, -120);
			// Move to the end of that line
			p5.translate(0, -120);
			// Start the recursive branching!
			branch(branchHeight);
		};

		function branch(h) {
			// Each branch will be 2/3rds the size of the previous one
			h *= 0.66;

			// All recursive functions must have an exit condition!!!!
			// Here, ours is when the length of the branch is 2 pixels or less
			if (h > 2) {
				p5.push(); // Save the current state of transformation (i.e. where are we now)
				p5.rotate(theta); // Rotate by theta
				p5.line(0, 0, 0, -h); // Draw the branch
				p5.translate(0, -h); // Move to the end of the branch
				branch(h); // Ok, now call myself to draw two new branches!!
				p5.pop(); // Whenever we get back here, we "pop" in order to restore the previous matrix state

				// Repeat the same thing, only branch off to the "left" this time!
				p5.push();
				p5.rotate(-theta);
				p5.line(0, 0, 0, -h);
				p5.translate(0, -h);
				branch(h);
				p5.pop();
			}
		}
	};
</script>

<svelte:head>
	<title>p5-svelte</title>
</svelte:head>

<main class="h-full grid place-items-center font-mono">
	<section class="relative flex flex-col justify-center">
		<div class="z-50">
			<div class="flex justify-center pb-10 -mr-3 drop-shadow-lg">
				<a
					href="https://p5js.org/"
					aria-label="p5 Docs"
					class="transform hover:-translate-y-1 motion-safe:transition-transform"
				>
					<img src="/p5js.svg" alt="p5.js logo" width="100" class="block" />
				</a>
				<span class="my-auto ml-6 mr-4 text-2xl text-gray-100">+</span>
				<a
					href="https://svelte.dev/"
					aria-label="Svelte Docs"
					class="transform hover:-translate-y-1 motion-safe:transition-transform"
				>
					<img src="/svelte-logo-horizontal.svg" alt="p5.js logo" width="200" />
				</a>
			</div>
			<div class="my-1 text-white">
				<label for="branches">Branch height:</label>
				<input
					type="range"
					name="branches"
					id="branches"
					bind:value={branchHeight}
					min="0"
					max="200"
					class="drop-shadow-sm"
				/>
				<span>{branchHeight}</span>
			</div>
		</div>

		<P5
			{sketch}
			debug
			parentDivStyle="position: absolute; left: 0; right: 0; display: flex; justify-content: center;"
		/>
	</section>
</main>
