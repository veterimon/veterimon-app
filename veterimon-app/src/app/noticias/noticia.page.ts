import { Noticia } from './interfaceNoticia/noticia.model';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ModalController } from '@ionic/angular';
import { ModalComponent } from '../componentes/modal/modal.component';
import { NoticiaService } from './noticia.service';

@Component({
  selector: 'app-noticia',
  templateUrl: 'noticia.page.html',
  styleUrls: ['noticia.page.scss']
})
export class NoticiaPage implements OnInit {

  noticia: Noticia = {
    id: null,
    name: '',
    email: '',
    duvida: ''
  }

  noticias: Noticia[]

  constructor(public modalController: ModalController, public router: Router, private noticiaService: NoticiaService) {}

  ngOnInit(): void {
    this.noticiaService.read().subscribe(noticias => {
      this.noticias = noticias
      console.log(noticias)
    })

  }

  logout() {
    //this.router.navigate(['/login'])
    this.router.navigate(['/login']);
    window.location.replace('/login');
    }

    createProduct(): void {
      this.noticiaService.create(this.noticia).subscribe(() => {
        this.noticiaService.showMessage('Operação realizada com sucesso');
        window.location.reload()
      })
    }

    deleteProduct(): void {
      this.noticiaService.delete(this.noticia).subscribe(() => {
        this.noticiaService.showMessage('Operação realizada com sucesso');
        window.location.reload()
      })
    }

  }