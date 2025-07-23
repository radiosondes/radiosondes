<script lang='ts'>
  import type { Snippet } from 'svelte';
  import type { HTMLAttributes } from 'svelte/elements';
  import type { OpenLayersContext } from '../../context/openlayers';
  import { Map } from 'ol';
  import { onMount, setContext } from 'svelte';
  import { OPENLAYERS_CONTEXT_KEY } from '../../context/openlayers';

  import 'ol/ol.css';

  let target: HTMLDivElement;
  let map: Map;

  let mounted = $state(false);

  const {
    children,
    ...restProps
  }: {
    children?: Snippet;
  } & HTMLAttributes<HTMLDivElement> = $props();

  onMount(() => {
    map = new Map({ target });
    mounted = true;
  });

  setContext<OpenLayersContext>(OPENLAYERS_CONTEXT_KEY, {
    getMap: () => map,
  });
</script>

<div bind:this={target} {...restProps}>
  {#if mounted}
    {@render children?.()}
  {/if}
</div>
