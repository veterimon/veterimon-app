import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    loadChildren: () => import('./tabs/tabs.module').then(m => m.TabsPageModule)
  },
  {
    path: 'tab4',
    loadChildren: () => import('./perfils/perfil.module').then( m => m.PerfilPageModule)
  },  {
    path: 'fale-conosco',
    loadChildren: () => import('./fale-conosco/fale-conosco.module').then( m => m.FaleConoscoPageModule)
  },
  {
    path: 'trabalhe-conosco',
    loadChildren: () => import('./trabalhe-conosco/trabalhe-conosco.module').then( m => m.TrabalheConoscoPageModule)
  }


];
@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule {}
