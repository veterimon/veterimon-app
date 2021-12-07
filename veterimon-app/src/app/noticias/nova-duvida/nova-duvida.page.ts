import { Router } from '@angular/router';
import { NoticiaService } from './../noticia.service';
import { Noticia } from './../interfaceNoticia/noticia.model';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-nova',
  templateUrl: './nova-duvida.page.html',
  styleUrls: ['./nova-duvida.page.scss'],
})
export class NovaPage implements OnInit {

  noticia: Noticia = {
    id: null,
    name: '',
    email: '',
    duvida: ''
  }

  constructor(private noticiaService: NoticiaService, public router: Router) { }

  ngOnInit() {
  }

  voltar(): void {
    window.history.back();
  }

  createProduct(): void {
    this.noticiaService.create(this.noticia).subscribe(() => {
      this.noticiaService.showMessage('Operação realizada com sucesso');
      window.location.reload()
    })

    this.voltar();
  }

}