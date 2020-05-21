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
  lineChart: any;
  @ViewChild('lineCanvas', {static: true}) lineCanvas;
  map: GoogleMap;

  constructor(private mapService: MapService) {}

  ngOnInit() {
    this.loadMap();
  }

  ngOnDestroy() {
    this.mapService.detachMap();
  }

  async loadMap() {

    const path: ILatLng[] = [
    {
      lat: 37.421122,
      lng: -122.087780
    },
    {
      lat: 37.420867,
      lng: -122.082470
    }];

    this.map = await this.mapService.attachMap('map_canvas', {
      'camera': {
        'target': path
      },
      'gestures': {
        'scroll': false,
        'tilt': false,
        'rotate': false,
        'zoom': false
      },
      'controls': {
        'zoom': false
      }
    });

    ElevationService.getElevationAlongPath({
      samples: 15,
      path: path
    }).then((results: ElevationResult[]) => {
      const cnt: number = results.length;

      let minElevation: number = 2^31 - 1;
      let maxElevation: number = 0;
      const values: number[] = [];
      const labels: number[] = [];

      results.forEach((result: ElevationResult, idx: number) => {
        minElevation = Math.min(minElevation, result.elevation);
        maxElevation = Math.max(maxElevation, result.elevation);
      });
      minElevation = Math.floor(minElevation);
      maxElevation = Math.ceil(maxElevation);

      const elevStep: number = Math.ceil((maxElevation - minElevation) / cnt);
      results.forEach((result: ElevationResult, idx: number) => {
        this.map.addMarker({
          'position': result.location,
          'title': result.elevation.toFixed(2) + 'm',
          'idx': idx,
          'icon': {
            'url': './assets/icon/marker.png',
            'size': {
              'width': Math.floor(24  * (result.elevation / maxElevation)),
              'height': Math.floor(40 * (result.elevation / maxElevation))
            }
          },
          'disableAutoPan': true
        });
        values.push(Math.floor(result.elevation * 100) / 100);
        labels.push(idx + 1);
      });



      this.lineChart = new Chart(this.lineCanvas.nativeElement, {
          type: 'bar',
          data: {
              labels: labels,
              datasets: [
                  {
                      label: 'Elevation',
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
                      data: values,
                      spanGaps: false,
                  }
              ]
          }
      });
    });


  }
}
