import * as L from 'leaflet';
declare module 'leaflet' {
  namespace control {
    function coordinates(v: any);
  }
}
