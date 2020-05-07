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
      await (new Promise((resolve) => {
        const instance: any = setInterval(() => {
          if (document.querySelectorAll('#' + divId).length > 0) {
            clearInterval(instance);
            resolve();
          }
        }, 100);
      }));
      await this.map.setDiv(divId);
      await (new Promise((resolve) => {
        setTimeout(resolve, 100); // for secure.
      }));
      await this.map.setOptions(options);
    } else {
      await this._loadMap(divId, options);
    };
    return Promise.resolve(this.map);
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
        resolve();
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
        'tilt': 0,
        'padding': 0
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
    await this.map.setDiv();
    await this.map.clear();
  }
}
