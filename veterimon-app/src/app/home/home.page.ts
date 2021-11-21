import { Component, OnInit } from '@angular/core';
import { Usuario } from '../models/Usuario';
// import { StorageService } from '../services/storage.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.page.html',
  styleUrls: ['./home.page.scss'],
})
export class HomePage implements OnInit {
  ngOnInit(): void {
    throw new Error('Method not implemented.');
  }

  listaUsuarios: Usuario[] = [];

  /* constructor(private storageService: StorageService) { }

  async buscarUsuarios() {
    this.listaUsuarios = await this.storageService.getAll();
  }

  ionViewDidEnter() {
    this.buscarUsuarios();
  }

  ngOnInit() {
  }

  async exluirCadastro(email: string) {
    await this.storageService.remove(email);
    this.buscarUsuarios();
  } */

}
