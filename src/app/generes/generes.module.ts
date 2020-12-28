import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { GeneresPageRoutingModule } from './generes-routing.module';

import { GeneresPage } from './generes.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    GeneresPageRoutingModule
  ],
  declarations: [GeneresPage]
})
export class GeneresPageModule {}
