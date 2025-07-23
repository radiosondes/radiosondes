import type { Map } from 'ol';
import type BaseLayer from 'ol/layer/Base';
import type BaseObject from 'ol/Object';

export interface OpenLayersContext {
  getMap: () => Map;
  getParent?: () => BaseObject;
  getParentLayer?: () => BaseLayer;
}

export const OPENLAYERS_CONTEXT_KEY = 'ol';
