![CodeQL](https://github.com/tonyketcham/p5-svelte/workflows/CodeQL/badge.svg)
![Node.js CI Build](https://github.com/tonyketcham/p5-svelte/workflows/Node.js%20CI/badge.svg)
[![npm version](https://badge.fury.io/js/p5-svelte.svg)](https://badge.fury.io/js/p5-svelte)
<h1 align="center">🧙‍♂️ p5-Svelte 🕸</h1>
<div>
<p>
  <img align="right" src="https://res.cloudinary.com/practicaldev/image/fetch/s--5L4QI4B_--/c_limit%2Cf_auto%2Cfl_progressive%2Cq_66%2Cw_880/https://dev-to-uploads.s3.amazonaws.com/i/ozuet5qpew6t9rup6o4p.gif" alt="10print made using p5-svelte" width="265" height="265" />


Trying to get <a href="https://p5js.org/">p5</a> up and running in [Svelte](https://svelte.dev/) can be a pain. So here's an absolutely dead simple way of tossing it into your project.

The API is super simple; you get a <code>P5</code> component which accepts a <code>sketch</code> prop. You can make use of Svelte's reactivity system to bind props or params within your p5 sketch just as you would with regular Svelte! You can even have multiple p5 components per page without any scoping issues!

🌱 <a href="https://svelte.dev/repl/c5fd1d8347cd4e47afe0e519aedbb3a5?version=3.31.2" target="_blank">Simple Demo</a>
</p>
</div>


## Usage
Install:
```ps 
yarn add p5 p5-svelte
```
Add to your project (ex. `src/App.svelte`):
<div>
  <div align="right">
    <img align="right" src="https://dev-to-uploads.s3.amazonaws.com/i/ajyz894enhdgdvot441x.gif" alt="using Svelte's reactivity system to bind parameters to a p5 sketch" width="265" height="265" />
  </div>

```svelte
<script>
  import P5 from 'p5-svelte';
  let width = 55;
  let height = 55;

  const sketch = (p5) => {
    p5.setup = () => {
      p5.createCanvas(400, 400);
    };

    p5.draw = () => {
      p5.ellipse(p5.width / 2, p5.height / 2, width, height);
    };
  };
</script>

<label>
  Width
  <input type="range" bind:value={width} min="100" max="1000" step="0.01" />
  {width}
</label>

<label>
  Height
  <input type="range" bind:value={height} min="100" max="1000" step="0.01" />
  {height}
</label>

<P5 {sketch} />
```
</div>
It's that easy!

## p5.js instance mode
Svelte doesn't allow us to globally expose the p5 library by installing it to the `window` (which is how p5 is commonly installed in vanilla js projects). Therefore, p5 must be used in instance mode with this component. That means you'll have to call library functions with a `p5.` preceding them like in the example above.
