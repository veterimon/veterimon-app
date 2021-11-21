import { IonicModule } from '@ionic/angular';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ConsultaPage } from './consulta.page';
import { ExploreContainerComponentModule } from '../explore-container/explore-container.module';

import { FormsModule } from '@angular/forms';

import { ConsultaPageRoutingModule } from './consulta-routing.module';

@NgModule({
  imports: [
    IonicModule,
    CommonModule,
    ExploreContainerComponentModule,
    ConsultaPageRoutingModule,
    FormsModule,
  ],
  declarations: [ConsultaPage]
})
export class ConsultaPageModule {}