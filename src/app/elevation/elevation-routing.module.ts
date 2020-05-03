import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ElevationPage } from './elevation.page';

const routes: Routes = [
  {
    path: '',
    component: ElevationPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ElevationPageRoutingModule {}
