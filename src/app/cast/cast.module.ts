import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { CastPageRoutingModule } from './cast-routing.module';

import { CastPage } from './cast.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    CastPageRoutingModule
  ],
  declarations: [CastPage]
})
export class CastPageModule {}
