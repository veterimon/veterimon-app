import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { HistoricoConsultaPage } from './historico-consulta.page';

const routes: Routes = [
  {
    path: '',
    component: HistoricoConsultaPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class HistoricoConsultaPageRoutingModule {}
