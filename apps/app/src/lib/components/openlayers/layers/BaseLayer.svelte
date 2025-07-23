<script lang='ts'>
  import type BaseLayer from 'ol/layer/Base';
  import type { Options } from 'ol/layer/Base';
  import type { Snippet } from 'svelte';
  import type { OpenLayersContext } from '../../../context/openlayers';
  import LayerGroup from 'ol/layer/Group';
  import { getContext, setContext } from 'svelte';
  import { OPENLAYERS_CONTEXT_KEY } from '../../../context/openlayers';
  import BaseObject from '../BaseObject.svelte';

  const context = getContext<OpenLayersContext>(OPENLAYERS_CONTEXT_KEY);

  const {
    instance,
    children,
    ...restProps
  }: {
    instance: BaseLayer;
    children?: Snippet;
  } & Options = $props();

  $effect.pre(() => {
    if (!instance) {
      return;
    }

    const layer = context.getParentLayer?.();
    if (layer instanceof LayerGroup) {
      layer.getLayers().push(instance);
      return;
    }

    context.getMap().addLayer(instance);
  });

  setContext<OpenLayersContext>(OPENLAYERS_CONTEXT_KEY, {
    ...context,
    getParentLayer: () => instance,
  });
</script>

<BaseObject {instance} {...restProps}>
  {@render children?.()}
</BaseObject>
