import { Cliente } from "./cliente";

export interface Tarefa{
    idTarefa: number,
    idSequencia: number,
    nome: string,
    processo: boolean,
    finalizado: boolean,
    obs: string,
    cliente: Cliente
}