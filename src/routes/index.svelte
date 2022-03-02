<script>
	import P5 from '$lib/P5.svelte';
	import RangeSlider from "svelte-range-slider-pips";

	let branchHeight = [150];

	const sketch = (p5) => {
		let theta;

		p5.setup = () => {
			p5.createCanvas(1200, 800);
		};

		p5.draw = () => {
			p5.background(0);
			p5.frameRate(60);
			p5.stroke('#ed225d');
			// p5.strokeWeight(2);
			// Let's pick an angle 0 to 90 degrees based on the mouse position
			let a = (p5.mouseX / p5.width) * 90;
			// Branch height based on Y axis
			// let branchHeight = 150 - ((p5.mouseY / p5.height) * 100);
			// Convert it to radians
			theta = p5.radians(a);
			// Start the tree from the bottom of the screen
			p5.translate(p5.width / 2, p5.height / 1.2);
			// Draw a line 120 pixels
			p5.line(0, 0, 0, -120);
			// Move to the end of that line
			p5.translate(0, -120);
			// Start the recursive branching!
			branch(branchHeight[0]);
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

<main class="h-full grid place-items-center font-mono overflow-hidden">
	<section class="flex flex-col relative justify-center items-center">

		<div class="absolute top-[40%] text-xl flex flex-col items-center gap-4">
			<img src="/logo.svg" alt="p5.js logo" class="w-[60px] z-50 drop-shadow-lg"/>
			<!-- <h1>p5-svelte</h1> -->
		</div>

		<P5 {sketch} debug/>

		<div class="z-50 relative bottom-36 flex flex-col gap-20 items-center">

			<div class="flex relative left-[46px] drop-shadow-lg">
				<a
					href="https://p5js.org/"
					aria-label="p5 Docs"
					class="transform hover:-translate-y-1 motion-safe:transition-transform"
				>
					<img src="/p5js.svg" alt="p5.js logo" width="100" class="block" />
				</a>
				<span class="my-auto ml-6 mr-4 text-2xl text-white/80">+</span>
				<a
					href="https://svelte.dev/"
					aria-label="Svelte Docs"
					class="transform hover:-translate-y-1 motion-safe:transition-transform"
				>
				<img src="/svelte-logo-horizontal.svg" alt="p5.js logo" width="200" />
				</a>
			</div>
			<!-- <div class="my-1 text-white">
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
			</div> -->
			<div class="w-[600px] text-center text-p5" style="--range-handle-focus:#ed225d; --range-handle:#ed225daa; --range-handle-inactive:#ed225d;--range-slider:#fff1">
				<RangeSlider bind:values={branchHeight} min={40} max={260} float/>
				<p>Branch height</p>
			</div>
		</div>
	</section>
</main>
