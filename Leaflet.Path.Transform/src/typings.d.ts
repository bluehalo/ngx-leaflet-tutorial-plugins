/* SystemJS module definition */
import {PolylineOptions} from "leaflet";
declare var module: NodeModule;
interface NodeModule {
  id: string;
}

import * as geojson from 'geojson';
import * as L from 'leaflet';
declare module 'leaflet' {

  function polygon(latlngs: LatLngExpression[] | LatLngExpression[][], options?: PathTransformPolylineOptions): Polygon;

  interface PathTransformPolylineOptions extends PolylineOptions {
    transform?: boolean;
    draggable?: boolean;
  }

  interface PathTransformOptions {
    handlerOptions?: L.PathOptions;
    boundsOptions?: L.PolylineOptions;
    rotateHandleOptions?: L.PolylineOptions;
    handleLength?: number;
    rotation?: boolean;
    scaling?: boolean;
    uniformScaling?: boolean;
  }

  interface Polygon {
    transform: PathTransform;
  }

  interface PathTransform {
    enable(options?: PathTransformOptions);
    setOptions(options: PathTransformOptions)
  }

}
