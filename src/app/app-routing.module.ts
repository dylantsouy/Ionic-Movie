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
];
@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule {}
