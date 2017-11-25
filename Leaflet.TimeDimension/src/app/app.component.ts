import { Component } from '@angular/core';

import * as L from 'leaflet';
import '../../node_modules/leaflet-timedimension/dist/leaflet.timedimension.src.js';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  options = {
    zoom: 4,
    center: L.latLng([ 46.879966, -121.726909 ]),
    timeDimension: true,
    timeDimensionControl: true
  };

  baselayer = L.tileLayer.wms('https://ogcie.iblsoft.com/metocean/wms', {
    layers: 'foreground-lines',
    format: 'image/png',
    transparent: true,
    crs: L.CRS.EPSG4326
  });

  dataLayer = L.tileLayer.wms('https://ogcie.iblsoft.com/metocean/wms', {
    layers: 'gfs-temperature-isbl',
    format: 'image/png',
    opacity: 0.3,
    transparent: true,
    crs: L.CRS.EPSG4326,
    attribution: 'OGC MetOcean DWG Best Practice Example, IBL Software Engineering'
  });

  tdWmsLayer = L.timeDimension.layer.wms(this.dataLayer);
  layers = [
    this.baselayer,
    this.tdWmsLayer
  ];

}
