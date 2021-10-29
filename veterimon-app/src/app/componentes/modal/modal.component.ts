import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { AlertController, ModalController } from '@ionic/angular';

@Component({
  selector: 'app-modal',
  templateUrl: './modal.component.html',
  styleUrls: ['./modal.component.scss'],
})
export class ModalComponent implements OnInit {

  public user = {
    name: 'Carlos',
    email: 'carlos@gmail.com',
    password: '12345678',
    description: ''
  };

  public fGroup: FormGroup;

  public alertController: AlertController;


  constructor(public modal: ModalController, private fBuilder: FormBuilder) {

  }
  ngOnInit() {}
  
  submitForm() {
    console.log('Submit!');
  }
  
  fecharModal() {
    this.modal.dismiss();
  }

}
