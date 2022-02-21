<br>

<div align="center">
<img src="https://github.com/tonyketcham/p5-svelte/raw/master/static/logo.svg" alt="p5-svelte logo" width="80" />
</div>

<h1 align="center">p5-Svelte</h1>

<p align="center">
<a href="https://github.com/tonyketcham/p5-svelte/actions/workflows/build.yml"><img src="https://img.shields.io/github/workflow/status/tonyketcham/p5-svelte/Build%20CI?logo=github" alt="Build CI"></a>
<a href="https://app.netlify.com/sites/p5-svelte/deploys"><img src="https://img.shields.io/netlify/7dd33ce7-b638-4540-83d1-4442ef026efc?logo=netlify&logoColor=white" alt="Netlify Status"></a>
<a href="https://www.npmjs.com/package/p5-svelte"><img src="https://img.shields.io/npm/v/p5-svelte?color=%23ed225d" alt="NPM version"></a>
</p>

Trying to get <a href="https://p5js.org/">p5</a> up and running in [Svelte](https://svelte.dev/) can be a pain. So here's an absolutely dead simple way of tossing it into your project.

The API is super simple; you get a <code>P5</code> component which accepts a <code>sketch</code> prop. You can make use of Svelte's reactivity system to bind props or params within your p5 sketch just as you would with regular Svelte! You can even have multiple p5 components per page without any scoping issues!

<p align="center">
<a href="https://svelte.dev/repl/c5fd1d8347cd4e47afe0e519aedbb3a5?version=3.31.2" target="_blank">🌱 Simple Demo</a>
</p>

## Usage

### Install:

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

### Output:

![using Svelte's reactivity system to bind parameters to a p5 sketch](https://dev-to-uploads.s3.amazonaws.com/i/ajyz894enhdgdvot441x.gif)

<!-- <img align="right" src="https://dev-to-uploads.s3.amazonaws.com/i/ajyz894enhdgdvot441x.gif" alt="using Svelte's reactivity system to bind parameters to a p5 sketch" width="265" height="265" /> -->

**It's that easy! 😃**

<br>

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
