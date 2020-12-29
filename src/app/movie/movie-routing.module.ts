import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { MoviePage } from './movie.page';

const routes: Routes = [
  {
    path: '',
    component: MoviePage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class MoviePageRoutingModule {}
