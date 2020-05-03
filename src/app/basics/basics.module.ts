import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { BasicsPageRoutingModule } from './basics-routing.module';

import { BasicsPage } from './basics.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    BasicsPageRoutingModule
  ],
  declarations: [
    BasicsPage,
  ],
  entryComponents: [ ]
})
export class BasicsPageModule {}
