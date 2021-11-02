import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import { CpfValidator } from '../validators/cpf-validator';
import { comparaValidator } from '../validators/compara-validator';
import { Usuario } from '../models/Usuario';
import { StorageService } from '../services/storage.service';

@Component({
  selector: 'app-cadastro',
  templateUrl: './cadastro.page.html',
  styleUrls: ['./cadastro.page.scss'],
})
export class CadastroPage implements OnInit {

  formCadastro: FormGroup;
  usuario: Usuario = new Usuario();

  

  mensagens = {
    nome: [
      { tipo: 'required', mensagem: 'O campo Nome é obrigatório.' },
      { tipo: 'minlength', mensagem: 'O nome deve ter pelo menos 3 caracteres.' },
    ],
    cpf: [
      { tipo: 'required', mensagem: 'O campo CPF é obrigatório.' },
      { tipo: 'invalido', mensagem: 'CPF Inválido.' },
    ],
    email: [
      { tipo: 'required', mensagem: 'O campo E-mail é obrigatório.' },
      { tipo: 'email', mensagem: 'E-mail Inválido.' },
    ],
    senha: [
      { tipo: 'required', mensagem: 'É obrigatório confirmar senha.' },
      { tipo: 'minlength', mensagem: 'A senha deve ter pelo menos 6 caracteres.', },
      { tipo: 'maxlength', mensagem: 'A senha deve ter no máximo 8 caractéres.' },
    ],
    confirmaSenha: [
      { tipo: 'required', mensagem: 'É obrigatório confirmar senha.' },
      { tipo: 'minlength', mensagem: 'A senha deve ter pelo menos 6 caracteres.', },
      { tipo: 'maxlength', mensagem: 'A senha deve ter no máximo 8 caractéres.' },
      { tipo: 'comparacao', mensagem: 'Deve ser igual a Senha.' },
    ],
  };

  constructor(private router: Router, private formBuilder: FormBuilder, private storgeService: StorageService, private route: Router) { 


    this.formCadastro = this.formBuilder.group({
      nome: ['', Validators.compose([Validators.required, Validators.minLength(3)])],
      cpf: ['', Validators.compose([Validators.required, CpfValidator.cpfValido])],
      email: ['', Validators.compose([Validators.required, Validators.email])],
      senha: ['',  Validators.compose([Validators.required, Validators.minLength(8), Validators.maxLength(13)])],
      confirmaSenha: ['', Validators.compose([Validators.required, Validators.minLength(8), Validators.maxLength(13)])]
    }, {
      validator: comparaValidator('senha', 'confirmaSenha')
    })
  }

  ngOnInit() {
  }

  voltarPage(): void {
    this.router.navigate(['tabs/home'])
  }

  async salvarCadastro() {
    console.log('Formulário: ', this.formCadastro.valid);

    if(this.formCadastro.valid) {
      this.usuario.nome = this.formCadastro.value.nome;
      this.usuario.cpf = this.formCadastro.value.cpf;
      this.usuario.email = this.formCadastro.value.email;
      this.usuario.senha = this.formCadastro.value.senha;
      await this.storgeService.set(this.usuario.email, this.usuario);
      this.route.navigateByUrl('tabs/home');
    } else {
      alert('Formulário Inválido');
    }
  }

  atualizar() {
    this.router.navigate(['tabs/home'])
    window.location.reload()
  }

}
