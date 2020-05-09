import { Component, OnInit, OnDestroy, NgZone } from '@angular/core';
import {
  GoogleMaps,
  GoogleMap,
  GoogleMapsEvent,
  Marker,
  HtmlInfoWindow,
  Environment
} from '@ionic-native/google-maps';
import { MapService } from '../map.service';

@Component({
  selector: 'app-html-info-window',
  templateUrl: './html-info-window.page.html',
  styleUrls: ['./html-info-window.page.scss'],
})
export class HtmlInfoWindowPage implements OnInit, OnDestroy {

  map: GoogleMap;

  constructor(private mapService: MapService, private _ngZone: NgZone) { }

  ngOnInit() {
    this.loadMap();
  }

  ngOnDestroy() {
    this.mapService.detachMap();
  }

  async loadMap() {
    this.map = await this.mapService.attachMap('map_canvas', {
      camera: {
        target: {lat: 35.685208, lng: -121.168225},
        zoom: 19,
        tilt: 45
      },
      'gestures': {
        // 'scroll': false,
        // 'tilt': false,
        // 'rotate': false,
        // 'zoom': false
        'scroll': true,
        'tilt': true,
        'rotate': true,
        'zoom': true
      }
    });

    let htmlInfoWindow = new HtmlInfoWindow();

    // flip-flop contents
    // https://davidwalsh.name/css-flip
    let frame: HTMLElement = document.createElement('div');
    frame.innerHTML = `
<style type="text/css">
.flip-container h3 {
	font-size: 20px;
  margin: auto;
}
.flip-container img {
	width: 160px;
  height: auto;
}
/* entire container, keeps perspective */
.flip-container {
  -webkit-perspective: 1000;
  -moz-perspective: 1000;
  -o-perspective: 1000;
  perspective: 1000;
}
/* flip the pane when hovered */
.flip-container.hover .flipper {
  -webkit-transform: rotateY(180deg);
  -moz-transform: rotateY(180deg);
  -o-transform: rotateY(180deg);
  -ms-transform: rotateY(180deg);
  transform: rotateY(180deg);
}

.flip-container, .front, .back {
  width: 170px;
  height: 200px;
}

/* flip speed goes here */
.flipper {
  transform-style: preserve-3d;
  -moz-transform: perspective(1000px);
  -moz-transform-style: preserve-3d;
  -webkit-transition: 0.6s;
  -moz-transition: 0.6s;
  -o-transition: 0.6s;
  -ms-transition: 0.6s;
  transition: 0.6s;

  position: relative;
}

/* hide back of pane during swap */
.front, .back {
  -webkit-backface-visibility: hidden;
  -moz-backface-visibility: hidden;
  -o-backface-visibility: hidden;
  backface-visibility: hidden;
  background-color: white;

  -webkit-transform-style: preserve-3d;
  -moz-transform-style: preserve-3d;
  -o-transform-style: preserve-3d;
  -ms-transform-style: preserve-3d;
  transform-style: preserve-3d;

  position: absolute;
  top: 0;
  left: 0;
}

/* front pane, placed above back */
.front {
  z-index: 2;
  -webkit-transform: rotateY(0deg);
  -moz-transform: rotateY(0deg);
  -o-transform: rotateY(0deg);
  -ms-transform: rotateY(0deg);
  transform: rotateY(0deg);
}

/* back, initially hidden pane */
.back {
  -webkit-transform: rotateY(-180deg);
  -moz-transform: rotateY(-180deg);
  -o-transform: rotateY(-180deg);
  -ms-transform: rotateY(-180deg);
  transform: rotateY(-180deg);
}
</style>
<div class="flip-container" id="flip-container">
  <div class="flipper">
    <div class="front">
    <h3>Click this photo!</h3>
    <img src="assets/imgs/hearst_castle.jpg">
  </div>
  <div class="back">
    <!-- back content -->
    Hearst Castle above the clouds on top of The Enchanted Hill. William Randolph Hearst started to build a fabulous estate on his ranchland overlooking the village of San Simeon in 1919.
    </div>
  </div>
</div>`;

    frame.addEventListener("click", (evt) => {
    console.log(evt.target);
      let root: any = evt.target;
      while(root.parentNode) {
        root = root.parentNode;
      }
      let container = root.getElementById('flip-container');
      if (container.className.indexOf(' hover') > -1) {
        container.className = container.className.replace(" hover", "");
      } else {
        container.className += " hover";
      }
    });
    htmlInfoWindow.setContent(frame, {
      width: "170px"
    });

    this.map.addMarker({
      position: {lat: 35.685208, lng: -121.168225},
      draggable: true,
      disableAutoPan: true
    }).then((marker: Marker) => {

      marker.on(GoogleMapsEvent.MARKER_CLICK).subscribe(() => {
          htmlInfoWindow.open(marker);
      });
      marker.trigger(GoogleMapsEvent.MARKER_CLICK);

    });


  }
}
