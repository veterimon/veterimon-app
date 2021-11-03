import { IonicModule } from '@ionic/angular';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { Routes, RouterModule } from '@angular/router';

import { TabsPageRoutingModule } from './tabs-routing.module';

import { TabsPage } from './tabs.page';

@NgModule({
  imports: [
    IonicModule,
    CommonModule,
    FormsModule,
    TabsPageRoutingModule
  ],
  declarations: [TabsPage]
})
export class TabsPageModule {}

const routes: Routes = [
  {
    path: 'tabs',
    component: TabsPage,
    children: [
      {
        path: 'fale-conosco',
        loadChildren: () => import('../fale-conosco/fale-conosco.module').then(m => m.FaleConoscoPageModule)
      },

      {
        path: 'trabalhe-conosco',
        loadChildren: () => import('../trabalhe-conosco/trabalhe-conosco.module').then(m => m.TrabalheConoscoPageModule)
      },

      {
        path: '',
        redirectTo: '/tabs/fale-conosco',
        pathMatch: 'full'
      }
    ]
  },
  {
    path: '',
    redirectTo: '/tabs/fale-conosco',
    pathMatch: 'full'
  }
];


@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class MenuSanduichePageRoutingModule { }
