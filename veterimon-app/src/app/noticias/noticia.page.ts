import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { ModalController } from '@ionic/angular';
import { ModalComponent } from '../componentes/modal/modal.component';

@Component({
  selector: 'app-noticia',
  templateUrl: 'noticia.page.html',
  styleUrls: ['noticia.page.scss']
})
export class NoticiaPage {

  constructor(public modalController: ModalController, public router:Router) {}

  logout() {
    //this.router.navigate(['/login'])
    this.router.navigate(['/login']) 
    window.location.replace('/login')
  }

  }

