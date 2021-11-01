import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { TrabalheConoscoPage } from './trabalhe-conosco.page';

const routes: Routes = [
  {
    path: '',
    component: TrabalheConoscoPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class TrabalheConoscoPageRoutingModule {}
