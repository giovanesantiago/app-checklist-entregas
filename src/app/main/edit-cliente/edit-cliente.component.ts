import { DatePipe } from '@angular/common';

import { Component, OnInit } from '@angular/core';
import { FormControl, Validators } from '@angular/forms';
import { MatDialogRef } from '@angular/material/dialog';

import { Cliente } from '../model/cliente';
import { ClienteService } from '../service/cliente.service';

@Component({
  selector: 'app-edit-cliente',
  templateUrl: './edit-cliente.component.html',
  styleUrls: ['./edit-cliente.component.css'],
  providers: [DatePipe]
})
export class EditClienteComponent implements OnInit{
  id: number = 0;
  clienteEdit!: Cliente;
  
  newCliente!: Cliente;

  

  constructor(
    public diaolgRef: MatDialogRef<EditClienteComponent>,
    private clienteService: ClienteService,
    private datePipe: DatePipe
  ) {}
  ngOnInit(): void {
    
    this.recebendoCliente();
  }

  recebendoCliente() {
    const idClienteEdit = sessionStorage.getItem("idClienteEdit");
    

    if(idClienteEdit != null) {
      this.id = parseInt(idClienteEdit)
      this.clienteService.findId(this.id).subscribe(element => this.clienteEdit = element)
    }
  }

  cancel(): void {
    this.diaolgRef.close();
  }

  
  createCliente() {
    this.newCliente = { "id": this.id, "nome": this.clienteEdit.nome, "moto": this.clienteEdit.moto, "chassi": this.clienteEdit.chassi, "dataVenda": this.clienteEdit.dataVenda, "dataEntrega": this.clienteEdit.dataEntrega}
    console.log(this.newCliente)
    this.clienteService.editCliente(this.id, this.newCliente).subscribe(element => console.log(element));
    this.diaolgRef.close(); 
  }

}
