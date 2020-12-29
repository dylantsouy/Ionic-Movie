import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { CastPage } from './cast.page';

const routes: Routes = [
  {
    path: '',
    component: CastPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class CastPageRoutingModule {}
