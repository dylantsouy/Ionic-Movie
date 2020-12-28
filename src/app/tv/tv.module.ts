import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { TvPageRoutingModule } from './tv-routing.module';

import { TvPage } from './tv.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    TvPageRoutingModule
  ],
  declarations: [TvPage]
})
export class TvPageModule {}
