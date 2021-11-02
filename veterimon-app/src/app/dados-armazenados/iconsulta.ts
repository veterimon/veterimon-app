import { Time } from "@angular/common";

export interface IConsulta {
    id?:number;
    nome: string;
    especie: string;
    especialidade: string;
    data: string;
    horario: number;
    observacoes: string; 
}