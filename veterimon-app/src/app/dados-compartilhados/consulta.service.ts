import { Injectable } from '@angular/core';
import { Consulta } from '../dados-compartilhados/consulta';
import { AngularFireDatabase, AngularFireList, AngularFireObject } from '@angular/fire/compat/database';

@Injectable({
  providedIn: 'root'
})
export class ConsultaService 
{
  //ATRIBUTOS
  consultaListRef: AngularFireList<any>;
  consultaRef: AngularFireObject<any>;

  //METODOS
  constructor(
    private db: AngularFireDatabase
  ) { }
  // -- criar consulta
  agendarConsulta(consulta: Consulta) 
  {
    return this.consultaListRef.push(
      {
        nome: consulta.nome,
        especie: consulta.especie,
        especialidade: consulta.especialidade,
        data: consulta.data,
        horario: consulta.horario,
        observacoes: consulta.observacoes 
      }
    )
  }
  // -- ler consulta
  getConsulta(id: number) 
  {
    this.consultaRef = this.db.object('/consulta/' + id);
    return this.consultaRef;
  }

  // -- ler lista de consultas
  getConsultaList() 
  {
    this.consultaListRef = this.db.list('/consulta');
    return this.consultaListRef;
  }

  // -- atualizar consulta
  atualizarConsulta(id, consulta: Consulta) 
  {
    return this.consultaRef.update(
      {
        nome: consulta.nome,
        especie: consulta.especie,
        especialidade: consulta.especialidade,
        data: consulta.data,
        horario: consulta.horario,
        observacoes: consulta.observacoes 
      }
    )
  }

  // -- apagar consulta
  apagarConsulta(id: number) 
  {
    this.consultaRef = this.db.object('/consulta/' + id);
    this.consultaRef.remove();
  }
}
