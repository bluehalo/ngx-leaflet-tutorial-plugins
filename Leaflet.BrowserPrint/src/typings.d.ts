/* SystemJS module definition */
declare var module: NodeModule;
interface NodeModule {
  id: string;
}

import * as L from 'leaflet';
declare module 'leaflet' {
  namespace control {
    function browserPrint(options?: any): any;
  }
}
