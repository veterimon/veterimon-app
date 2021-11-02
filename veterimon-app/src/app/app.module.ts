import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouteReuseStrategy } from '@angular/router';

import { IonicModule, IonicRouteStrategy } from '@ionic/angular';
// import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
// import { ModalComponent } from './componentes/modal/modal.component';

// -- importar firebase + enviornment
import { environment } from '../environments/environment';
import { AngularFireModule } from '@angular/fire/compat';
import { AngularFireStorageModule } from '@angular/fire/compat/storage';
import { AngularFireDatabaseModule } from '@angular/fire/compat/database';

// -- armazenamento interno
import { IonicStorageModule } from '@ionic/storage-angular';
import { ConsultaInternaService } from './dados-armazenados/consulta.service';
import { DatePipe } from '@angular/common';

@NgModule(
  {
    declarations: 
    [
      AppComponent,
      // ModalComponent
    ],
    entryComponents: [],
    imports: 
    [
      BrowserModule, 
      IonicModule.forRoot(), 
      AppRoutingModule, 
      // -- dados armazenados
      IonicStorageModule.forRoot(),
      // FormsModule,
      // ReactiveFormsModule,

      // -- firebase 
      AngularFireModule.initializeApp(environment.firebaseConfig),
      AngularFireStorageModule,
      AngularFireDatabaseModule
    ],
    providers: [{ provide: RouteReuseStrategy, useClass: IonicRouteStrategy },  ConsultaInternaService, DatePipe],
    bootstrap: [AppComponent],
  }
)
export class AppModule {}
