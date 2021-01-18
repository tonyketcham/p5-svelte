import svelte from 'rollup-plugin-svelte';
import { nodeResolve } from '@rollup/plugin-node-resolve';
import includePaths from 'rollup-plugin-includepaths';
import pkg from './package.json';

const name = pkg.name
  .replace(/^(@\S+\/)?(svelte-)?(\S+)/, '$3')
  .replace(/^\w/, (m) => m.toUpperCase())
  .replace(/-\w/g, (m) => m[1].toUpperCase());

let includePathOptions = {
  paths: ['es6'],
  include: {
    p5: './lib/p5.min.js', // include library in es6 modules
  },
  external: ['p5'], // but don't bundle it in bundle.js
};

export default {
  input: 'src/index.js',
  output: [
    { file: pkg.module, format: 'es' },
    { file: pkg.main, format: 'umd', name },
  ],
  plugins: [svelte(), nodeResolve(), includePaths(includePathOptions)],
};
