<script lang='ts'>
  import type BaseObject from 'ol/Object';
  import type { Snippet } from 'svelte';
  import type { OpenLayersContext } from '../../context/openlayers';
  import { getContext, onMount, setContext } from 'svelte';
  import { OPENLAYERS_CONTEXT_KEY } from '../../context/openlayers';

  const context = getContext<OpenLayersContext>(OPENLAYERS_CONTEXT_KEY);

  const {
    instance,
    children,
    ...restProps
  }: {
    instance: BaseObject;
    children?: Snippet;
  } = $props();

  onMount(() => {
    return () => {
      instance?.dispose();
    };
  });

  $effect.pre(() => {
    instance?.setProperties(restProps);
  });

  setContext<OpenLayersContext>(OPENLAYERS_CONTEXT_KEY, {
    ...context,
    getParent: () => instance,
  });
</script>

{@render children?.()}
