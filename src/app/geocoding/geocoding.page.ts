import { Component, OnInit, OnDestroy, ViewChild, ElementRef } from '@angular/core';
import {
  GoogleMaps,
  GoogleMap,
  Geocoder,
  BaseArrayClass,
  GeocoderResult,
  Marker
} from '@ionic-native/google-maps';
import { LoadingController, Platform } from '@ionic/angular';
import { MapService } from '../map.service';

@Component({
  selector: 'app-geocoding',
  templateUrl: './geocoding.page.html',
  styleUrls: ['./geocoding.page.scss'],
})
export class GeocodingPage implements OnInit {

  map: GoogleMap;
  loading: any;
  @ViewChild('search_address', {static: true}) search_address: ElementRef;

  constructor(public loadingCtrl: LoadingController, private mapService: MapService) {}

  async ngOnInit() {
    // Since ngOnInit() is executed before `deviceready` event,
    // you have to wait the event.
    await this.loadMap();
  }

  async ngOnDestroy() {
    await this.mapService.detachMap();
  }

  async loadMap() {
    (this.search_address as any).value = '1600 Amphitheatre Parkway, Mountain View, CA 94043, United States';
    this.map = await this.mapService.attachMap('map_canvas');
  }

  async onButton1_click(event) {
    this.loading = await this.loadingCtrl.create({
      message: 'Please wait...'
    });
    await this.loading.present();
    this.map.clear();

    // Address -> latitude,longitude
    Geocoder.geocode({
      "address": (this.search_address as any).value
    })
    .then((results: GeocoderResult[]) => {
      console.log(results);
      this.loading.dismiss();

      if (results.length > 0) {
        let marker: Marker = this.map.addMarkerSync({
          'position': results[0].position,
          'title':  JSON.stringify(results[0].position)
        });
        this.map.animateCamera({
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
