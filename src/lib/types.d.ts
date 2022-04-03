import type p5 from 'p5';

/**
 * A p5 instance, re-exported from `@types/p5`.
 */
export type p5 = p5;

/**
 * A closure representing a p5 sketch in [Instance Mode](https://github.com/processing/p5.js/wiki/Global-and-instance-mode).
 *
 * Within the closure you can set optional `preload()`, `setup()`, and/or `draw()` properties on the given p5 instance.
 */
export type Sketch = (sketch: p5) => void;
