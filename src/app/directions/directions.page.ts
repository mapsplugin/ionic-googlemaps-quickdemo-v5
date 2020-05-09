import { Component, ElementRef, OnInit, OnDestroy } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import {
  GoogleMaps,
  GoogleMap,
  ILatLng,
  Marker,
  Environment,
  ElevationService,
  DirectionsService,
  TravelModeId,
  DirectionsResult
} from '@ionic-native/google-maps';
import { MapService } from '../map.service';

@Component({
  selector: 'app-directions',
  templateUrl: './directions.page.html',
  styleUrls: ['./directions.page.scss'],
})
export class DirectionsPage implements OnInit, OnDestroy {
  public title: string = 'Directions';
  public description: string = 'directions';

  map: GoogleMap;
  data: any;
  markers: Marker[] = [];

  constructor(private mapService: MapService) {}

  ngOnInit() {
    this.loadMap();
  }

  ngOnDestroy() {
    this.mapService.detachMap();
  }

  async loadMap() {

    const origin: ILatLng = {lat: 33.816839, lng: -118.3418066};
    const destination: ILatLng = {lat: 33.8088355, lng: -118.3406353};
    this.map = await this.mapService.attachMap('map_canvas', {
      'camera': {
        'target': [origin, destination]
      },
      'gestures': {
        'scroll': false,
        'tilt': false,
        'rotate': false,
        'zoom': false
      }
    });


    DirectionsService.route({
      origin,
      destination,
      'travelMode': TravelModeId.DRIVING
    }).then((result: DirectionsResult) => {
      console.log(result);

      this.map.addDirectionsRenderer({
        'directions': result
      });
    });

  }

}
