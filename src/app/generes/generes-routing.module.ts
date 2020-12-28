import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { GeneresPage } from './generes.page';

const routes: Routes = [
  {
    path: '',
    component: GeneresPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class GeneresPageRoutingModule {}
