import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { HistoricoConsultaPageRoutingModule } from './historico-consulta-routing.module';

import { HistoricoConsultaPage } from './historico-consulta.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    HistoricoConsultaPageRoutingModule
  ],
  declarations: [HistoricoConsultaPage]
})
export class HistoricoConsultaPageModule {}
