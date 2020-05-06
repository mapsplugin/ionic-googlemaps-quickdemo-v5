import { Injectable } from '@angular/core';
import {
  GoogleMaps, GoogleMap, GoogleMapsEvent,
  GoogleMapOptions, Environment, MapTypeId
} from '@ionic-native/google-maps';
import { Platform } from '@ionic/angular';

@Injectable({
  providedIn: 'root'
})
export class MapService {
  map: GoogleMap;

  constructor(private platform: Platform) {}

  async attachMap(divId: string, options?: GoogleMapOptions): Promise<GoogleMap> {
    options = options || {};

    await this.platform.ready();
    if (this.map) {
      return (new Promise((resolve) => {
        setTimeout(() => {
          this.map.setDiv(divId);
          resolve();
        }, 1000);
      }))
      .then(() => {
        return (new Promise((resolve) => {
          this.map.setOptions(options);
          resolve(this.map);
        }));
      });
    } else {
      return (new Promise((resolve) => {
        this._loadMap(divId, options).then((map: GoogleMap) => resolve);
      }));
    }
  }

  async _loadMap(divId: string, options?: GoogleMapOptions) {

    Environment.setEnv({
      'API_KEY_FOR_BROWSER_RELEASE': '(YOUR_API_KEY_IS_HERE)',
      'API_KEY_FOR_BROWSER_DEBUG': 'AIzaSyBzTWTKaMEeABaeBSa3_E6ZMxseK4xXl4k'  // optional
    });

    let mapOptions: GoogleMapOptions = options || {};
    this.map = GoogleMaps.create(divId, options);
    return (new Promise((resolve) => {
      this.map.one(GoogleMapsEvent.MAP_READY).then(() => {
        resolve(this.map);
      });
    }));
  }

  async detachMap() {
    this.map.setOptions({
      'mapType': MapTypeId.NORMAL,
      'camera': {
        'target': {
          'lat': 0,
          'lng': 0
        },
        'zoom': 0,
        'bearing': 0,
        'tilt': 0
      },
      'gestures': {
        'scroll': true,
        'tilt': true,
        'rotate': true,
        'zoom': true
      },
      'preferences': {
        'zoom': {
          'minZoom': 0,
          'maxZoom': 23
        },
        'building': false,
        'gestureBounds': null
      }
    });
    this.map.setDiv();
    await this.map.clear();
  }
}
