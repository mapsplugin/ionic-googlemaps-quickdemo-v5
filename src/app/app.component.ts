import { Component, OnInit } from '@angular/core';

import { Platform } from '@ionic/angular';
import { SplashScreen } from '@ionic-native/splash-screen/ngx';
import { StatusBar } from '@ionic-native/status-bar/ngx';

@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss']
})
export class AppComponent implements OnInit {
  public selectedIndex = 0;
  public appPages = [
    {
      title: 'SimpleMap',
      url: 'basics',
      icon: 'map'
    },
    {
      title: 'Marker',
      url: 'marker',
      icon: 'pin'
    },
    {
      title: 'MarkerCluster',
      url: 'marker-cluster',
      icon: 'pin'
    },
    {
      title: 'HtmlInfoWindow',
      url: 'html-info-window',
      icon: 'pin'
    },
    {
      title: 'Circle',
      url: 'circle',
      icon: 'pin'
    },
    {
      title: 'Polyline',
      url: 'polyline',
      icon: 'pin'
    },
    {
      title: 'Polygon',
      url: 'polygon',
      icon: 'pin'
    },
    {
      title: 'GroundOverlay',
      url: 'ground-overlay',
      icon: 'pin'
    },
    {
      title: 'Geocoding',
      url: 'geocoding',
      icon: 'pin'
    },
    {
      title: 'TileOverlay',
      url: 'tile-overlay',
      icon: 'pin'
    },
    {
      title: 'KmlOverlay',
      url: 'kml-overlay',
      icon: 'pin'
    },
    {
      title: 'StreetView',
      url: 'street-view',
      icon: 'pin'
    },
    {
      title: 'Directions',
      url: 'directions',
      icon: 'car'
    }
  ];
  public labels = ['Family', 'Friends', 'Notes', 'Work', 'Travel', 'Reminders'];

  constructor(
    private platform: Platform,
    private splashScreen: SplashScreen,
    private statusBar: StatusBar
  ) {
    this.initializeApp();
  }

  initializeApp() {
    this.platform.ready().then(() => {
      this.statusBar.styleDefault();
      this.splashScreen.hide();
    });
  }

  ngOnInit() {
    const path = window.location.pathname.split('folder/')[1];
    if (path !== undefined) {
      this.selectedIndex = this.appPages.findIndex(page => page.title.toLowerCase() === path.toLowerCase());
    }
  }
}
