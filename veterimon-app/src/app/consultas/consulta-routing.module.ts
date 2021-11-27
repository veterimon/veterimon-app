import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ConsultaPage } from './consulta.page';

const routes: Routes = [
  {
    path: '',
    component: ConsultaPage,
  },  {
    path: 'agendar-consulta',
    loadChildren: () => import('./agendar-consulta/agendar-consulta.module').then( m => m.AgendarConsultaPageModule)
  }

];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ConsultaPageRoutingModule {}
