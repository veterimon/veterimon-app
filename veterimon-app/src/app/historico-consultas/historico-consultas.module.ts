import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { HistoricoConsultasPageRoutingModule } from './historico-consultas-routing.module';

import { HistoricoConsultasPage } from './historico-consultas.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    HistoricoConsultasPageRoutingModule
  ],
  declarations: [HistoricoConsultasPage]
})
export class HistoricoConsultasPageModule {}
