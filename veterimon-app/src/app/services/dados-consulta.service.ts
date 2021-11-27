import { Injectable } from '@angular/core';
import { IConsulta } from '../consultas/iconsulta';
import { Storage } from '@ionic/storage';

@Injectable({
  providedIn: 'root'
})
export class DadosConsultaService {
  public consultas: IConsulta[] = [
  ]
  
  private storage: Storage;

  constructor(storage: Storage) { 
    this.storage = storage;
    this.storage.create().then(() => console.log('Armazenamento criado'));
    this.storage.get('consultas')
    .then(consultas => this.consultas.push(...consultas))
    .catch(() => this.storage.set('consultas', this.consultas));

  }

  buscarConsulta(): IConsulta[]{
    return this.consultas;

    }

    salvarConsulta(consulta: IConsulta): void {
      consulta.id = this.consultas.length + 1;
      this.consultas.push(consulta);
      this.storage.set('consultas', this.consultas);
      }
      
    }
