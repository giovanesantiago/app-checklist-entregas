import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { first, Observable } from 'rxjs';
import { Tarefa } from '../model/tarefa';

@Injectable({
  providedIn: 'root'
})
export class TarefaService {
  
  url: string = 'http://localhost:8080/tarefas';

  constructor(
    private http:HttpClient
  ) { }

  findAll(idCliente: number): Observable<Tarefa[]>{
    
    return this.http.get<Tarefa[]>(this.url + "/" + idCliente);
  }

  findById(idTarefa:number, idSequencia:number, idCliente:number ): Observable<Tarefa> {
    return this.http.get<Tarefa>(this.url + "/" + idTarefa + "/" + idSequencia + "/" + idCliente);
  }

  editTarefa(idTarefa:number, idSequencia:number, idCliente:number, tarefa:Tarefa) {
    return this.http.post<Tarefa>(this.url + "/editTarefa/" + idTarefa + "/" + idSequencia + "/" + idCliente, tarefa).pipe(first())
  }
}
