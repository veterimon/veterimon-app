import { Component, OnInit } from '@angular/core';
import { AlertController } from '@ionic/angular';

@Component({
  selector: 'app-fale-conosco',
  templateUrl: './fale-conosco.page.html',
  styleUrls: ['./fale-conosco.page.scss'],
})
export class FaleConoscoPage  {
  public alertController: AlertController;


  constructor(alert: AlertController) {
    this.alertController = alert;
  }


  async presentAlert(): Promise<void> {

    const alerta = await this.alertController.create({
      header: 'Mensagem enviada com sucesso!',
      message: 'Aguarde até 24h que responderemos sua mensagem!',
      buttons: ['OK']
    });


    alerta.present();
  }

}

