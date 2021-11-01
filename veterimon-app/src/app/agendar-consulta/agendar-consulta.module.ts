import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { AgendarConsultaPageRoutingModule } from './agendar-consulta-routing.module';

import { AgendarConsultaPage } from './agendar-consulta.page';

//importando o componente do Formulário
import { FormularioComponent } from '../formulario/formulario.component';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    AgendarConsultaPageRoutingModule
  ],
  declarations: [AgendarConsultaPage, FormularioComponent]
})
export class AgendarConsultaPageModule {}
