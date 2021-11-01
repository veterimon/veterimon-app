import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { TrabalheConoscoPageRoutingModule } from './trabalhe-conosco-routing.module';

import { TrabalheConoscoPage } from './trabalhe-conosco.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    TrabalheConoscoPageRoutingModule
  ],
  declarations: [TrabalheConoscoPage]
})
export class TrabalheConoscoPageModule {}
