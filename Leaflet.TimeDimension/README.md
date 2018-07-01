# Leaflet.TimeDimension

This project is a demonstration of using the Leaflet.TimeDimension library with @asymmetrik/ngx-leaflet and @angular/cli.
This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 6.0.8.


## Overview

1. Start with a working @angular/cli project that has ngx-leaflet set up and installed - [tutorial](https://www.asymmetrik.com/ngx-leaflet-tutorial-angular-cli/), [github](https://github.com/Asymmetrik/ngx-leaflet-tutorial-ngcli)
2. Install the new dependencies
   ```yarn add leaflet-timedimension iso8601-js-period```
3. Modify angular.json to add the stylesheet and global js scripts. At a minimum, we need iso8601-js-period to be global because it is used by the Leaflet.TimeDimension library. 
   ```
   ...
      "styles": [
        "styles.css",
        "./node_modules/leaflet/dist/leaflet.css",
        "./node_modules/leaflet-timedimension/dist/leaflet.timedimension.control.css"
      ],
      "scripts": [
        "./node_modules/iso8601-js-period/iso8601.js"
      ],
   ...
   ```
4. Add a ./src/typings.d.ts file with the following type definitions (this is a horrible type definition, but we're just trying to get this working):
   ```
   import * as L from 'leaflet';
   declare module 'leaflet' {
      var timeDimension: any;
   }
   ```
5. Component template. Just adding a layers binding so we can add the timeDimension layer:
   ```
   <div class="map"
        leaflet
        [leafletOptions]="options"
        [leafletLayers]="layers"></div>
   ```
6. Component class. By importing leaflet into 'L', and then doing a typeless import of the actual umd packaged bundle file for leaflet.timedimension, we should end up with a scoped L variable that has been extended by leaflet.timedimension:
   ```
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

     baseLayer = L.tileLayer.wms('https://ogcie.iblsoft.com/metocean/wms', {
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
       this.baseLayer,
       this.tdWmsLayer
     ];

   }
   ```

7. Run the example using ng serve and go to http://localhost:4200.


## @angular/cli Usage

### Development server

Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The app will automatically reload if you change any of the source files.

### Further help

To get more help on the Angular CLI use `ng help` or go check out the [Angular CLI README](https://github.com/angular/angular-cli/blob/master/README.md).
