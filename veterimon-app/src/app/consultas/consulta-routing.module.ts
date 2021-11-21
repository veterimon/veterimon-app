import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ConsultaPage } from './consulta.page';

const routes: Routes = [
  {
    path: '',
    component: ConsultaPage,
    children: [
      {
        path: 'consultas', //adicionar o caminho da pasta filha no arquivo routing.module da pasta mãe, e adicionar .. no import
        loadChildren: () => import('../consultas/consulta.module').then( m => m.ConsultaPageModule)
        }
      ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ConsultaPageRoutingModule {}