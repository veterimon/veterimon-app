import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AgendarConsultaPage } from './agendar-consulta.page';

const routes: Routes = [
  {
    path: '',
    component: AgendarConsultaPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class AgendarConsultaPageRoutingModule {}
