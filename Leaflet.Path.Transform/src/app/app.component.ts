import { Component } from '@angular/core';

import * as L from 'leaflet';
import 'leaflet-path-transform';
import 'leaflet-path-drag';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  polygon = L.polygon([
    [46, -121],
    [46, -122],
    [47, -122],
    [47, -121]
  ], { interactive: true, draggable: true, transform: true });

  options = {
    zoom: 8,
    center: L.latLng([ 46.879966, -121.726909 ])
  };

  layers = [
    L.tileLayer('http://{s}.google.com/vt/lyrs=s,h&x={x}&y={y}&z={z}', {
      maxZoom: 20,
      subdomains: ['mt0', 'mt1', 'mt2', 'mt3'],
      detectRetina: true
    }),
    this.polygon
  ];

  constructor() {

    // The polygon has to be added to the map for enable to work
    this.polygon.on('add', () => {
      this.polygon.transform.enable();
    });

  }

}
