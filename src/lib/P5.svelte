<script lang="ts">
	import { onMount, onDestroy, createEventDispatcher } from 'svelte';
	import type p5 from 'p5';
	import type { Sketch } from '$lib/types';

	// Component props
	export let target: HTMLElement = undefined;
	export let sketch: Sketch = undefined;
	export let parentDivStyle: string = 'display: block;';
	export let debug = false;

	let project: p5 = undefined;

	// Event generation
	const event = createEventDispatcher();
	const dispatch = {
		ref() {
			event('ref', target);
		},
		instance() {
			event('instance', project);
		},
	};

	/**
	 * Creates a reference for the p5 instance to render within
	 * @param {HTMLElement} node
	 */
	function ref(node: HTMLElement) {
		target = node;
		return {
			destroy() {
				target = undefined;
			},
		};
	}

	function augmentClasses<NativeClasses extends [string, Record<string, any>][]>(
		instance: p5,
		classes: NativeClasses
	) {
		classes.forEach(([key, value]) => (instance[key] = value));
		return instance;
	}

	/**
	 * When the client loads, create the p5 instance
	 */
	onMount(async () => {
		const library = await import('p5');
		const { default: p5 } = library;

		const entries = Object.entries(library);
		const nativeClasses = entries.filter(
			([key, value]) => value instanceof Function && key[0] !== '_' && key !== 'default'
		);

		if (debug) {
			console.log('available p5 native classes', nativeClasses);
		}

		project = new p5((instance: p5) => {
			instance = augmentClasses(instance, nativeClasses);

			if (debug) {
				console.log('p5 instance', instance);
			}

			// Set up a global object to capture this instance.
			// @ts-ignore
			window._p5Instance = instance;
			return sketch(instance);
		}, target);

		// Initial event dispatching
		dispatch.ref();
		dispatch.instance();
	});

	/**
	 * Bind the lifecycle of the p5 instance with the component
	*/
	onDestroy(() => {
		if (project) {
			project.remove()
			project = undefined
		}
	})
</script>

<div use:ref style={parentDivStyle} class="m-0" />
