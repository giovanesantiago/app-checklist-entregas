

import { Component, OnInit } from '@angular/core';
import { MatDialogRef } from '@angular/material/dialog';

import { Cliente } from '../model/cliente';
import { ClienteService } from '../service/cliente.service';

@Component({
  selector: 'app-edit-cliente',
  templateUrl: './edit-cliente.component.html',
  styleUrls: ['./edit-cliente.component.css'],
})
export class EditClienteComponent implements OnInit{
  id: number = 0;
  clienteEdit!: Cliente;
  
  newCliente!: Cliente;

  

  constructor(
    public diaolgRef: MatDialogRef<EditClienteComponent>,
    private clienteService: ClienteService,
    
  ) {}
  ngOnInit(): void {
    
    this.recebendoCliente();
  }

  recebendoCliente() {
    const idClienteEdit = sessionStorage.getItem("idClienteEdit");
    

    if(idClienteEdit != null) {
      this.id = parseInt(idClienteEdit)
      this.clienteService.findEdit(this.id).subscribe(element => this.clienteEdit = element)
    }
  }

  cancel(): void {
    this.diaolgRef.close();
  }

  
  createCliente() {
    this.newCliente = { "id": this.id, "nome": this.clienteEdit.nome, "moto": this.clienteEdit.moto, "chassi": this.clienteEdit.chassi, "dataVenda": this.clienteEdit.dataVenda, "dataEntrega": this.clienteEdit.dataEntrega}
    this.clienteService.editCliente(this.id, this.newCliente).subscribe(element => console.log(element));
    this.diaolgRef.close(); 
  }

  converteDate(date:String): Date {
    var parts = date.split("/")
    return new Date(parseInt(parts[2]), parseInt(parts[1]), parseInt(parts[0]))
  }

}
