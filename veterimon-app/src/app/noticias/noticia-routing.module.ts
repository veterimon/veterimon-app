import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { NoticiaPage } from './noticia.page';

const routes: Routes = [
  {
    path: '',
    component: NoticiaPage,
  },
  {
    path: 'atualizar',
    loadChildren: () => import('./atualizar/atualizar/atualizar.module').then( m => m.AtualizarPageModule)
  }

];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class NoticiaPageRoutingModule {}