import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { IonicModule } from '@ionic/angular';

import { AgendarConsultaPageRoutingModule } from './agendar-consulta-routing.module';

import { AgendarConsultaPage } from './agendar-consulta.page';

// -- para pegar os dados inseridos
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

//importando o componente do Formulário
import { FormularioComponent } from '../formulario/formulario.component';

@NgModule
(
  {
    imports: 
    [
      CommonModule,
      IonicModule,
      AgendarConsultaPageRoutingModule,
      ReactiveFormsModule,
      FormsModule,
    ],
    declarations: [AgendarConsultaPage, FormularioComponent]
  }
)
export class AgendarConsultaPageModule {}
