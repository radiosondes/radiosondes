<script lang='ts'>
  import type { ViewOptions } from 'ol/View';
  import type { Snippet } from 'svelte';
  import type { OpenLayersContext } from '../../context/openlayers';
  import View from 'ol/View';
  import { getContext, onMount } from 'svelte';
  import { OPENLAYERS_CONTEXT_KEY } from '../../context/openlayers';
  import BaseObject from './BaseObject.svelte';

  const context = getContext<OpenLayersContext>(OPENLAYERS_CONTEXT_KEY);

  let instance = $state<View>();

  const {
    children,
    ...restProps
  }: {
    children?: Snippet;
  } & ViewOptions = $props();

  onMount(() => {
    instance = new View(restProps);

    const map = context.getMap();
    if (!map) {
      throw new Error('View must be a child of a Map component');
    }

    map.setView(instance);
  });

  $effect.pre(() => {
    instance?.setProperties(restProps);
  });
</script>

{#if instance}
  <BaseObject {instance} {...restProps}>
    {@render children?.()}
  </BaseObject>
{/if}
