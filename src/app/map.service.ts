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
      await new Promise((resolve) => {
        setTimeout(resolve, 100);
      });
      if (options) {
        options.mapType = options.mapType || MapTypeId.NORMAL;
        await this.map.setOptions(options);
      }
    } else {
      await this.platform.ready();
      await this._loadMap(divId, options);
    }
    return Promise.resolve(this.map);
  }

  _loadMap(divId: string, options?: GoogleMapOptions) {

    Environment.setEnv({
      'API_KEY_FOR_BROWSER_RELEASE': '(YOUR_API_KEY_IS_HERE)',
      'API_KEY_FOR_BROWSER_DEBUG': '(YOUR_API_KEY_IS_HERE)'  // optional
    });

    let mapOptions: GoogleMapOptions = options || {};
    this.map = GoogleMaps.create(divId, options);
    return (new Promise((resolve) => {
      this.map.one(GoogleMapsEvent.MAP_READY).then(() => {
        resolve();
      });
    }));
  }

  detachMap() {
    if (!this.map) return;
    this.map.setDiv();
    this.map.off();
    this.map.setOptions({
      'mapType': MapTypeId.NONE,
      'camera': {
        'target': {
          'lat': 0,
          'lng': 0
        },
        'zoom': 1,
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
      'controls': {
        'compass': true,
        'indoorPicker': true,
        'myLocationButton': true,
        'myLocation': true,   // (blue dot)
        'zoom': true,          // android only
        'mapToolbar': true
      },
      'preferences': {
        'zoom': null,  // reset min,max zoom
        'building': true,
        'clickableIcons': false,  // POI icons clickable = false
        'restriction': null  // reset restriction
      }
    });
    this.map.clear();
  }
}
