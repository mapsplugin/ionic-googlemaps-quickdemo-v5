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
  DirectionsRenderer
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
  renderer: DirectionsRenderer = null;
  origin: ILatLng = {lat: 33.816839, lng: -118.3418066};
  destination: ILatLng = {lat: 33.807760319147675, lng: -118.35780353769532};
  @ViewChild('direcitonMode', {static: true}) direcitonMode;

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
      // },
      // 'gestures': {
      //   'scroll': false,
      //   'tilt': false,
      //   'rotate': false,
      //   'zoom': false
      }
    });

    // this.map.addDirectionsRenderer({
    //   'directions': this.response,
    //   'panel': 'guide',
    //   'draggable': true
    // });
    this.onDirectionChange();

  }
  onDirectionChange() {
    DirectionsService.route({
      'origin': this.origin,
      'destination': this.destination,
      'travelMode': 'DRIVING'//this.direcitonMode.value
    }).then((result: DirectionsResult) => {
      // console.log(JSON.stringify(result, null, 2));

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
    console.log(this);
    const directions: DirectionsResult = this.renderer.getDirections();
    // this.origin = directions.routes[0].legs[0].start_location;
    // this.destination = directions.routes[0].legs[0].end_location;
    // console.log(this.origin. this.destination);
  }

  response: any = {
  "geocoded_waypoints": [
    {
      "geocoder_status": "OK",
      "place_id": "ChIJGaI4wOBK3YARIfPo0cuzL9s",
      "types": [
        "premise"
      ]
    },
    {
      "geocoder_status": "OK",
      "place_id": "ChIJRcJQCRpL3YARVUlMlahVb50",
      "types": [
        "premise"
      ]
    }
  ],
  "routes": [
    {
      "bounds": {
        "southwest": {
          "lat": 33.80528,
          "lng": -118.35782
        },
        "northeast": {
          "lat": 33.81848,
          "lng": -118.34189
        }
      },
      "copyrights": "Map data ©2020",
      "legs": [
        {
          "distance": {
            "text": "1.9 mi",
            "value": 3077
          },
          "duration": {
            "text": "7 mins",
            "value": 391
          },
          "end_address": "4135 CA-1, Torrance, CA 90505, USA",
          "end_location": {
            "lat": 33.8077396,
            "lng": -118.3578157
          },
          "start_address": "3305 Kashiwa St, Torrance, CA 90505, USA",
          "start_location": {
            "lat": 33.817124,
            "lng": -118.3418941
          },
          "steps": [
            {
              "distance": {
                "text": "0.2 mi",
                "value": 282
              },
              "duration": {
                "text": "1 min",
                "value": 42
              },
              "end_location": {
                "lat": 33.8182099,
                "lng": -118.3443324
              },
              "polyline": {
                "points": "_|kmExshqUFj@BX@H?FCHCFIPGTGPQf@Un@KZSt@ABENs@vBADCDC?G@o@?"
              },
              "start_location": {
                "lat": 33.817124,
                "lng": -118.3418941
              },
              "travel_mode": "DRIVING",
              "encoded_lat_lngs": "_|kmExshqUFj@BX@H?FCHCFIPGTGPQf@Un@KZSt@ABENs@vBADCDC?G@o@?",
              "path": [
                {
                  "lat": 33.81712,
                  "lng": -118.34189
                },
                {
                  "lat": 33.817080000000004,
                  "lng": -118.34211
                },
                {
                  "lat": 33.817060000000005,
                  "lng": -118.34224
                },
                {
                  "lat": 33.81705,
                  "lng": -118.34229
                },
                {
                  "lat": 33.81705,
                  "lng": -118.34233
                },
                {
                  "lat": 33.81707,
                  "lng": -118.34238
                },
                {
                  "lat": 33.81709,
                  "lng": -118.34242
                },
                {
                  "lat": 33.81714,
                  "lng": -118.34251
                },
                {
                  "lat": 33.81718,
                  "lng": -118.34262000000001
                },
                {
                  "lat": 33.817220000000006,
                  "lng": -118.34271000000001
                },
                {
                  "lat": 33.817310000000006,
                  "lng": -118.34291
                },
                {
                  "lat": 33.817420000000006,
                  "lng": -118.34315000000001
                },
                {
                  "lat": 33.81748,
                  "lng": -118.34329000000001
                },
                {
                  "lat": 33.81758,
                  "lng": -118.34356000000001
                },
                {
                  "lat": 33.81759,
                  "lng": -118.34358
                },
                {
                  "lat": 33.817620000000005,
                  "lng": -118.34366000000001
                },
                {
                  "lat": 33.81788,
                  "lng": -118.34426
                },
                {
                  "lat": 33.817890000000006,
                  "lng": -118.34429000000002
                },
                {
                  "lat": 33.817910000000005,
                  "lng": -118.34432000000001
                },
                {
                  "lat": 33.817930000000004,
                  "lng": -118.34432000000001
                },
                {
                  "lat": 33.81797,
                  "lng": -118.34433000000001
                },
                {
                  "lat": 33.81821,
                  "lng": -118.34433000000001
                }
              ],
              "lat_lngs": [
                {
                  "lat": 33.81712,
                  "lng": -118.34189
                },
                {
                  "lat": 33.817080000000004,
                  "lng": -118.34211
                },
                {
                  "lat": 33.817060000000005,
                  "lng": -118.34224
                },
                {
                  "lat": 33.81705,
                  "lng": -118.34229
                },
                {
                  "lat": 33.81705,
                  "lng": -118.34233
                },
                {
                  "lat": 33.81707,
                  "lng": -118.34238
                },
                {
                  "lat": 33.81709,
                  "lng": -118.34242
                },
                {
                  "lat": 33.81714,
                  "lng": -118.34251
                },
                {
                  "lat": 33.81718,
                  "lng": -118.34262000000001
                },
                {
                  "lat": 33.817220000000006,
                  "lng": -118.34271000000001
                },
                {
                  "lat": 33.817310000000006,
                  "lng": -118.34291
                },
                {
                  "lat": 33.817420000000006,
                  "lng": -118.34315000000001
                },
                {
                  "lat": 33.81748,
                  "lng": -118.34329000000001
                },
                {
                  "lat": 33.81758,
                  "lng": -118.34356000000001
                },
                {
                  "lat": 33.81759,
                  "lng": -118.34358
                },
                {
                  "lat": 33.817620000000005,
                  "lng": -118.34366000000001
                },
                {
                  "lat": 33.81788,
                  "lng": -118.34426
                },
                {
                  "lat": 33.817890000000006,
                  "lng": -118.34429000000002
                },
                {
                  "lat": 33.817910000000005,
                  "lng": -118.34432000000001
                },
                {
                  "lat": 33.817930000000004,
                  "lng": -118.34432000000001
                },
                {
                  "lat": 33.81797,
                  "lng": -118.34433000000001
                },
                {
                  "lat": 33.81821,
                  "lng": -118.34433000000001
                }
              ],
              "instructions": "Head <b>west</b> toward <b>W 229th Pl</b><div style=\"font-size:0.9em\">Restricted usage road</div>",
              "maneuver": "",
              "start_point": {
                "lat": 33.817124,
                "lng": -118.3418941
              },
              "end_point": {
                "lat": 33.8182099,
                "lng": -118.3443324
              }
            },
            {
              "distance": {
                "text": "0.2 mi",
                "value": 313
              },
              "duration": {
                "text": "1 min",
                "value": 42
              },
              "end_location": {
                "lat": 33.8184785,
                "lng": -118.3477082
              },
              "maneuver": "turn-left",
              "polyline": {
                "points": "yblmE`ciqUCl@?LAXA@IzBElAARC~@K`CKjD"
              },
              "start_location": {
                "lat": 33.8182099,
                "lng": -118.3443324
              },
              "travel_mode": "DRIVING",
              "encoded_lat_lngs": "yblmE`ciqUCl@?LAXA@IzBElAARC~@K`CKjD",
              "path": [
                {
                  "lat": 33.81821,
                  "lng": -118.34433000000001
                },
                {
                  "lat": 33.81823,
                  "lng": -118.34456000000002
                },
                {
                  "lat": 33.81823,
                  "lng": -118.34463000000001
                },
                {
                  "lat": 33.81824,
                  "lng": -118.34476000000001
                },
                {
                  "lat": 33.818250000000006,
                  "lng": -118.34477000000001
                },
                {
                  "lat": 33.8183,
                  "lng": -118.34539000000001
                },
                {
                  "lat": 33.81833,
                  "lng": -118.34578
                },
                {
                  "lat": 33.818340000000006,
                  "lng": -118.34588000000001
                },
                {
                  "lat": 33.818360000000006,
                  "lng": -118.34620000000001
                },
                {
                  "lat": 33.81842,
                  "lng": -118.34685
                },
                {
                  "lat": 33.81848,
                  "lng": -118.34771
                }
              ],
              "lat_lngs": [
                {
                  "lat": 33.81821,
                  "lng": -118.34433000000001
                },
                {
                  "lat": 33.81823,
                  "lng": -118.34456000000002
                },
                {
                  "lat": 33.81823,
                  "lng": -118.34463000000001
                },
                {
                  "lat": 33.81824,
                  "lng": -118.34476000000001
                },
                {
                  "lat": 33.818250000000006,
                  "lng": -118.34477000000001
                },
                {
                  "lat": 33.8183,
                  "lng": -118.34539000000001
                },
                {
                  "lat": 33.81833,
                  "lng": -118.34578
                },
                {
                  "lat": 33.818340000000006,
                  "lng": -118.34588000000001
                },
                {
                  "lat": 33.818360000000006,
                  "lng": -118.34620000000001
                },
                {
                  "lat": 33.81842,
                  "lng": -118.34685
                },
                {
                  "lat": 33.81848,
                  "lng": -118.34771
                }
              ],
              "instructions": "Turn <b>left</b> onto <b>W 229th Pl</b>",
              "start_point": {
                "lat": 33.8182099,
                "lng": -118.3443324
              },
              "end_point": {
                "lat": 33.8184785,
                "lng": -118.3477082
              }
            },
            {
              "distance": {
                "text": "128 ft",
                "value": 39
              },
              "duration": {
                "text": "1 min",
                "value": 8
              },
              "end_location": {
                "lat": 33.8181272,
                "lng": -118.3477138
              },
              "maneuver": "turn-left",
              "polyline": {
                "points": "odlmEdxiqUdA?"
              },
              "start_location": {
                "lat": 33.8184785,
                "lng": -118.3477082
              },
              "travel_mode": "DRIVING",
              "encoded_lat_lngs": "odlmEdxiqUdA?",
              "path": [
                {
                  "lat": 33.81848,
                  "lng": -118.34771
                },
                {
                  "lat": 33.818130000000004,
                  "lng": -118.34771
                }
              ],
              "lat_lngs": [
                {
                  "lat": 33.81848,
                  "lng": -118.34771
                },
                {
                  "lat": 33.818130000000004,
                  "lng": -118.34771
                }
              ],
              "instructions": "Turn <b>left</b> onto <b>Madison St</b>",
              "start_point": {
                "lat": 33.8184785,
                "lng": -118.3477082
              },
              "end_point": {
                "lat": 33.8181272,
                "lng": -118.3477138
              }
            },
            {
              "distance": {
                "text": "0.2 mi",
                "value": 306
              },
              "duration": {
                "text": "1 min",
                "value": 69
              },
              "end_location": {
                "lat": 33.8184088,
                "lng": -118.3510031
              },
              "maneuver": "turn-right",
              "polyline": {
                "points": "iblmEdxiqUGjBCv@Cv@InBOzCAh@AZA\\GdA"
              },
              "start_location": {
                "lat": 33.8181272,
                "lng": -118.3477138
              },
              "travel_mode": "DRIVING",
              "encoded_lat_lngs": "iblmEdxiqUGjBCv@Cv@InBOzCAh@AZA\\GdA",
              "path": [
                {
                  "lat": 33.818130000000004,
                  "lng": -118.34771
                },
                {
                  "lat": 33.81817,
                  "lng": -118.34825000000001
                },
                {
                  "lat": 33.81819,
                  "lng": -118.34853000000001
                },
                {
                  "lat": 33.81821,
                  "lng": -118.34881000000001
                },
                {
                  "lat": 33.81826,
                  "lng": -118.34937000000001
                },
                {
                  "lat": 33.818340000000006,
                  "lng": -118.35015000000001
                },
                {
                  "lat": 33.81835,
                  "lng": -118.35036000000001
                },
                {
                  "lat": 33.818360000000006,
                  "lng": -118.35050000000001
                },
                {
                  "lat": 33.81837,
                  "lng": -118.35065000000002
                },
                {
                  "lat": 33.81841,
                  "lng": -118.35100000000001
                }
              ],
              "lat_lngs": [
                {
                  "lat": 33.818130000000004,
                  "lng": -118.34771
                },
                {
                  "lat": 33.81817,
                  "lng": -118.34825000000001
                },
                {
                  "lat": 33.81819,
                  "lng": -118.34853000000001
                },
                {
                  "lat": 33.81821,
                  "lng": -118.34881000000001
                },
                {
                  "lat": 33.81826,
                  "lng": -118.34937000000001
                },
                {
                  "lat": 33.818340000000006,
                  "lng": -118.35015000000001
                },
                {
                  "lat": 33.81835,
                  "lng": -118.35036000000001
                },
                {
                  "lat": 33.818360000000006,
                  "lng": -118.35050000000001
                },
                {
                  "lat": 33.81837,
                  "lng": -118.35065000000002
                },
                {
                  "lat": 33.81841,
                  "lng": -118.35100000000001
                }
              ],
              "instructions": "Turn <b>right</b> onto <b>W 230th St</b><div style=\"font-size:0.9em\">Pass by 7-Eleven (on the right)</div>",
              "start_point": {
                "lat": 33.8181272,
                "lng": -118.3477138
              },
              "end_point": {
                "lat": 33.8184088,
                "lng": -118.3510031
              }
            },
            {
              "distance": {
                "text": "0.9 mi",
                "value": 1445
              },
              "duration": {
                "text": "3 mins",
                "value": 152
              },
              "end_location": {
                "lat": 33.8056006,
                "lng": -118.3512105
              },
              "maneuver": "turn-left",
              "polyline": {
                "points": "adlmEvljqUAh@b@?pF@r@?`D?t@?r@A|@?bD?lBB^?fA?zC@t@AjB?dA?xAA@?f@@l@?nB?x@?F?f@?dA?hB@fA?D?R?tA?B?h@?b@?N?v@@P?NA~@?Z?dAC^A"
              },
              "start_location": {
                "lat": 33.8184088,
                "lng": -118.3510031
              },
              "travel_mode": "DRIVING",
              "encoded_lat_lngs": "adlmEvljqUAh@b@?pF@r@?`D?t@?r@A|@?bD?lBB^?fA?zC@t@AjB?dA?xAA@?f@@l@?nB?x@?F?f@?dA?hB@fA?D?R?tA?B?h@?b@?N?v@@P?NA~@?Z?dAC^A",
              "path": [
                {
                  "lat": 33.81841,
                  "lng": -118.35100000000001
                },
                {
                  "lat": 33.81842,
                  "lng": -118.35121000000001
                },
                {
                  "lat": 33.81824,
                  "lng": -118.35121000000001
                },
                {
                  "lat": 33.81703,
                  "lng": -118.35122000000001
                },
                {
                  "lat": 33.816770000000005,
                  "lng": -118.35122000000001
                },
                {
                  "lat": 33.815960000000004,
                  "lng": -118.35122000000001
                },
                {
                  "lat": 33.815690000000004,
                  "lng": -118.35122000000001
                },
                {
                  "lat": 33.815430000000006,
                  "lng": -118.35121000000001
                },
                {
                  "lat": 33.81512,
                  "lng": -118.35121000000001
                },
                {
                  "lat": 33.8143,
                  "lng": -118.35121000000001
                },
                {
                  "lat": 33.813750000000006,
                  "lng": -118.35123000000002
                },
                {
                  "lat": 33.813590000000005,
                  "lng": -118.35123000000002
                },
                {
                  "lat": 33.813230000000004,
                  "lng": -118.35123000000002
                },
                {
                  "lat": 33.812450000000005,
                  "lng": -118.35124
                },
                {
                  "lat": 33.812180000000005,
                  "lng": -118.35123000000002
                },
                {
                  "lat": 33.811640000000004,
                  "lng": -118.35123000000002
                },
                {
                  "lat": 33.81129,
                  "lng": -118.35123000000002
                },
                {
                  "lat": 33.810840000000006,
                  "lng": -118.35122000000001
                },
                {
                  "lat": 33.81083,
                  "lng": -118.35122000000001
                },
                {
                  "lat": 33.81063,
                  "lng": -118.35123000000002
                },
                {
                  "lat": 33.8104,
                  "lng": -118.35123000000002
                },
                {
                  "lat": 33.80984,
                  "lng": -118.35123000000002
                },
                {
                  "lat": 33.80955,
                  "lng": -118.35123000000002
                },
                {
                  "lat": 33.80951,
                  "lng": -118.35123000000002
                },
                {
                  "lat": 33.80931,
                  "lng": -118.35123000000002
                },
                {
                  "lat": 33.808960000000006,
                  "lng": -118.35123000000002
                },
                {
                  "lat": 33.80843,
                  "lng": -118.35124
                },
                {
                  "lat": 33.80807,
                  "lng": -118.35124
                },
                {
                  "lat": 33.808040000000005,
                  "lng": -118.35124
                },
                {
                  "lat": 33.80794,
                  "lng": -118.35124
                },
                {
                  "lat": 33.80751,
                  "lng": -118.35124
                },
                {
                  "lat": 33.80749,
                  "lng": -118.35124
                },
                {
                  "lat": 33.807280000000006,
                  "lng": -118.35124
                },
                {
                  "lat": 33.807100000000005,
                  "lng": -118.35124
                },
                {
                  "lat": 33.80702,
                  "lng": -118.35124
                },
                {
                  "lat": 33.806740000000005,
                  "lng": -118.35125000000001
                },
                {
                  "lat": 33.806650000000005,
                  "lng": -118.35125000000001
                },
                {
                  "lat": 33.80657,
                  "lng": -118.35124
                },
                {
                  "lat": 33.806250000000006,
                  "lng": -118.35124
                },
                {
                  "lat": 33.806110000000004,
                  "lng": -118.35124
                },
                {
                  "lat": 33.80576,
                  "lng": -118.35122000000001
                },
                {
                  "lat": 33.805600000000005,
                  "lng": -118.35121000000001
                }
              ],
              "lat_lngs": [
                {
                  "lat": 33.81841,
                  "lng": -118.35100000000001
                },
                {
                  "lat": 33.81842,
                  "lng": -118.35121000000001
                },
                {
                  "lat": 33.81824,
                  "lng": -118.35121000000001
                },
                {
                  "lat": 33.81703,
                  "lng": -118.35122000000001
                },
                {
                  "lat": 33.816770000000005,
                  "lng": -118.35122000000001
                },
                {
                  "lat": 33.815960000000004,
                  "lng": -118.35122000000001
                },
                {
                  "lat": 33.815690000000004,
                  "lng": -118.35122000000001
                },
                {
                  "lat": 33.815430000000006,
                  "lng": -118.35121000000001
                },
                {
                  "lat": 33.81512,
                  "lng": -118.35121000000001
                },
                {
                  "lat": 33.8143,
                  "lng": -118.35121000000001
                },
                {
                  "lat": 33.813750000000006,
                  "lng": -118.35123000000002
                },
                {
                  "lat": 33.813590000000005,
                  "lng": -118.35123000000002
                },
                {
                  "lat": 33.813230000000004,
                  "lng": -118.35123000000002
                },
                {
                  "lat": 33.812450000000005,
                  "lng": -118.35124
                },
                {
                  "lat": 33.812180000000005,
                  "lng": -118.35123000000002
                },
                {
                  "lat": 33.811640000000004,
                  "lng": -118.35123000000002
                },
                {
                  "lat": 33.81129,
                  "lng": -118.35123000000002
                },
                {
                  "lat": 33.810840000000006,
                  "lng": -118.35122000000001
                },
                {
                  "lat": 33.81083,
                  "lng": -118.35122000000001
                },
                {
                  "lat": 33.81063,
                  "lng": -118.35123000000002
                },
                {
                  "lat": 33.8104,
                  "lng": -118.35123000000002
                },
                {
                  "lat": 33.80984,
                  "lng": -118.35123000000002
                },
                {
                  "lat": 33.80955,
                  "lng": -118.35123000000002
                },
                {
                  "lat": 33.80951,
                  "lng": -118.35123000000002
                },
                {
                  "lat": 33.80931,
                  "lng": -118.35123000000002
                },
                {
                  "lat": 33.808960000000006,
                  "lng": -118.35123000000002
                },
                {
                  "lat": 33.80843,
                  "lng": -118.35124
                },
                {
                  "lat": 33.80807,
                  "lng": -118.35124
                },
                {
                  "lat": 33.808040000000005,
                  "lng": -118.35124
                },
                {
                  "lat": 33.80794,
                  "lng": -118.35124
                },
                {
                  "lat": 33.80751,
                  "lng": -118.35124
                },
                {
                  "lat": 33.80749,
                  "lng": -118.35124
                },
                {
                  "lat": 33.807280000000006,
                  "lng": -118.35124
                },
                {
                  "lat": 33.807100000000005,
                  "lng": -118.35124
                },
                {
                  "lat": 33.80702,
                  "lng": -118.35124
                },
                {
                  "lat": 33.806740000000005,
                  "lng": -118.35125000000001
                },
                {
                  "lat": 33.806650000000005,
                  "lng": -118.35125000000001
                },
                {
                  "lat": 33.80657,
                  "lng": -118.35124
                },
                {
                  "lat": 33.806250000000006,
                  "lng": -118.35124
                },
                {
                  "lat": 33.806110000000004,
                  "lng": -118.35124
                },
                {
                  "lat": 33.80576,
                  "lng": -118.35122000000001
                },
                {
                  "lat": 33.805600000000005,
                  "lng": -118.35121000000001
                }
              ],
              "instructions": "Turn <b>left</b> onto <b>Hawthorne Blvd</b>",
              "start_point": {
                "lat": 33.8184088,
                "lng": -118.3510031
              },
              "end_point": {
                "lat": 33.8056006,
                "lng": -118.3512105
              }
            },
            {
              "distance": {
                "text": "177 ft",
                "value": 54
              },
              "duration": {
                "text": "1 min",
                "value": 7
              },
              "end_location": {
                "lat": 33.805282,
                "lng": -118.3515742
              },
              "maneuver": "turn-slight-right",
              "polyline": {
                "points": "_timE`njqUDFDBD@F@JBBBB@@?@BBBBD@@?D@B?B@N"
              },
              "start_location": {
                "lat": 33.8056006,
                "lng": -118.3512105
              },
              "travel_mode": "DRIVING",
              "encoded_lat_lngs": "_timE`njqUDFDBD@F@JBBBB@@?@BBBBD@@?D@B?B@N",
              "path": [
                {
                  "lat": 33.805600000000005,
                  "lng": -118.35121000000001
                },
                {
                  "lat": 33.80557,
                  "lng": -118.35125000000001
                },
                {
                  "lat": 33.80554,
                  "lng": -118.35127000000001
                },
                {
                  "lat": 33.805510000000005,
                  "lng": -118.35128
                },
                {
                  "lat": 33.80547,
                  "lng": -118.35129
                },
                {
                  "lat": 33.80541,
                  "lng": -118.35131000000001
                },
                {
                  "lat": 33.80539,
                  "lng": -118.35133
                },
                {
                  "lat": 33.80537,
                  "lng": -118.35134000000001
                },
                {
                  "lat": 33.80536,
                  "lng": -118.35134000000001
                },
                {
                  "lat": 33.805350000000004,
                  "lng": -118.35136000000001
                },
                {
                  "lat": 33.805330000000005,
                  "lng": -118.35138
                },
                {
                  "lat": 33.805310000000006,
                  "lng": -118.35141000000002
                },
                {
                  "lat": 33.8053,
                  "lng": -118.35142
                },
                {
                  "lat": 33.8053,
                  "lng": -118.35145000000001
                },
                {
                  "lat": 33.80529,
                  "lng": -118.35147
                },
                {
                  "lat": 33.80529,
                  "lng": -118.35149000000001
                },
                {
                  "lat": 33.80528,
                  "lng": -118.35157000000001
                }
              ],
              "lat_lngs": [
                {
                  "lat": 33.805600000000005,
                  "lng": -118.35121000000001
                },
                {
                  "lat": 33.80557,
                  "lng": -118.35125000000001
                },
                {
                  "lat": 33.80554,
                  "lng": -118.35127000000001
                },
                {
                  "lat": 33.805510000000005,
                  "lng": -118.35128
                },
                {
                  "lat": 33.80547,
                  "lng": -118.35129
                },
                {
                  "lat": 33.80541,
                  "lng": -118.35131000000001
                },
                {
                  "lat": 33.80539,
                  "lng": -118.35133
                },
                {
                  "lat": 33.80537,
                  "lng": -118.35134000000001
                },
                {
                  "lat": 33.80536,
                  "lng": -118.35134000000001
                },
                {
                  "lat": 33.805350000000004,
                  "lng": -118.35136000000001
                },
                {
                  "lat": 33.805330000000005,
                  "lng": -118.35138
                },
                {
                  "lat": 33.805310000000006,
                  "lng": -118.35141000000002
                },
                {
                  "lat": 33.8053,
                  "lng": -118.35142
                },
                {
                  "lat": 33.8053,
                  "lng": -118.35145000000001
                },
                {
                  "lat": 33.80529,
                  "lng": -118.35147
                },
                {
                  "lat": 33.80529,
                  "lng": -118.35149000000001
                },
                {
                  "lat": 33.80528,
                  "lng": -118.35157000000001
                }
              ],
              "instructions": "Slight <b>right</b> toward <b>CA-1 N</b>",
              "start_point": {
                "lat": 33.8056006,
                "lng": -118.3512105
              },
              "end_point": {
                "lat": 33.805282,
                "lng": -118.3515742
              }
            },
            {
              "distance": {
                "text": "0.4 mi",
                "value": 638
              },
              "duration": {
                "text": "1 min",
                "value": 71
              },
              "end_location": {
                "lat": 33.8077396,
                "lng": -118.3578157
              },
              "maneuver": "turn-right",
              "polyline": {
                "points": "_rimEhpjqUIVGNa@tAcAfDo@|BENCHERg@hBc@vAUx@IVW|@IVK\\GTCJELABUr@I\\GRK`@Qf@Qp@CJi@dB"
              },
              "start_location": {
                "lat": 33.805282,
                "lng": -118.3515742
              },
              "travel_mode": "DRIVING",
              "encoded_lat_lngs": "_rimEhpjqUIVGNa@tAcAfDo@|BENCHERg@hBc@vAUx@IVW|@IVK\\GTCJELABUr@I\\GRK`@Qf@Qp@CJi@dB",
              "path": [
                {
                  "lat": 33.80528,
                  "lng": -118.35157000000001
                },
                {
                  "lat": 33.805330000000005,
                  "lng": -118.35169
                },
                {
                  "lat": 33.80537,
                  "lng": -118.35177000000002
                },
                {
                  "lat": 33.80554,
                  "lng": -118.35220000000001
                },
                {
                  "lat": 33.80588,
                  "lng": -118.35304000000001
                },
                {
                  "lat": 33.80612,
                  "lng": -118.35367000000001
                },
                {
                  "lat": 33.80615,
                  "lng": -118.35375
                },
                {
                  "lat": 33.80617,
                  "lng": -118.3538
                },
                {
                  "lat": 33.806200000000004,
                  "lng": -118.35390000000001
                },
                {
                  "lat": 33.806400000000004,
                  "lng": -118.35443000000001
                },
                {
                  "lat": 33.806580000000004,
                  "lng": -118.35487
                },
                {
                  "lat": 33.80669,
                  "lng": -118.35516000000001
                },
                {
                  "lat": 33.806740000000005,
                  "lng": -118.35528000000001
                },
                {
                  "lat": 33.80686,
                  "lng": -118.35559
                },
                {
                  "lat": 33.80691,
                  "lng": -118.35571000000002
                },
                {
                  "lat": 33.80697,
                  "lng": -118.35586
                },
                {
                  "lat": 33.807010000000005,
                  "lng": -118.35597000000001
                },
                {
                  "lat": 33.807030000000005,
                  "lng": -118.35603
                },
                {
                  "lat": 33.80706,
                  "lng": -118.35610000000001
                },
                {
                  "lat": 33.80707,
                  "lng": -118.35612
                },
                {
                  "lat": 33.80718,
                  "lng": -118.35638000000002
                },
                {
                  "lat": 33.807230000000004,
                  "lng": -118.35653
                },
                {
                  "lat": 33.80727,
                  "lng": -118.35663000000001
                },
                {
                  "lat": 33.80733,
                  "lng": -118.3568
                },
                {
                  "lat": 33.80742,
                  "lng": -118.35700000000001
                },
                {
                  "lat": 33.80751,
                  "lng": -118.35725000000001
                },
                {
                  "lat": 33.80753,
                  "lng": -118.35731000000001
                },
                {
                  "lat": 33.80774,
                  "lng": -118.35782
                }
              ],
              "lat_lngs": [
                {
                  "lat": 33.80528,
                  "lng": -118.35157000000001
                },
                {
                  "lat": 33.805330000000005,
                  "lng": -118.35169
                },
                {
                  "lat": 33.80537,
                  "lng": -118.35177000000002
                },
                {
                  "lat": 33.80554,
                  "lng": -118.35220000000001
                },
                {
                  "lat": 33.80588,
                  "lng": -118.35304000000001
                },
                {
                  "lat": 33.80612,
                  "lng": -118.35367000000001
                },
                {
                  "lat": 33.80615,
                  "lng": -118.35375
                },
                {
                  "lat": 33.80617,
                  "lng": -118.3538
                },
                {
                  "lat": 33.806200000000004,
                  "lng": -118.35390000000001
                },
                {
                  "lat": 33.806400000000004,
                  "lng": -118.35443000000001
                },
                {
                  "lat": 33.806580000000004,
                  "lng": -118.35487
                },
                {
                  "lat": 33.80669,
                  "lng": -118.35516000000001
                },
                {
                  "lat": 33.806740000000005,
                  "lng": -118.35528000000001
                },
                {
                  "lat": 33.80686,
                  "lng": -118.35559
                },
                {
                  "lat": 33.80691,
                  "lng": -118.35571000000002
                },
                {
                  "lat": 33.80697,
                  "lng": -118.35586
                },
                {
                  "lat": 33.807010000000005,
                  "lng": -118.35597000000001
                },
                {
                  "lat": 33.807030000000005,
                  "lng": -118.35603
                },
                {
                  "lat": 33.80706,
                  "lng": -118.35610000000001
                },
                {
                  "lat": 33.80707,
                  "lng": -118.35612
                },
                {
                  "lat": 33.80718,
                  "lng": -118.35638000000002
                },
                {
                  "lat": 33.807230000000004,
                  "lng": -118.35653
                },
                {
                  "lat": 33.80727,
                  "lng": -118.35663000000001
                },
                {
                  "lat": 33.80733,
                  "lng": -118.3568
                },
                {
                  "lat": 33.80742,
                  "lng": -118.35700000000001
                },
                {
                  "lat": 33.80751,
                  "lng": -118.35725000000001
                },
                {
                  "lat": 33.80753,
                  "lng": -118.35731000000001
                },
                {
                  "lat": 33.80774,
                  "lng": -118.35782
                }
              ],
              "instructions": "Turn <b>right</b> onto <b>CA-1 N</b><div style=\"font-size:0.9em\">Destination will be on the right</div>",
              "start_point": {
                "lat": 33.805282,
                "lng": -118.3515742
              },
              "end_point": {
                "lat": 33.8077396,
                "lng": -118.3578157
              }
            }
          ],
          "traffic_speed_entry": [],
          "via_waypoint": [],
          "via_waypoints": []
        }
      ],
      "overview_polyline": "_|kmExshqULvAGPQf@{@dCoA`EEJK@o@?Cl@Af@S~EO`EKjDdA?KbDMfDU~FInBtG@~HA`F?lCBbF@`DAhE?~E?rK@rG?dBEJJ\\JJHFP@RQf@{CjKI\\kA`EaAfDgAvD}AlF",
      "summary": "Hawthorne Blvd",
      "warnings": [],
      "waypoint_order": [],
      "overview_path": [
        {
          "lat": 33.81712,
          "lng": -118.34189
        },
        {
          "lat": 33.81705,
          "lng": -118.34233
        },
        {
          "lat": 33.81709,
          "lng": -118.34242
        },
        {
          "lat": 33.81718,
          "lng": -118.34262000000001
        },
        {
          "lat": 33.81748,
          "lng": -118.34329000000001
        },
        {
          "lat": 33.81788,
          "lng": -118.34426
        },
        {
          "lat": 33.817910000000005,
          "lng": -118.34432000000001
        },
        {
          "lat": 33.81797,
          "lng": -118.34433000000001
        },
        {
          "lat": 33.81821,
          "lng": -118.34433000000001
        },
        {
          "lat": 33.81823,
          "lng": -118.34456000000002
        },
        {
          "lat": 33.81824,
          "lng": -118.34476000000001
        },
        {
          "lat": 33.818340000000006,
          "lng": -118.34588000000001
        },
        {
          "lat": 33.81842,
          "lng": -118.34685
        },
        {
          "lat": 33.81848,
          "lng": -118.34771
        },
        {
          "lat": 33.818130000000004,
          "lng": -118.34771
        },
        {
          "lat": 33.81819,
          "lng": -118.34853000000001
        },
        {
          "lat": 33.81826,
          "lng": -118.34937000000001
        },
        {
          "lat": 33.81837,
          "lng": -118.35065000000002
        },
        {
          "lat": 33.81842,
          "lng": -118.35121000000001
        },
        {
          "lat": 33.81703,
          "lng": -118.35122000000001
        },
        {
          "lat": 33.815430000000006,
          "lng": -118.35121000000001
        },
        {
          "lat": 33.8143,
          "lng": -118.35121000000001
        },
        {
          "lat": 33.813590000000005,
          "lng": -118.35123000000002
        },
        {
          "lat": 33.812450000000005,
          "lng": -118.35124
        },
        {
          "lat": 33.811640000000004,
          "lng": -118.35123000000002
        },
        {
          "lat": 33.81063,
          "lng": -118.35123000000002
        },
        {
          "lat": 33.80951,
          "lng": -118.35123000000002
        },
        {
          "lat": 33.80749,
          "lng": -118.35124
        },
        {
          "lat": 33.806110000000004,
          "lng": -118.35124
        },
        {
          "lat": 33.805600000000005,
          "lng": -118.35121000000001
        },
        {
          "lat": 33.80554,
          "lng": -118.35127000000001
        },
        {
          "lat": 33.80539,
          "lng": -118.35133
        },
        {
          "lat": 33.805330000000005,
          "lng": -118.35138
        },
        {
          "lat": 33.80529,
          "lng": -118.35147
        },
        {
          "lat": 33.80528,
          "lng": -118.35157000000001
        },
        {
          "lat": 33.80537,
          "lng": -118.35177000000002
        },
        {
          "lat": 33.80615,
          "lng": -118.35375
        },
        {
          "lat": 33.806200000000004,
          "lng": -118.35390000000001
        },
        {
          "lat": 33.806580000000004,
          "lng": -118.35487
        },
        {
          "lat": 33.80691,
          "lng": -118.35571000000002
        },
        {
          "lat": 33.80727,
          "lng": -118.35663000000001
        },
        {
          "lat": 33.80774,
          "lng": -118.35782
        }
      ]
    }
  ],
  "status": "OK",
  "request": {
    "origin": {
      "lat": 33.816839,
      "lng": -118.3418066
    },
    "destination": {
      "lat": 33.807760319147675,
      "lng": -118.35780353769532
    },
    "travelMode": "DRIVING"
  }
};
}
