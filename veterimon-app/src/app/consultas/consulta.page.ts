import { Component } from '@angular/core';
import { ModalController } from '@ionic/angular';
//import { ModalComponent } from '../componentes/modal/modal.component';

@Component({
  selector: 'app-consulta',
  templateUrl: 'consulta.page.html',
  styleUrls: ['consulta.page.scss']
})
export class ConsultaPage {
  constructor() { }

  ngOnInit() {
  }

  //constructor(public modalController: ModalController) {}

  // async chamarModal() {
  //   const modal = await this.modalController.create({
  //     component: ModalComponent,
  //     cssClass: 'my-custom-class'
  //   });
  //   return await modal.present();
  //   }
}