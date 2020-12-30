import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { TabsPage } from './tabs.page';

const routes: Routes = [
  {
    path: 'tabs',
    component: TabsPage,
    children: [
      {
        path: 'main-menu',
        loadChildren: () => import('../main-menu/main-menu.module').then(m => m.MainMenuPageModule)
      },
      {
        path: 'movie',
        loadChildren: () => import('../movie/movie.module').then(m => m.MoviePageModule)
      },
      {
        path: 'tv',
        loadChildren: () => import('../tv/tv.module').then(m => m.TvPageModule)
      },
      {
        path: 'search',
        loadChildren: () => import('../search/search.module').then(m => m.SearchPageModule)
      },
      {
        path: '',
        redirectTo: '/tabs/main-menu',
        pathMatch: 'full'
      }
    ]
  },
  {
    path: '',
    redirectTo: '/tabs/main-menu',
    pathMatch: 'full'
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class TabsPageRoutingModule { }
