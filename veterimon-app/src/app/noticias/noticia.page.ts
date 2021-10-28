import { Component } from '@angular/core';
import { ModalController } from '@ionic/angular';
import { ModalComponent } from '../componentes/modal/modal.component';

@Component({
  selector: 'app-noticia',
  templateUrl: 'noticia.page.html',
  styleUrls: ['noticia.page.scss']
})
export class NoticiaPage {

  constructor(public modalController: ModalController) {}

  }

