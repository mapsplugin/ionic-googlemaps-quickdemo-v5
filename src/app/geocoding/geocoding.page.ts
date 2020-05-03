import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';
import {
  GoogleMaps,
  GoogleMap,
  Geocoder,
  BaseArrayClass,
  GeocoderResult,
  Marker,
  Environment
} from '@ionic-native/google-maps';
import { LoadingController, Platform } from '@ionic/angular';

@Component({
  selector: 'app-geocoding',
  templateUrl: './geocoding.page.html',
  styleUrls: ['./geocoding.page.scss'],
})
export class GeocodingPage implements OnInit {

  map1: GoogleMap;
  loading: any;
  @ViewChild('search_address', {static: true}) search_address: ElementRef;

  constructor(public loadingCtrl: LoadingController, private platform: Platform) { }

  async ngOnInit() {
    // Since ngOnInit() is executed before `deviceready` event,
    // you have to wait the event.
    await this.platform.ready();
    await this.loadMap1();
  }

  async loadMap1() {

    Environment.setEnv({
      'API_KEY_FOR_BROWSER_RELEASE': '(YOUR_API_KEY_IS_HERE)',
      'API_KEY_FOR_BROWSER_DEBUG': 'AIzaSyBzTWTKaMEeABaeBSa3_E6ZMxseK4xXl4k'  // optional
    });
    (this.search_address as any).value = '1600 Amphitheatre Parkway, Mountain View, CA 94043, United States';
    this.map1 = GoogleMaps.create('map_canvas');
  }

  async onButton1_click(event) {
    this.loading = await this.loadingCtrl.create({
      message: 'Please wait...'
    });
    await this.loading.present();
    this.map1.clear();

    // Address -> latitude,longitude
    Geocoder.geocode({
      "address": (this.search_address as any).value
    })
    .then((results: GeocoderResult[]) => {
      console.log(results);
      this.loading.dismiss();

      if (results.length > 0) {
        let marker: Marker = this.map1.addMarkerSync({
          'position': results[0].position,
          'title':  JSON.stringify(results[0].position)
        });
        this.map1.animateCamera({
          'target': marker.getPosition(),
          'zoom': 17
        });

        marker.showInfoWindow();
      } else {
        alert("Not found");
      }
    });
  }


}
