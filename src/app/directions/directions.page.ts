import { Component, ElementRef, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Platform } from '@ionic/angular';
import {
  GoogleMaps,
  GoogleMap,
  ILatLng,
  Marker,
  Environment,
  ElevationService,
  DirectionsService,
  TravelModeId,
  DirectionsResult
} from '@ionic-native/google-maps/ngx';
import { Chart } from 'chart.js';

@Component({
  selector: 'app-directions',
  templateUrl: './directions.page.html',
  styleUrls: ['./directions.page.scss'],
})
export class DirectionsPage implements OnInit {
  public title: string = 'Directions';
  public description: string = 'ルート検索のデモ';
  map: GoogleMap;
  data: any;
  markers: Marker[] = [];

  constructor(private platform: Platform) {
    this.platform.ready().then(() => {

      Environment.setEnv({
        'API_KEY_FOR_BROWSER_RELEASE': '(YOUR_API_KEY_IS_HERE)',
        'API_KEY_FOR_BROWSER_DEBUG': 'AIzaSyBzTWTKaMEeABaeBSa3_E6ZMxseK4xXl4k'  // optional
      });

      this.loadMap();
    });
  }

  ngOnInit() {
    console.log("basic page");
  }

  async loadMap() {

    const origin: ILatLng = {lat: 33.816839, lng: -118.3418066};
    const destination: ILatLng = {lat: 33.8088355, lng: -118.3406353};
    this.map = GoogleMaps.create('map_canvas', {
      'camera': {
        'target': [origin, destination]
      },
      'gestures': {
        'scroll': false,
        'tilt': false,
        'rotate': false,
        'zoom': false
      }
    });


    DirectionsService.route({
      origin,
      destination,
      'travelMode': TravelModeId.DRIVING
    }).then((result: DirectionsResult) => {
      console.log(result);

      this.map.addDirectionsRenderer({
        'directions': result
      });
    });

  }
  
}
