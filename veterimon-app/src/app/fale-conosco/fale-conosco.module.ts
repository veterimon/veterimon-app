import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { FaleConoscoPageRoutingModule } from './fale-conosco-routing.module';

import { FaleConoscoPage } from './fale-conosco.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    FaleConoscoPageRoutingModule
  ],
  declarations: [FaleConoscoPage]
})
export class FaleConoscoPageModule {}
