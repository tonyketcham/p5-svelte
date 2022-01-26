<script lang="ts">
	import Highlight from 'svelte-highlight';
	import typescript from 'svelte-highlight/src/languages/typescript';
	import blackMetalBathory from 'svelte-highlight/src/styles/synth-midnight-terminal-dark';
	import { sketchExampleCode } from '../helpers/sketchExampleCode';

	export let code;
	export let isSketch = false;
</script>

<svelte:head>
	{@html blackMetalBathory}
</svelte:head>

<div class="border border-opacity-10 border-white bg-gray-700 mb-3">
	<Highlight language={typescript} code={isSketch ? sketchExampleCode(code) : code} />
</div>
