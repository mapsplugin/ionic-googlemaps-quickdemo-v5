import { Component, OnInit } from '@angular/core';

import { Platform } from '@ionic/angular';
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
      url: 'basics'
    },
    {
      title: 'Marker',
      url: 'marker'
    },
    {
      title: 'MarkerCluster',
      url: 'marker-cluster'
    },
    {
      title: 'HtmlInfoWindow',
      url: 'html-info-window'
    },
    {
      title: 'Circle',
      url: 'circle'
    },
    {
      title: 'Polyline',
      url: 'polyline'
    },
    {
      title: 'Polygon',
      url: 'polygon'
    },
    {
      title: 'GroundOverlay',
      url: 'ground-overlay'
    },
    {
      title: 'Geocoding',
      url: 'geocoding'
    },
    {
      title: 'TileOverlay',
      url: 'tile-overlay'
    },
    {
      title: 'KmlOverlay',
      url: 'kml-overlay'
    },
    {
      title: 'StreetView',
      url: 'street-view'
    },
    {
      title: 'Elevation',
      url: 'elevation'
    },
    {
      title: 'Directions',
      url: 'directions'
    }
  ];

  constructor(
    private platform: Platform,
    private statusBar: StatusBar
  ) {
    this.initializeApp();
  }

  initializeApp() {
    this.platform.ready().then(() => {
      this.statusBar.styleDefault();
    });
  }

  ngOnInit() {
    const path = window.location.pathname.split('folder/')[1];
    if (path !== undefined) {
      this.selectedIndex = this.appPages.findIndex(page => page.title.toLowerCase() === path.toLowerCase());
    }
  }
}
