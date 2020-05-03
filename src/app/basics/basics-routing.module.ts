import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { BasicsPage } from './basics.page';

const routes: Routes = [
  {
    path: '',
    component: BasicsPage
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class BasicsPageRoutingModule {}
