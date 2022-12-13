import { Tarefa } from "./tarefa";

export interface Cliente {
    id: number,
    nome: string,
    moto: string,
    chassi: string,
    dataVenda: Date,
    dataEntrega: Date,
    tarefa: Tarefa;
}