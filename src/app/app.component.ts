import { Component } from '@angular/core';

import * as L from 'leaflet';
import '../../node_modules/iso8601-js-period/iso8601.js';
import '../../node_modules/leaflet-timedimension/dist/leaflet.timedimension.src.js';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  options = {
    zoom: 7,
    center: L.latLng([ 38.705, 1.15 ]),
    timeDimension: true,
    timeDimensionOptions: {
      timeInterval: "2014-09-30/2014-10-30",
      period: "PT1H"
    },
    timeDimensionControl: true
  };

  wmsLayer = L.tileLayer.wms('http://thredds.socib.es/thredds/wms/observational/hf_radar/hf_radar_ibiza-scb_codarssproc001_aggregation/dep0001_hf-radar-ibiza_scb-codarssproc001_L1_agg.nc', {
    layers: 'sea_water_velocity',
    format: 'image/png',
    transparent: true,
    attribution: 'SOCIB HF RADAR | sea_water_velocity'
  });

  tdWmsLayer = L.timeDimension.layer.wms(this.wmsLayer);
  layers = [
    L.tileLayer('http://{s}.google.com/vt/lyrs=m&x={x}&y={y}&z={z}', {
      maxZoom: 20,
      subdomains: ['mt0', 'mt1', 'mt2', 'mt3'],
      detectRetina: true
    }),
    this.tdWmsLayer
  ];

}
