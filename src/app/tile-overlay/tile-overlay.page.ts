import { Component, OnInit, OnDestroy } from '@angular/core';
import {
  GoogleMaps,
  GoogleMap,
  GoogleMapsEvent,
  MapTypeId,
  Environment,
  TileOverlay
} from '@ionic-native/google-maps';
import { MapService } from '../map.service';


@Component({
  selector: 'app-tile-overlay',
  templateUrl: './tile-overlay.page.html',
  styleUrls: ['./tile-overlay.page.scss'],
})
export class TileOverlayPage implements OnInit, OnDestroy {

  map: GoogleMap;
  layers = [];

  constructor(private mapService: MapService) { }

  ngOnInit() {
    this.loadMap();
  }

  ngOnDestroy() {
    this.layers.forEach((layer: TileOverlay) => {
      layer.remove();
    });
    this.mapService.detachMap();
  }

  async loadMap() {
    this.map = await this.mapService.attachMap('map_canvas', {
      'mapType' : MapTypeId.NONE
    });

    [
      "https://stamen-tiles.a.ssl.fastly.net/toner/{zoom}/{x}/{y}.png",
      "https://stamen-tiles.a.ssl.fastly.net/watercolor/{zoom}/{x}/{y}.jpg"
    ].forEach((layerUrl: string, idx: number) => {

      const layer: TileOverlay = this.map.addTileOverlaySync({
        zIndex: idx,
        getTile: (x: number, y: number, zoom: number) => {
          return layerUrl.replace("{zoom}", zoom + "")
                    .replace("{x}", x + "")
                    .replace("{y}", y + "");
        }
      });
      this.layers.push(layer);
    });

  }

  onButtonClick() {
    this.layers = this.layers.reverse();
    this.layers.forEach((layer: any, idx: number) => {
      layer.setZIndex(idx);
    });
  }
}
