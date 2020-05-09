import { Component, OnInit, OnDestroy } from '@angular/core';
import { LoadingController, Platform } from '@ionic/angular';
import {
  GoogleMaps,
  GoogleMap,
  GoogleMapsEvent,
  KmlOverlay,
  Polygon,
  ILatLng
} from '@ionic-native/google-maps';
import { MapService } from '../map.service';

@Component({
  selector: 'app-kml-overlay',
  templateUrl: './kml-overlay.page.html',
  styleUrls: ['./kml-overlay.page.scss'],
})
export class KmlOverlayPage implements OnInit, OnDestroy {

  map: GoogleMap;
  loading: any;

  constructor(public loadingCtrl: LoadingController, private mapService: MapService) { }

  ngOnInit() {
    this.loadMap();
  }

  ngOnDestroy() {
    this.mapService.detachMap();
  }

  async loadMap() {
    this.loading = await this.loadingCtrl.create({
      message: 'Please wait...'
    });
    await this.loading.present();

    this.map = await this.mapService.attachMap('map_canvas');
    let kmlOverlay: KmlOverlay = await this.map.addKmlOverlay({
      url: "assets/kmloverlay/polygon.kml",
      icon: "green"
    });

    this.loading.dismiss();

    console.log(kmlOverlay);

    this.map.moveCamera(kmlOverlay.getDefaultViewport());

    // You can get additional information
    kmlOverlay.on(GoogleMapsEvent.KML_CLICK).subscribe((params: any) => {
      let overlay: Polygon = params[0]; // depends on overlay
      let latLng: ILatLng = params[1];
      console.log(overlay, latLng);
    });

  }
}
