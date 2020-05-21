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
  selector: 'app-basics',
  templateUrl: './basics.page.html',
  styleUrls: ['./basics.page.scss'],
})
export class BasicsPage implements OnInit {
  public title: string = 'Hello';
  public description: string = 'world';
  map: GoogleMap;
  data: any;
  markers: Marker[] = [];

  constructor(private platform: Platform) {
    this.platform.ready().then(() => {

      Environment.setEnv({
        'API_KEY_FOR_BROWSER_RELEASE': 'AIzaSyBzTWTKaMEeABaeBSa3_E6ZMxseK4xXl4k',
        'API_KEY_FOR_BROWSER_DEBUG': 'AIzaSyBzTWTKaMEeABaeBSa3_E6ZMxseK4xXl4k'  // optional
      });

      this.loadMap();
    });
  }

  ngOnInit() {
    console.log("basic page");
  }

  async loadMap() {

    const GOOGLE_PLEX: ILatLng = {
      lat: 37.422034,
      lng: -122.0862677
    };
    this.map = GoogleMaps.create('map_canvas', {
      'camera': {
        'target': GOOGLE_PLEX,
        zoom: 17,
        tilt: 30
      }
    });

    const marker: Marker = this.map.addMarkerSync({
      'title': 'Hello GoogleMap',
      'animation': 'DROP',
      'position': GOOGLE_PLEX
    });
    //
    // ElevationService.getElevationAlongPath({
    //   samples: 15,
    //   path: [{
    //     lat: 37.420867,
    //     lng: -122.082470
    //   },
    //   {
    //     lat: 37.421122,
    //     lng: -122.087780
    //   }]
    // }).then((result: any) => {
    //   console.log(result);
    // });

  }
  async loadMap2() {

    const OVERALL_BOUNDS: ILatLng[] = [
      {
        'lat': 34.335183,
        'lng': 132.0857563
      },
      {
        'lat': 32.6957,
        'lng': 135.0740383
      }
    ];

    // Display a map fit bounds to containing the Shikoku
    this.map = GoogleMaps.create('map_canvas', {
      'camera': {
        'target': OVERALL_BOUNDS
      },
      'preferences': {
        'gestureBounds': OVERALL_BOUNDS
      }
    });
    //
    // // Load `assets/shikoku88.geojson`
    // const data: any = await this.loadData();
    //
    // data.features.forEach((feature: any) => {
    //   this.markers.push(this.map.addMarkerSync({
    //     'position': {
    //       'lat': feature.geometry.coordinates[1],
    //       'lng': feature.geometry.coordinates[0]
    //     },
    //     'properties': feature.geometry.properties
    //   }));
    // });
  }

  async loadData(): Promise<any> {
    return fetch('./assets/shikoku88.geojson')
          .then(
            function(response) {
              if (response.status !== 200) {
                throw new Error('Looks like there was a problem. Status Code: ' +
                  response.status);
              }

              return response.json();
            }
          );
  }

}
