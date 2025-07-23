<script lang='ts'>
  import type { Options } from 'ol/layer/Layer';
  import type Layer from 'ol/layer/Layer';
  import type { Snippet } from 'svelte';
  import BaseLayer from './BaseLayer.svelte';

  const {
    instance,
    children,
    ...restProps
  }: {
    instance: Layer;
    children?: Snippet;
  } & Options = $props();
</script>

<BaseLayer {instance} {...restProps}>
  {@render children?.()}
</BaseLayer>
