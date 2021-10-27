import { IonicModule } from '@ionic/angular';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { NoticiaPage } from './noticia.page';
import { ExploreContainerComponentModule } from '../explore-container/explore-container.module';

import { NoticiaPageRoutingModule } from './noticia-routing.module';

@NgModule({
  imports: [
    IonicModule,
    CommonModule,
    FormsModule,
    ExploreContainerComponentModule,
    NoticiaPageRoutingModule
  ],
  declarations: [NoticiaPage]
})
export class NoticiaPageModule {}
