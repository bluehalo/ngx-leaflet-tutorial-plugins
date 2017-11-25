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
