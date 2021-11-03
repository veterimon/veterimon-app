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
    name: '',
    email: '',
    description: ''
  };

  public fGroup: FormGroup;

  constructor(public modal: ModalController, private fBuilder: FormBuilder) {
    this.fGroup = this.fBuilder.group({
      'name': [this.user.name],
      'email': [this.user.email]
    });

  }
  ngOnInit() {}
  
  submitForm() {
    console.log(this.fGroup.value)
  }
  
  fecharModal() {
    this.modal.dismiss();
  }

}