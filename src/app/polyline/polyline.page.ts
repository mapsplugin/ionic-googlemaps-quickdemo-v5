import { Component, OnInit, OnDestroy } from '@angular/core';
import {
  GoogleMaps,
  GoogleMap,
  GoogleMapsEvent,
  Polyline,
  LatLng,
  ILatLng,
  Marker,
  Environment
} from '@ionic-native/google-maps';
import { MapService } from '../map.service';

@Component({
  selector: 'app-polyline',
  templateUrl: './polyline.page.html',
  styleUrls: ['./polyline.page.scss'],
})
export class PolylinePage implements OnInit, OnDestroy {

  map: GoogleMap;

  constructor(private mapService: MapService) { }

  ngOnInit() {
    this.loadMap();
  }

  ngOnDestroy() {
    this.mapService.detachMap();
  }

  async loadMap() {
    const HND_AIR_PORT: ILatLng = {lat: 35.548852, lng: 139.784086};
    const SFO_AIR_PORT: ILatLng = {lat: 37.615223, lng: -122.389979};
    const HNL_AIR_PORT: ILatLng = {lat: 21.324513, lng: -157.925074};
    const AIR_PORTS: ILatLng[] = [
      HND_AIR_PORT,
      HNL_AIR_PORT,
      SFO_AIR_PORT
    ];

    this.map = await this.mapService.attachMap('map_canvas', {
      'camera': {
        'target': AIR_PORTS
      },
      'gestures': {
        'scroll': false,
        'tilt': false,
        'rotate': false,
        'zoom': false
      }
    });

    const polyline: Polyline = this.map.addPolylineSync({
      'points': AIR_PORTS,
      'color': '#AA00FF',
      'width': 10,
      'geodesic': true,
      'clickable': true  // clickable = false in default
    });

    polyline.on(GoogleMapsEvent.POLYLINE_CLICK).subscribe((params: any) => {
      const position: LatLng = <LatLng>params[0];

      const marker: Marker = this.map.addMarkerSync({
        position: position,
        title: position.toUrlValue(),
        disableAutoPan: true
      });
      marker.showInfoWindow();
    });
  }

}
