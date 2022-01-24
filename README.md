[![Build CI](https://github.com/tonyketcham/p5-svelte/actions/workflows/build.yml/badge.svg)](https://github.com/tonyketcham/p5-svelte/actions/workflows/build.yml)
[![npm version](https://badge.fury.io/js/p5-svelte.svg)](https://badge.fury.io/js/p5-svelte)

<h1 align="center">🧙‍♂️ p5-Svelte 🕸
<div align="center">
<img src="https://res.cloudinary.com/practicaldev/image/fetch/s--5L4QI4B_--/c_limit%2Cf_auto%2Cfl_progressive%2Cq_66%2Cw_880/https://dev-to-uploads.s3.amazonaws.com/i/ozuet5qpew6t9rup6o4p.gif" alt="10print made using p5-svelte" width="265" height="265" />
</div>
</h1>
<p>

Trying to get <a href="https://p5js.org/">p5</a> up and running in [Svelte](https://svelte.dev/) can be a pain. So here's an absolutely dead simple way of tossing it into your project.

The API is super simple; you get a <code>P5</code> component which accepts a <code>sketch</code> prop. You can make use of Svelte's reactivity system to bind props or params within your p5 sketch just as you would with regular Svelte! You can even have multiple p5 components per page without any scoping issues!

🌱 <a href="https://svelte.dev/repl/c5fd1d8347cd4e47afe0e519aedbb3a5?version=3.31.2" target="_blank">Simple Demo</a>

</p>

## Usage

Install:

```ps
pnpm i p5-svelte
```

Depending on your environment, you may be alerted upon installing `p5-svelte` that `p5` is a required peer dependency which you must install yourself. Thus do:

```ps
pnpm i -D p5
```

Now add `p5-svelte` to your project (ex. `src/App.svelte`):

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

### Output

![using Svelte's reactivity system to bind parameters to a p5 sketch](https://dev-to-uploads.s3.amazonaws.com/i/ajyz894enhdgdvot441x.gif)

<!-- <img align="right" src="https://dev-to-uploads.s3.amazonaws.com/i/ajyz894enhdgdvot441x.gif" alt="using Svelte's reactivity system to bind parameters to a p5 sketch" width="265" height="265" /> -->

It's that easy!

## p5.js instance mode

Svelte doesn't allow us to globally expose the p5 library by installing it to the `window` (which is how p5 is commonly installed in vanilla js projects). Therefore, p5 must be used in instance mode with this component. That means you'll have to call library functions with a `p5.` preceding them like in the example above.

## Debug Mode

You can access the internals of your p5 instance and the available native classes that `p5-svelte` automatically makes available to your project via passing the `debug` prop:

```svelte
<P5 {sketch} debug/>
```

## Events

The `<P5/>` component emits a few events you can listen to.

### `ref`

Emits a reference to the DOM element target which the p5 instance mounts to.

### `init`

This event fires on init of the p5 project instance, emitting a reference to that p5 project instance object.
