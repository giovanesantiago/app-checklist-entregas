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

  findById(idCliente:number , idTarefa:number): Observable<Tarefa> {
    return this.http.get<Tarefa>(this.url + "/" + idCliente + "/" + idTarefa);
  }

  editTarefa(idCliente:number, idTarefa:number, tarefa:Tarefa) {
    return this.http.post<Tarefa>(this.url + "/editTarefa/" + idCliente + "/" + idTarefa, tarefa).pipe(first())
  }
}
