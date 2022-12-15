import { DatePipe } from '@angular/common';

import { Component, OnInit } from '@angular/core';
import { MatDialogRef } from '@angular/material/dialog';

import { Cliente } from '../model/cliente';
import { ClienteService } from '../service/cliente.service';

@Component({
  selector: 'app-edit-cliente',
  templateUrl: './edit-cliente.component.html',
  styleUrls: ['./edit-cliente.component.css']
})
export class EditClienteComponent implements OnInit{
  id: number = 0;
  nome: string = "";
  moto: string = "";
  chassi: string = "";
  dataVenda!: Date;
  dataEntrega!: Date;
  
  newCliente!: Cliente;

  DatePipe = new DatePipe('pt-BR')

  constructor(
    public diaolgRef: MatDialogRef<EditClienteComponent>,
    private clienteService: ClienteService
  ) {}
  ngOnInit(): void {
    this.recebendoCliente();
  }

  recebendoCliente() {
    const idClienteEdit = sessionStorage.getItem("idClienteEdit");
    const nomeClienteEdit = sessionStorage.getItem("nomeClienteEdit");
    const motoClienteEdit = sessionStorage.getItem("motoClienteEdit");
    const chassiClienteEdit = sessionStorage.getItem("chassiClienteEdit");
    if(idClienteEdit != null && nomeClienteEdit != null && motoClienteEdit != null && chassiClienteEdit != null) {
      this.id = parseInt(idClienteEdit)
      this.nome = nomeClienteEdit
      this.moto = motoClienteEdit
      this.chassi = chassiClienteEdit
    }
  }

  cancel(): void {
    this.diaolgRef.close();
  }

  

  
  createCliente() {
    this.newCliente = { "id": this.id, "nome": this.nome, "moto": this.moto, "chassi": this.chassi, "dataVenda": this.dataVenda, "dataEntrega": this.dataEntrega}
    console.log(this.newCliente)
    this.clienteService.editCliente(this.id, this.newCliente).subscribe(element => console.log(element));
    this.diaolgRef.close();
  }

}
