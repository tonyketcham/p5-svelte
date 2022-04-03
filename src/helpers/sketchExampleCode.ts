export type Language = 'svelte' | 'svelte-ts' | 'ts' | 'js';

export function sketchExampleCode(sketch: string, lang: Language): string {
	if (lang === 'svelte') {
		return `<script>
  import P5 from "p5-svelte";
  
  const sketch = ${sketch}
</script>

<P5 {sketch} />`;
	} else if (lang === 'svelte-ts') {
		return `<script lang="ts">
  import P5, { type Sketch } from "p5-svelte";

  const sketch: Sketch = ${sketch}
</script>

<P5 {sketch} />`;
	}
}
