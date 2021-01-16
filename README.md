![CodeQL](https://github.com/tonyketcham/p5-svelte/workflows/CodeQL/badge.svg)
<h1 align="center">🧙‍♂️ p5-Svelte 🕸</h1>
<div>
<p>
  <img align="right" src="https://res.cloudinary.com/practicaldev/image/fetch/s--5L4QI4B_--/c_limit%2Cf_auto%2Cfl_progressive%2Cq_66%2Cw_880/https://dev-to-uploads.s3.amazonaws.com/i/ozuet5qpew6t9rup6o4p.gif" alt="10print made using p5-svelte" width="265" height="265" />


Trying to get <a href="https://p5js.org/">p5</a> up and running in [Svelte](https://svelte.dev/) can be a pain. So here's an absolutely dead simple way of tossing it into your project.

The API is super simple; you get a <code>P5</code> component which accepts a <code>sketch</code> prop. You can even have multiple p5 components per page without any scoping issues!
</p>
</div>


## Usage
Install:
```ps 
yarn add p5 p5-svelte
```
Add to your project (ex. `src/App.svelte`):
```svelte
<script>
  import P5 from 'p5-svelte';

  /**
  * This example implements the 10print algorithm
  * @see {@link https://10print.org/} to learn about it!
  * @param {p5} p5 instance mode
  */
  const sketch = (p5) => {
    let x = 0;
    let y = 0;
    let size = 15;
    let threshold = 0;

    p5.setup = () => {
      p5.createCanvas(400, 400);
    };

    p5.draw = () => {
      p5.stroke(1);
      threshold = p5.random(0.75);

      if (threshold < 0.1) p5.line(x, y, x + size, y + size);
      else if (0.505 > threshold > 0.5) p5.line(x, y, x, y + size);
      else p5.line(x, y + size, x + size, y);

      x = x + size;
      if (x > p5.width) {
        x = 0;
        y = y + size;
      }
    };
  };
</script>

<P5 {sketch} />

```

It's that easy!

## p5.js instance mode
Svelte doesn't allow us to globally expose the p5 library by installing it to the `window` (which is how p5 is commonly installed in vanilla js projects). Therefore, p5 must be used in instance mode with this component. That means you'll have to call library functions with a `p5.` preceding them like in the example above.
