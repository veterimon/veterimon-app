import { Router } from '@angular/router';
import { NoticiaService } from './../../noticia.service';
import { Noticia } from './../../interfaceNoticia/noticia.model';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-atualizar',
  templateUrl: './atualizar.page.html',
  styleUrls: ['./atualizar.page.scss'],
})
export class AtualizarPage implements OnInit {

  noticia: Noticia = {
    id: null,
    name: '',
    email: '',
    duvida: ''
  }

  constructor(private noticiaService: NoticiaService, public router: Router) { }

  ngOnInit() {
  }

  updateProduct(): void {
    this.noticiaService.update(this.noticia).subscribe(() => {
      this.noticiaService.showMessage('Produto atualizado')
      window.location.replace('/tabs/noticia');
      this.router.navigate(['/tabs/noticia']);
    })
  }

}