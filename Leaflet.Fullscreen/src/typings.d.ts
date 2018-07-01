import * as L from 'leaflet';
declare module 'leaflet' {
  namespace control {
    function fullscreen(options?: any): any;
  }
}
