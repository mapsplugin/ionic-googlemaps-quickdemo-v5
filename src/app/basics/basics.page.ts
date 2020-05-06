import { Component, OnInit, OnDestroy } from '@angular/core';
import {
  ToastController,
  Platform,
  LoadingController
} from '@ionic/angular';
import {
  GoogleMaps,
  GoogleMap,
  GoogleMapsEvent,
  Marker,
  GoogleMapsAnimation,
  MyLocation,
  Environment
} from '@ionic-native/google-maps';
import { MapService } from '../map.service';

@Component({
  selector: 'app-basics',
  templateUrl: './basics.page.html',
  styleUrls: ['./basics.page.scss'],
})
export class BasicsPage implements OnInit, OnDestroy {
  public title: string = 'Hello';
  public description: string = 'world';

  map: GoogleMap;
  loading: any;

  constructor(
    public loadingCtrl: LoadingController,
    public toastCtrl: ToastController,
    private mapService: MapService) {

  }

  async ngOnInit() {
    // Since ngOnInit() is executed before `deviceready` event,
    // you have to wait the event.
    // await this.platform.ready();
    // await this.loadMap();
    await this.loadMap();
  }

  async ngOnDestroy() {
    await this.mapService.detachMap();
  }

  async loadMap() {
    //
    // Environment.setEnv({
    //   'API_KEY_FOR_BROWSER_RELEASE': '(YOUR_API_KEY_IS_HERE)',
    //   'API_KEY_FOR_BROWSER_DEBUG': 'AIzaSyBzTWTKaMEeABaeBSa3_E6ZMxseK4xXl4k'  // optional
    // });
    // this.map = GoogleMaps.create('map_canvas', {
    //   camera: {
    //     target: {
    //       lat: 43.0741704,
    //       lng: -89.3809802
    //     },
    //     zoom: 18,
    //     tilt: 30
    //   }
    // });
    this.map = await this.mapService.attachMap('map_canvas', {
      camera: {
        target: {
          lat: 43.0741704,
          lng: -89.3809802
        },
        zoom: 18,
        tilt: 30
      }
    });

  }

  async onButtonClick() {
    this.map.clear();

    this.loading = await this.loadingCtrl.create({
      message: 'Please wait...'
    });
    await this.loading.present();

    // Get the location of you
    this.map.getMyLocation().then((location: MyLocation) => {
      this.loading.dismiss();
      console.log(JSON.stringify(location, null ,2));

      // Move the map camera to the location with animation
      this.map.animateCamera({
        target: location.latLng,
        zoom: 17,
        tilt: 30
      });

      // add a marker
      let marker: Marker = this.map.addMarkerSync({
        title: '@ionic-native/google-maps plugin!',
        snippet: 'This plugin is awesome!',
        position: location.latLng,
        animation: GoogleMapsAnimation.BOUNCE
      });

      // show the infoWindow
      marker.showInfoWindow();

      // If clicked it, display the alert
      marker.on(GoogleMapsEvent.MARKER_CLICK).subscribe(() => {
        this.showToast('clicked!');
      });
    })
    .catch(err => {
      this.loading.dismiss();
      this.showToast(err.error_message);
    });
  }

  async showToast(message: string) {
    let toast = await this.toastCtrl.create({
      message: message,
      duration: 2000,
      position: 'middle'
    });

    toast.present();
  }

}
