import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ElevationPageRoutingModule } from './elevation-routing.module';

import { ElevationPage } from './elevation.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ElevationPageRoutingModule
  ],
  declarations: [ElevationPage]
})
export class ElevationPageModule {}
