import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { NovaPageRoutingModule } from './nova-duvida-routing.module';

import { NovaPage } from './nova-duvida.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    NovaPageRoutingModule
  ],
  declarations: [NovaPage]
})
export class NovaPageModule {}
