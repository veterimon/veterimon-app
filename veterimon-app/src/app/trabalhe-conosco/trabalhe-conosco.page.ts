import { Component, OnInit } from '@angular/core';
import { AlertController } from '@ionic/angular';

@Component({
  selector: 'app-trabalhe-conosco',
  templateUrl: './trabalhe-conosco.page.html',
  styleUrls: ['./trabalhe-conosco.page.scss'],
})
export class TrabalheConoscoPage {

  public alertController: AlertController;


  constructor(alert: AlertController) {
    this.alertController = alert;
  }


  async presentAlert(): Promise<void> {

    const alerta = await this.alertController.create({
      header: 'Curriculo enviado com sucesso!',
      message: 'Aguarde que entraremos em contato.',
      buttons: ['OK']
      
    });


    alerta.present();
  }

}

