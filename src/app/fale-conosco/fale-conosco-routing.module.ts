import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { FaleConoscoPage } from './fale-conosco.page';

const routes: Routes = [
  {
    path: '',
    component: FaleConoscoPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class FaleConoscoPageRoutingModule {}
