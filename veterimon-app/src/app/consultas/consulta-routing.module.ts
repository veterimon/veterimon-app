import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ConsultaPage } from './consulta.page';

const routes: Routes = [
  {
    path: '',
    component: ConsultaPage,
    children: [
      {
        path: 'agendar-consulta', //adicionar o caminho da pasta filha no arquivo routing.module da pasta mãe, e adicionar .. no import
        loadChildren: () => import('../agendar-consulta/agendar-consulta.module').then( m => m.AgendarConsultaPageModule)
        }
      ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ConsultaPageRoutingModule {}
