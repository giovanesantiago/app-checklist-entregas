import { Component } from '@angular/core';
import { MatDialogRef } from '@angular/material/dialog';
import { Cliente } from '../model/cliente';
import { ClienteService } from '../service/cliente.service';

@Component({
  selector: 'app-cadastro-cliente',
  templateUrl: './cadastro-cliente.component.html',
  styleUrls: ['./cadastro-cliente.component.css']
})
export class CadastroClienteComponent {
  id: number = 0;
  nome: string = "";
  moto: string = "";
  chassi: string = "";
  newCliente!: Cliente;

  constructor(
    public diaolgRef: MatDialogRef<CadastroClienteComponent>,
    private clienteService: ClienteService
  ) {}

  cancel(): void {
    this.diaolgRef.close();
  }

  createCliente() {
    this.newCliente = { "id": this.id, "nome": this.nome, "moto": this.moto, "chassi": this.chassi}
    console.log(this.newCliente)
    this.clienteService.createClient(this.newCliente).subscribe(element => console.log(element));
    this.diaolgRef.close();
  }

}
