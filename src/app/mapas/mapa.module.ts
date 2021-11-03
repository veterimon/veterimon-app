import { IonicModule } from '@ionic/angular';
import { RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { MapaPage } from './mapa.page';
import { ExploreContainerComponentModule } from '../explore-container/explore-container.module';

import { MapaPageRoutingModule } from './mapa-routing.module';

@NgModule({
  imports: [
    IonicModule,
    CommonModule,
    FormsModule,
    ExploreContainerComponentModule,
    RouterModule.forChild([{ path: '', component: MapaPage }]),
    MapaPageRoutingModule,
  ],
  declarations: [MapaPage]
})
export class MapaPageModule {}
