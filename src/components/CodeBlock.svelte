<script lang="ts">
	import { HighlightAuto, HighlightSvelte } from 'svelte-highlight';
	import blackMetalBathory from 'svelte-highlight/src/styles/synth-midnight-terminal-dark';
	import { sketchExampleCode } from '../helpers/sketchExampleCode';
	import { copyToClipboard } from '$helpers/clipboard';
	import { toast } from '@zerodevx/svelte-toast';

	export let code: string;
	export let lang = 'svelte';
	export let isSketch = false;

	let innerCode: HTMLElement;

	async function copy() {
		const success = await copyToClipboard(innerCode.innerText);
		if (success) {
			toast.push('Copied to clipboard');
			return;
		}
		toast.push('Clipboard copy permission denied');
	}
</script>

<svelte:head>
	{@html blackMetalBathory}
</svelte:head>

<div class="relative border border-opacity-10 border-white bg-gray-700 mb-3">
	<div bind:this={innerCode}>
		{#if lang === 'svelte'}
			<HighlightSvelte code={isSketch ? sketchExampleCode(code) : code} />
		{:else}
			<HighlightAuto {code} />
		{/if}
	</div>
	<button class="absolute top-4 right-4" on:click={copy}>
		<span class="sr-only">copy</span><svg
			role="presentation"
			xmlns="http://www.w3.org/2000/svg"
			viewBox="0 0 24 24"
			fill="none"
			stroke="currentColor"
			stroke-width="2"
			stroke-linecap="round"
			stroke-linejoin="round"
			class="w-5 h-5 opacity-50 hover:opacity-100 focus:opacity-100 hover:text-p5 transition-all"
			><path
				d="M15.5 4H18a2 2 0 0 1 2 2v13a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2V6a2 2 0 0 1 2-2h2.5"
			/><path
				d="M8.621 3.515A2 2 0 0 1 10.561 2h2.877a2 2 0 0 1 1.94 1.515L16 6H8l.621-2.485z"
			/><path d="M9 12h6" /><path d="M9 16h6" /></svg
		></button
	>
</div>
