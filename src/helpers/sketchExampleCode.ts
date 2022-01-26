export function sketchExampleCode(sketch: string): string {
	return `<script>
  import P5 from "$lib/P5.svelte";
  
  const sketch = ${sketch}
  </script>
  
  <P5 {sketch} />`;
}
