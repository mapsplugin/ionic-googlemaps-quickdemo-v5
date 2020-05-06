import { Component, OnInit, OnDestroy, ViewChild } from '@angular/core';
import { Platform } from '@ionic/angular';
import {
  GoogleMaps,
  GoogleMap,
  GoogleMapsEvent,
  Marker,
  ElevationService,
  ElevationResult,
  Environment,
  ILatLng
} from '@ionic-native/google-maps';
import { Chart } from 'chart.js';
import { MapService } from '../map.service';

@Component({
  selector: 'app-elevation',
  templateUrl: './elevation.page.html',
  styleUrls: ['./elevation.page.scss'],
})
export class ElevationPage implements OnInit, OnDestroy {
  title: string = "Get elevation along with path";
  description: string = "This example creates a map that's on Google Headquarter, USA";
  lineChart: any;
  @ViewChild('lineCanvas', {static: true}) lineCanvas;
  map: GoogleMap;

  constructor(private mapService: MapService) {}

  async ngOnInit() {
    // Since ngOnInit() is executed before `deviceready` event,
    // you have to wait the event.
    await this.loadMap();
  }

  async ngOnDestroy() {
    await this.mapService.detachMap();
  }

  async loadMap() {

    const GOOGLE_PLEX: ILatLng = {
      lat: 37.422034,
      lng: -122.0862677
    };
    this.map = await this.mapService.attachMap('map_canvas', {
      'camera': {
        'target': GOOGLE_PLEX,
        zoom: 17,
        tilt: 30
      }
    });

    ElevationService.getElevationAlongPath({
      samples: 15,
      path: [{
        lat: 37.420867,
        lng: -122.082470
      },
      {
        lat: 37.421122,
        lng: -122.087780
      }]
    }).then((results: ElevationResult[]) => {
      results.forEach((result: ElevationResult) => {
        this.map.addMarker({
          'position': result.location,
          'title': result.elevation.toFixed(2) + 'm'
        });
      });
    });


    this.lineChart = new Chart(this.lineCanvas.nativeElement, {
        type: 'line',
        data: {
            labels: ['January', 'February', 'March', 'April', 'May', 'June', 'July'],
            datasets: [
                {
                    label: 'My First dataset',
                    fill: false,
                    lineTension: 0.1,
                    backgroundColor: 'rgba(75,192,192,0.4)',
                    borderColor: 'rgba(75,192,192,1)',
                    borderCapStyle: 'butt',
                    borderDash: [],
                    borderDashOffset: 0.0,
                    borderJoinStyle: 'miter',
                    pointBorderColor: 'rgba(75,192,192,1)',
                    pointBackgroundColor: '#fff',
                    pointBorderWidth: 1,
                    pointHoverRadius: 5,
                    pointHoverBackgroundColor: 'rgba(75,192,192,1)',
                    pointHoverBorderColor: 'rgba(220,220,220,1)',
                    pointHoverBorderWidth: 2,
                    pointRadius: 1,
                    pointHitRadius: 10,
                    data: [65, 59, 80, 81, 56, 55, 40],
                    spanGaps: false,
                }
            ]
        }
    });

  }
}
