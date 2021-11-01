import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { EditarConsultaPage } from './editar-consulta.page';

const routes: Routes = [
  {
    path: '',
    component: EditarConsultaPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class EditarConsultaPageRoutingModule {}
