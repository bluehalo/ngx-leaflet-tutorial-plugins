import { Component } from '@angular/core';
import * as L from 'leaflet';

import '../../node_modules/leaflet.browser.print/dist/leaflet.browser.print.min.js';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  options = {
    layers: [
      L.tileLayer('http://{s}.google.com/vt/lyrs=m&x={x}&y={y}&z={z}', {
        maxZoom: 20,
        subdomains: ['mt0', 'mt1', 'mt2', 'mt3'],
        detectRetina: true
      })
    ],
    zoom: 7,
    center: L.latLng([ 46.879966, -121.726909 ])
  };

  onMapReady(map: L.Map) {
    const control = new L.Control.BrowserPrint({
      title: 'Imprimer la carte',
      printModesNames: {
        Portrait: 'Portrait',
        Landscape: 'Paysage',
        Auto: 'Auto',
        Custom: 'Séléctionnez la zone'
      }
    });

    control.addTo(map);
  }
}
