import adapter from '@sveltejs/adapter-static';
import preprocess from 'svelte-preprocess';
import path from 'path';

/** @type {import('@sveltejs/kit').Config} */
const config = {
	// Consult https://github.com/sveltejs/svelte-preprocess
	// for more information about preprocessors
	preprocess: preprocess(),

	kit: {
		adapter: adapter(),
		prerender: {
			default: true,
		},
		vite: {
			optimizeDeps: {
				include: ['highlight.js/lib/core'],
			},
			resolve: {
				alias: {
					// these are the aliases and paths to them
					$components: path.resolve('./src/components'),
					$helpers: path.resolve('./src/helpers'),
				},
			},
		},
	},
};

export default config;
