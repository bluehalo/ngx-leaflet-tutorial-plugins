# Leaflet.Coordinates

This project is a demonstration of using the Leaflet.Coordinates library with @asymmetrik/ngx-leaflet and @angular/cli.
This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 6.0.8.


## Overview

1. Start with a working @angular/cli project that has ngx-leaflet set up and installed - [tutorial](https://www.asymmetrik.com/ngx-leaflet-tutorial-angular-cli/), [github](https://github.com/Asymmetrik/ngx-leaflet-tutorial-ngcli)
2. Install the new dependencies
   ```npm install --save leaflet.coordinates```
3. Modify .angular-cli.json to add the stylesheet and global js scripts. 
   ```
   ...
      "styles": [
        "styles.css",
        "../node_modules/leaflet/dist/leaflet.css",
        "../node_modules/leaflet.coordinates/dist/Leaflet.Coordinates-0.1.5.css"
      ],
   ...
   ```
4. Update typings.d.ts to open up leaflet.coordinates control to the leaflet module (this is a horrible type definition, but we're just trying to get this working):
   ```
   import * as L from 'leaflet';
   declare module 'leaflet' {
      namespace control {
          function coordinates(v: any);
        }
   }
   ```
5. Component template. Just adding a layers binding so we can add the timeDimension layer:
   ```
   <div class="map"
           leaflet
           [leafletOptions]="options"
           (leafletMapReady)="onMapReady"></div>
   ```
6. Component class. By importing leaflet into 'L', and then doing a typeless import of the actual global bundle file for leaflet.coordinates, we should end up with a scoped L variable that has been extended by leaflet.coordinates:
   ```
   import { Component } from '@angular/core';
   import * as L from 'leaflet';
   
   import '../../node_modules/leaflet.coordinates/dist/Leaflet.Coordinates-0.1.5.src.js';
   
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
       L.control.coordinates({}).addTo(map);
     }
   }
   ```

7. Run the example using ng serve and go to http://localhost:4200.


## @angular/cli Usage

### Development server

Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The app will automatically reload if you change any of the source files.

### Further help

To get more help on the Angular CLI use `ng help` or go check out the [Angular CLI README](https://github.com/angular/angular-cli/blob/master/README.md).
