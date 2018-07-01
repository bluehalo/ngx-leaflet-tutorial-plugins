import * as L from 'leaflet';
declare module 'leaflet' {
  namespace control {
    function browserPrint(options?: any): Control.BrowserPrint;
  }
  namespace Control {
    interface BrowserPrint {
      addTo(map: L.Map): any;
    }
  }
}
