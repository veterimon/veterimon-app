import { Component, OnInit } from '@angular/core';
import { AlertController, ModalController } from '@ionic/angular';

@Component({
  selector: 'app-modal',
  templateUrl: './modal.component.html',
  styleUrls: ['./modal.component.scss'],
})
export class ModalComponent implements OnInit {

  public alertController: AlertController;


  constructor(public modal: ModalController) {

  }
  ngOnInit() {}
  
  fecharModal() {
    this.modal.dismiss();
  }

}
