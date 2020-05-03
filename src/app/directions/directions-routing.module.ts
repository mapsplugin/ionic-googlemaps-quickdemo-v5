import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { DirectionsPage } from './directions.page';

const routes: Routes = [
  {
    path: '',
    component: DirectionsPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class DirectionsPageRoutingModule {}
