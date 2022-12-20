import { Component, OnInit } from '@angular/core';
import { MatDialogRef } from '@angular/material/dialog';
import { Cliente } from '../model/cliente';
import { ClienteService } from '../service/cliente.service';

@Component({
  selector: 'app-delete-cliente',
  templateUrl: './delete-cliente.component.html',
  styleUrls: ['./delete-cliente.component.css']
})
export class DeleteClienteComponent implements OnInit{

  id: number = 0;
  clienteDelete!: Cliente;

  constructor(
    public diaolgRef: MatDialogRef<DeleteClienteComponent>,
    private clienteService: ClienteService
  ) {}

  ngOnInit(): void {
    this.recebendoCliente();
  }

  recebendoCliente() {
    const idClienteDelete = sessionStorage.getItem("idClienteDel");
    

    if(idClienteDelete != null) {
      this.id = parseInt(idClienteDelete);
      this.clienteService.findId(this.id).subscribe(element => this.clienteDelete = element);
    }
  }

  cancel(): void {
    this.diaolgRef.close();
  }

  deleteCliente() {
    this.clienteService.deleteCliente(this.clienteDelete.id).subscribe(element => console.log(element))
    this.diaolgRef.close();
  }

}
