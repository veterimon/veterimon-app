import { Component, OnInit } from '@angular/core';
import { AlertController } from '@ionic/angular';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { TrabalheConosco } from '../models/TrabalheConosco';
import { StorageService } from '../services/storage.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-trabalhe-conosco',
  templateUrl: './trabalhe-conosco.page.html',
  styleUrls: ['./trabalhe-conosco.page.scss'],
})
export class TrabalheConoscoPage {

  formtrabalheConosco: FormGroup;
  trabalheConosco: TrabalheConosco = new TrabalheConosco();

  mensagens = {
    nome: [
      { tipo: 'required', mensagem: 'O campo Nome é obrigatório.' },
      { tipo: 'minlength', mensagem: 'O nome deve ter pelo menos 3 caracteres.' },
    ],
    objetivo: [
      { tipo: 'required', mensagem: 'O campo Objetivo é obrigatório.' },
      { tipo: 'minlength', mensagem: 'O objetivo deve ter pelo menos 3 caracteres.' },
    ],
    email: [
      { tipo: 'required', mensagem: 'O campo E-mail é obrigatório.' },
      { tipo: 'email', mensagem: 'E-mail Inválido.' },
    ],
  }

  public alertController: AlertController;


  constructor(alert: AlertController, private formBuilder: FormBuilder, private storageservice: StorageService, private route: Router) {
    this.formtrabalheConosco = this.formBuilder.group({
      nome: ['', Validators.compose([Validators.required, Validators.minLength(3)])],
      email: ['', Validators.compose([Validators.required, Validators.email])],
      objetivo: ['', Validators.compose([Validators.required, Validators.minLength(3)])],
    },);
    this.alertController = alert;
  }

  async salvar() {
    if (this.formtrabalheConosco.valid) {
      this.trabalheConosco.email = this.formtrabalheConosco.value.email;
      this.trabalheConosco.nome = this.formtrabalheConosco.value.nome;
      this.trabalheConosco.objetivo = this.formtrabalheConosco.value.objetivo;
      await this.storageservice.set(this.trabalheConosco.email, this.trabalheConosco);
      this.route.navigateByUrl('/')
    } else {
      alert('Formulário Inválido!');
    }
  }
}



