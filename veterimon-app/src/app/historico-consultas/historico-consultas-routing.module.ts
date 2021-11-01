import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { HistoricoConsultasPage } from './historico-consultas.page';

const routes: Routes = [
  {
    path: '',
    component: HistoricoConsultasPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class HistoricoConsultasPageRoutingModule {}
