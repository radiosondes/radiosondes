<script lang='ts'>
  import type { Options } from 'ol/layer/BaseTile';
  import type { Tile } from 'ol/source';
  import type { Snippet } from 'svelte';
  import TileLayer from 'ol/layer/Tile';
  import { onMount } from 'svelte';
  import Layer from './Layer.svelte';

  let instance = $state<TileLayer>();

  const {
    children,
    ...restProps
  }: { children?: Snippet } & Options<Tile> = $props();

  onMount(() => {
    instance = new TileLayer(restProps);
  });
</script>

{#if instance}
  <Layer {instance} {...restProps}>
    {@render children?.()}
  </Layer>
{/if}
