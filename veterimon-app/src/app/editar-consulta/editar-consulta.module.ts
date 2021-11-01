import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { EditarConsultaPageRoutingModule } from './editar-consulta-routing.module';

import { EditarConsultaPage } from './editar-consulta.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    EditarConsultaPageRoutingModule
  ],
  declarations: [EditarConsultaPage]
})
export class EditarConsultaPageModule {}
