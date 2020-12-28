import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { TvPage } from './tv.page';

const routes: Routes = [
  {
    path: '',
    component: TvPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class TvPageRoutingModule {}
