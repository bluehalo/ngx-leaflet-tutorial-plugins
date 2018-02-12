/* SystemJS module definition */
declare var module: NodeModule;
interface NodeModule {
  id: string;
}

import * as L from 'leaflet';
declare module 'leaflet' {
  namespace Control {
    class BrowserPrint {
      constructor(options?: any);
      addTo(map: L.Map): any;
    }
  }
}
