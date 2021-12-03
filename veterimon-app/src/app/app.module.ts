import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouteReuseStrategy } from '@angular/router';
import { IonicModule, IonicRouteStrategy } from '@ionic/angular';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ModalComponent } from './componentes/modal/modal.component';
import { IonicStorageModule } from '@ionic/storage-angular';
import { Drivers } from '@ionic/storage';
import { AngularFireModule} from '@angular/fire/compat';
import { environment } from 'src/environments/environment';
import { DadosConsultaService } from './services/dados-consulta.service';
import { HttpClientModule } from '@angular/common/http';

@NgModule({
  declarations: [
    AppComponent,
    ModalComponent
  ],
  entryComponents: [],
  imports: [
    AngularFireModule.initializeApp(environment.firebase),
    BrowserModule,
    IonicModule.forRoot(),
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
    ReactiveFormsModule,
    IonicStorageModule.forRoot({
      driverOrder: [Drivers.IndexedDB, Drivers.LocalStorage]
    })
  ],
  providers: [{ provide: RouteReuseStrategy, useClass: IonicRouteStrategy }, DadosConsultaService],
  bootstrap: [AppComponent],
})
export class AppModule {}
