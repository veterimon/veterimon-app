import { Component, OnInit } from '@angular/core';
import { DadosConsultaService } from 'src/app/services/dados-consulta.service';

@Component({
  selector: 'app-historico-consulta',
  templateUrl: './historico-consulta.page.html',
  styleUrls: ['./historico-consulta.page.scss'],
})
export class HistoricoConsultaPage implements OnInit {
  public servico: DadosConsultaService;
  public consulta

  constructor(servico: DadosConsultaService) { 
    this.servico = servico;
    this.consulta = this.servico.buscarConsulta()
    
    
  }
  voltar(): void {
    window.history.back();
  }

  buscar(): void {    
    console.log(this.consulta)

  }
  ngOnInit() {
  }

}
