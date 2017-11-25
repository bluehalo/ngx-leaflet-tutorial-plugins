# Leaflet.Path.Transform

This project is a demonstration of using the Leaflet.Path.Transform library with @asymmetrik/ngx-leaflet and @angular/cli.
This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 1.4.9.


## Overview

1. Start with a working @angular/cli project that has ngx-leaflet set up and installed - [tutorial](https://www.asymmetrik.com/ngx-leaflet-tutorial-angular-cli/), [github](https://github.com/Asymmetrik/ngx-leaflet-tutorial-ngcli)
2. Install the new dependencies
   ```npm install --save leaflet-path-transform leaflet-path-drag```
3. Update typings.d.ts to specify Leaflet.Path.Transform and Leaflet.Path.Drag types:
   ```
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
       dragging: PathDrag;
     }

     interface PathDrag {
       enable();
       disable();
     }

     interface PathTransform {
       enable(options?: PathTransformOptions);
       setOptions(options: PathTransformOptions)
     }
   }
   ```
4. Component template. Just adding a layers binding so we can add the polygon layer:
   ```
   <div class="map"
           leaflet
           [leafletOptions]="options"
           [leafletLayers]="layers"></div>
   ```
5. Component class. By importing leaflet into 'L', and then doing a typeless import of the actual umd packaged bundle file for leaflet-path-transform and leaflet-path-drag, we should end up with a scoped L variable that has been extended:
   ```
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
   
       // The polygon has to already be added to the map for enable to work
       this.polygon.on('add', () => {
         this.polygon.transform.enable();
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
