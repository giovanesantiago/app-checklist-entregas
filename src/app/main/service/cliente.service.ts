import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { first, Observable } from 'rxjs';
import { Cliente } from '../model/cliente';


@Injectable({
  providedIn: 'root'
})
export class ClienteService {

  url: string = 'http://localhost:8080/cliente';

  constructor(
    private http:HttpClient
  ) { }

  findAll(): Observable<Cliente[]> {
    return this.http.get<Cliente[]>(this.url)
  }

  findId(id: number): Observable<Cliente> {
    return this.http.get<Cliente>(this.url + "/" + id)
  }

  findEdit(id: number): Observable<Cliente> {
    return this.http.get<Cliente>(this.url + "/findEdit/" + id)
  }

  createClient(cliente: Cliente) {
    return this.http.post<Cliente>(this.url + "/addCliente", cliente).pipe(first());
  }

  editCliente(idCliente: number, cliente:Cliente) {
    return this.http.post<Cliente>(this.url + "/edit/" + idCliente, cliente).pipe(first());
  }

  deleteCliente(idCliente: number) {
    return this.http.delete(this.url + "/delete/" + idCliente)
  }
}
