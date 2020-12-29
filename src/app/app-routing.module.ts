import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    loadChildren: () => import('./tabs/tabs.module').then(m => m.TabsPageModule)
  },
  {
    path: 'main-menu',
    loadChildren: () => import('./main-menu/main-menu.module').then( m => m.MainMenuPageModule)
  },
  {
    path: 'generes',
    loadChildren: () => import('./generes/generes.module').then( m => m.GeneresPageModule)
  },
  {
    path: 'tv',
    loadChildren: () => import('./tv/tv.module').then( m => m.TvPageModule)
  },
  {
    path: 'movie',
    loadChildren: () => import('./movie/movie.module').then( m => m.MoviePageModule)
  },
  {
    path: 'detail',
    loadChildren: () => import('./detail/detail.module').then( m => m.DetailPageModule)
  },
  {
    path: 'cast',
    loadChildren: () => import('./cast/cast.module').then( m => m.CastPageModule)
  },
  {
    path: 'trending',
    loadChildren: () => import('./trending/trending.module').then( m => m.TrendingPageModule)
  },
];
@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule {}
