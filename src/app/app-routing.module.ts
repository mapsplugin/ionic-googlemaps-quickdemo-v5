import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'basics',
    pathMatch: 'full'
  },
  {
    path: 'basics',
    loadChildren: () => import('./basics/basics.module').then( m => m.BasicsPageModule)
  },
  {
    path: 'circle',
    loadChildren: () => import('./circle/circle.module').then( m => m.CirclePageModule)
  },
  {
    path: 'directions',
    loadChildren: () => import('./directions/directions.module').then( m => m.DirectionsPageModule)
  },
  {
    path: 'elevation',
    loadChildren: () => import('./elevation/elevation.module').then( m => m.ElevationPageModule)
  },
  {
    path: 'html-info-window',
    loadChildren: () => import('./html-info-window/html-info-window.module').then( m => m.HtmlInfoWindowPageModule)
  },
  {
    path: 'marker',
    loadChildren: () => import('./marker/marker.module').then( m => m.MarkerPageModule)
  },
  {
    path: 'marker-cluster',
    loadChildren: () => import('./marker-cluster/marker-cluster.module').then( m => m.MarkerClusterPageModule)
  },
  {
    path: 'polyline',
    loadChildren: () => import('./polyline/polyline.module').then( m => m.PolylinePageModule)
  },
  {
    path: 'polygon',
    loadChildren: () => import('./polygon/polygon.module').then( m => m.PolygonPageModule)
  },
  {
    path: 'circle',
    loadChildren: () => import('./circle/circle.module').then( m => m.CirclePageModule)
  },
  {
    path: 'ground-overlay',
    loadChildren: () => import('./ground-overlay/ground-overlay.module').then( m => m.GroundOverlayPageModule)
  },
  {
    path: 'geocoding',
    loadChildren: () => import('./geocoding/geocoding.module').then( m => m.GeocodingPageModule)
  },
  {
    path: 'tile-overlay',
    loadChildren: () => import('./tile-overlay/tile-overlay.module').then( m => m.TileOverlayPageModule)
  },
  {
    path: 'kml-overlay',
    loadChildren: () => import('./kml-overlay/kml-overlay.module').then( m => m.KmlOverlayPageModule)
  },
  {
    path: 'street-view',
    loadChildren: () => import('./street-view/street-view.module').then( m => m.StreetViewPageModule)
  },
  {
    path: 'elevation',
    loadChildren: () => import('./elevation/elevation.module').then( m => m.ElevationPageModule)
  }
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule {}
