import { Component, OnInit } from '@angular/core';
import { DadosConsultaService } from 'src/app/services/dados-consulta.service';

@Component({
  selector: 'app-formulario-consulta',
  templateUrl: './formulario-consulta.component.html',
  styleUrls: ['./formulario-consulta.component.scss'],
})
export class FormularioConsultaComponent implements OnInit {
  public nome: string;
  public especie: string;
  public especialidade: string;
  public data: string;
  public horario: number;
  public observacoes: string;
  public servico: DadosConsultaService;

  constructor(servico: DadosConsultaService) { 
    this.servico = servico;
  }
  voltar(): void {
    window.history.back();
  }

  inserir(): void {
    this.servico.salvarConsulta({
      nome: this.nome,
      especie: this.especie,
      especialidade: this.especialidade,
      data: this.data,
      horario: this.horario,
      observacoes: this.observacoes
    });

    this.voltar();

    console.log(this.servico.consultas);
  }

  ngOnInit() {}

}