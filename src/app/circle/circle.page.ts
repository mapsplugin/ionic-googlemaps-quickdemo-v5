import { Component, OnInit, OnDestroy } from '@angular/core';
import {
  GoogleMaps,
  GoogleMap,
  GoogleMapsEvent,
  ILatLng,
  Circle,
  Marker,
  Spherical,
  Polygon
} from '@ionic-native/google-maps';
import { MapService } from '../map.service';

import { Platform } from '@ionic/angular';


@Component({
  selector: 'app-circle',
  templateUrl: './circle.page.html',
  styleUrls: ['./circle.page.scss'],
})
export class CirclePage implements OnInit, OnDestroy {

  map: GoogleMap;

  constructor(private platform: Platform,
    private mapService: MapService) { }

  ngOnInit() {
    this.loadMap();
  }

  ngOnDestroy() {
    this.mapService.detachMap();
  }

  async loadMap() {
    await this.platform.ready();
    // Environment.setEnv({
    //   'API_KEY_FOR_BROWSER_RELEASE': '(YOUR_API_KEY_IS_HERE)',
    //   'API_KEY_FOR_BROWSER_DEBUG': 'AIzaSyBzTWTKaMEeABaeBSa3_E6ZMxseK4xXl4k'  // optional
    // });
    let center: ILatLng = {"lat": 32, "lng": -97};

    let radius = 300;  // radius (meter)

    // Calculate the positions
    let positions: ILatLng[] = [0, 90, 180, 270].map((degree: number) => {
      return Spherical.computeOffset(center, radius, degree);
    });

    // this.map = GoogleMaps.create('map_canvas', {
    //   'camera': {
    //     'target': positions,
    //     'padding': 100
    //   },
    //   'gestures': {
    //     'scroll': false,
    //     'tilt': false,
    //     'rotate': false,
    //     'zoom': false
    //   }
    // });
    this.map = await this.mapService.attachMap('map_canvas', {
      'camera': {
        'target': positions,
        'padding': 20
      },
      'gestures': {
        'scroll': false,
        'tilt': false,
        'rotate': false,
        'zoom': false
      }
    });


    let marker: Marker = this.map.addMarkerSync({
      position: positions[0],
      draggable: true,
      title: 'Drag me!',
      disableAutoPan: true
    });
    marker.trigger(GoogleMapsEvent.MARKER_CLICK);

    let circle: Circle = this.map.addCircleSync({
      'center': center,
      'radius': radius,
      'strokeColor' : '#AA00FF',
      'strokeWidth': 5,
      'fillColor' : '#00880055'
    });

    marker.on('position_changed').subscribe((params: any) => {
      let newValue: ILatLng = <ILatLng>params[1];
      let newRadius: number = Spherical.computeDistanceBetween(center, newValue);
      circle.setRadius(newRadius);
    });
  }

}
