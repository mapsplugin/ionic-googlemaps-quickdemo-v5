import { Component, ElementRef, ViewChild, OnInit, OnDestroy } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import {
  GoogleMaps,
  GoogleMap,
  GoogleMapsEvent,
  ILatLng,
  Marker,
  Environment,
  ElevationService,
  DirectionsService,
  TravelModeId,
  DirectionsResult,
  DirectionsRenderer,
  ILatLngBounds
} from '@ionic-native/google-maps';
import { MapService } from '../map.service';


@Component({
  selector: 'app-directions',
  templateUrl: './directions.page.html',
  styleUrls: ['./directions.page.scss'],
})
export class DirectionsPage implements OnInit, OnDestroy {

  map: GoogleMap;
  data: any;
  markers: Marker[] = [];
  renderer: DirectionsRenderer = null;
  origin: ILatLng = {lat: 33.816839, lng: -118.3418066};
  destination: ILatLng = {lat: 33.807760319147675, lng: -118.35780353769532};
  bounds: ILatLngBounds;
  constructor(private mapService: MapService) {}

  ngOnInit() {
    this.loadMap();
  }

  ngOnDestroy() {
    this.mapService.detachMap();
  }

  async loadMap() {
    this.map = await this.mapService.attachMap('map_canvas', {
      'camera': {
        'target': [this.origin, this.destination]
      },
      'gestures': {
        'scroll': false,
        'tilt': false,
        'rotate': false,
        'zoom': false
      },
      'controls': {
        'zoom': false
      },
      'preferences': {
        'restriction': {
          "southwest": {
            "lat": 33.7984,
            "lng": -118.36571
          },
          "northeast": {
            "lat": 33.826350000000005,
            "lng": -118.33339000000001
          }
        }
      }
    });
    this.requestDirection();

  }
  requestDirection() {
    DirectionsService.route({
      'origin': this.origin,
      'destination': this.destination,
      'travelMode': TravelModeId.DRIVING
    }).then((result: DirectionsResult) => {
      // console.log(JSON.stringify(result, null, 2));
      this.bounds = result.routes[0].bounds;

      if (!this.renderer) {
        this.renderer = this.map.addDirectionsRendererSync({
          'directions': result,
          'panel': 'guide',
          'draggable': true
        });
        this.renderer.on(GoogleMapsEvent.DIRECTIONS_CHANGED).subscribe(this.onDirectionChanged.bind(this));
      } else {
        this.renderer.setDirections(result);
      }
    });
  }

  onDirectionChanged() {
    const directions: DirectionsResult = this.renderer.getDirections();
    this.origin = directions.routes[0].legs[0].start_location;
    this.destination = directions.routes[0].legs[0].end_location;
    this.bounds = directions.routes[0].bounds;
  }

  onSplitterDragEnd() {
    this.map.animateCamera({
      'target': this.bounds,
      'duration': 500
    });

  }

}
