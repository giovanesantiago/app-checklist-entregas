import { Component, OnInit } from '@angular/core';
import {ThemePalette} from '@angular/material/core';
import { Cliente } from '../model/cliente';
import { ClienteService } from '../service/cliente.service';
import { MatDialog } from '@angular/material/dialog';
import { CadastroClienteComponent } from '../cadastro-cliente/cadastro-cliente.component';
import { EditClienteComponent } from '../edit-cliente/edit-cliente.component';

// Tabela
export interface listTarefas {
  tarefas: string;
  processo: boolean;
  final: boolean;
  obs: string;
}

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.css']
})


export class MainComponent implements OnInit{
  // Menu
  listChecked!: string;
  listClientes!: Cliente[];
  // Cliente selecionado
  clienteSelect!: Cliente;
  clienteEdit!: Cliente;

  // Tabela
  listTarefas: listTarefas[] = [
    {tarefas: "Proposta", processo: false, final: false, obs: "Falta 10mil"} 
  ];

  // Checkd
  allCompleteProcesso: boolean = false;
  allCompleteFinal: boolean = false;

  sortedData: listTarefas[];

  constructor(
    private clienteService:ClienteService,
    public dialog:MatDialog,
  ) {
    this.sortedData = this.listTarefas.slice();
  }
  ngOnInit(): void {this.clienteService.findAll().subscribe(element => {this.listClientes = element})}

   // Seleção de cliente
   selectClient(idCliente: number) {
      this.clienteService.findId(idCliente).subscribe(element => {this.clienteSelect = element})
      this.ngOnInit()
   }

   // Criando Cliente
   createCliente(): void {
    const dialogRefCreate = this.dialog.open(CadastroClienteComponent, {width: '500px'});
    
    dialogRefCreate.afterClosed().subscribe(result => {
      console.log('The dialog was closed');
      this.ngOnInit();
    });
   }

   editCliente(idCliente: number) {
    this.clienteService.findId(idCliente).subscribe(element => {this.clienteEdit = element});
    
    if(this.clienteEdit != null) {
      const idClienteEdit = idCliente.toString();
      sessionStorage.setItem("idClienteEdit", idClienteEdit)
      sessionStorage.setItem("nomeClienteEdit", this.clienteEdit.nome)
      sessionStorage.setItem("motoClienteEdit", this.clienteEdit.moto)
      sessionStorage.setItem("chassiClienteEdit", this.clienteEdit.chassi)
      
      if(sessionStorage.getItem("idClienteEdit") == idClienteEdit){
        const dialogRefEdit = this.dialog.open(EditClienteComponent, {width: '500px'});
        dialogRefEdit.afterClosed().subscribe(result => {
          console.log('The dialog was closed');
          this.ngOnInit();
        });
      }
    }

   }
  



















  updateAllComplete() {
    this.allCompleteProcesso = this.listTarefas != null && this.listTarefas.every(t => t.processo);
    this.allCompleteFinal = this.listTarefas != null && this.listTarefas.every(t => t.final);
  }
  
  someCompleteProcesso(): boolean {
    if (this.listTarefas == null) {
      return false;
    }
    return this.listTarefas.filter(t => t.processo).length > 0 && !this.allCompleteProcesso;
  }
  someCompleteFinal(): boolean {
    if (this.listTarefas == null) {
      return false;
    }
    return this.listTarefas.filter(t => t.final).length > 0 && !this.allCompleteFinal;
  }

  setAllProcesso(completed: boolean) {
    this.allCompleteProcesso = completed;
    if (this.listTarefas == null) {
      return;
    }
    this.listTarefas.forEach(t => (t.processo = completed));
  }
  setAllFinal(completed: boolean) {
    this.allCompleteFinal = completed;
    if (this.listTarefas == null) {
      return;
    }
    this.listTarefas.forEach(t => (t.final = completed));
  }



  
    
}




