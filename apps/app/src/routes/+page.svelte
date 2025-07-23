<script>
  import { OSM } from 'ol/source';
  import TileLayer from '../lib/components/openlayers/layers/TileLayer.svelte';
  import Map from '../lib/components/openlayers/Map.svelte';
  import View from '../lib/components/openlayers/View.svelte';

</script>

<Map style='width: 100%; height: 60rem;'>
  <View center={[0, 0]} zoom={11} />
  <TileLayer source={new OSM()} />
</Map>
