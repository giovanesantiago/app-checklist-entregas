import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { first, Observable, retry, take } from 'rxjs';
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
}
