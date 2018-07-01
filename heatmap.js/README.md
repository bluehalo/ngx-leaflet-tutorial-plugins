# heatmap.js

This project is a demonstration of using the heatmap.js library with @asymmetrik/ngx-leaflet and @angular/cli.
This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 6.0.8.


## Overview

1. Start with a working @angular/cli project that has ngx-leaflet set up and installed - [tutorial](https://www.asymmetrik.com/ngx-leaflet-tutorial-angular-cli/), [github](https://github.com/Asymmetrik/ngx-leaflet-tutorial-ngcli)
2. Install the new dependencies
   ```yarn add heatmap.js leaflet-heatmap```
3. Modify angular.json to add the global js scripts. We need all three since there are global dependencies between them.   
   ```
   ...
   "scripts": [
     "./node_modules/leaflet/dist/leaflet.js",
     "./node_modules/heatmap.js/build/heatmap.js",
     "./node_modules/leaflet-heatmap/leaflet-heatmap.js"
   ],
   ...
   ```
4. Component template. Just adding a layers binding so we can add the polygon layer and adding the map ready callback so we can register a mousemove handler:
   ```
   <div class="map"
        leaflet
        [leafletOptions]="options"
        (leafletMapReady)="onMapReady($event)">
   </div>
   ```
5. Component class. Since everything is globally imported, we can just declare L and HeatmapOverlay:
   ```
   import { Component } from '@angular/core';
   
   declare var L;
   declare var HeatmapOverlay;
   
   @Component({
     selector: 'app-root',
     templateUrl: './app.component.html',
     styleUrls: ['./app.component.css']
   })
   export class AppComponent {
   
     data = {
       data: []
     };
   
     heatmapLayer = new HeatmapOverlay({
       radius: 2,
       maxOpacity: 0.8,
       scaleRadius: true,
       useLocalExtrema: true,
       latField: 'lat',
       lngField: 'lng',
       valueField: 'count'
     });
   
     options = {
       layers: [
         L.tileLayer('http://{s}.google.com/vt/lyrs=s,h&x={x}&y={y}&z={z}', {
           maxZoom: 20,
           subdomains: ['mt0', 'mt1', 'mt2', 'mt3'],
           detectRetina: true
         }),
         this.heatmapLayer
       ],
       zoom: 4,
       center: L.latLng([ 46.879966, -121.726909 ])
     };
   
     onMapReady(map: L.Map) {
       map.on('mousemove', (event: L.LeafletMouseEvent) => {
         this.data.data.push({
           lat: event.latlng.lat,
           lng: event.latlng.lng,
           count: 1
         });
   
         this.heatmapLayer.setData(this.data);
       });
     }
   }
   ```

6. Run the example using ng serve and go to http://localhost:4200.


## @angular/cli Usage

### Development server

Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The app will automatically reload if you change any of the source files.

### Further help

To get more help on the Angular CLI use `ng help` or go check out the [Angular CLI README](https://github.com/angular/angular-cli/blob/master/README.md).
