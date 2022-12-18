import { Component, OnInit } from '@angular/core';
import {ThemePalette} from '@angular/material/core';
import { Cliente } from '../model/cliente';
import { ClienteService } from '../service/cliente.service';
import { MatDialog } from '@angular/material/dialog';
import { CadastroClienteComponent } from '../cadastro-cliente/cadastro-cliente.component';
import { EditClienteComponent } from '../edit-cliente/edit-cliente.component';
import { DeleteClienteComponent } from '../delete-cliente/delete-cliente.component';
import { TarefaService } from '../service/tarefa.service';
import { Tarefa } from '../model/tarefa';

// Tabela

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.css']
})


export class MainComponent implements OnInit{
  // Menu
  listChecked!: string;
  listClientes!: Cliente[];
  // Confirmar carregamento de clientes
  
  // Cliente selecionado
  clienteSelect!: Cliente;
  
  // Tabela
  listTarefas!: Tarefa[];
  // Checkd
  allCompleteProcesso: boolean = false;
  allCompleteFinal: boolean = false;

 

  constructor(
    private clienteService:ClienteService,
    private tarefaService:TarefaService,
    public dialog:MatDialog,
  ) {}
  ngOnInit(): void {
    this.clienteService.findAll().subscribe(element => {this.listClientes = element});
    
  }

   // Seleção de cliente
   selectClient(idCliente: number) {
      sessionStorage.setItem("idClienteSelect", idCliente.toString())
      this.clienteService.findId(idCliente).subscribe(element => {this.clienteSelect = element})
      this.tarefaService.findAll(idCliente).subscribe(element => this.listTarefas = element)
      
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
    
    const idClienteEdit = idCliente.toString();
    sessionStorage.setItem("idClienteEdit", idClienteEdit)
    
    
    if(sessionStorage.getItem("idClienteEdit") == idClienteEdit){
      const dialogRefEdit = this.dialog.open(EditClienteComponent, {width: '500px'});
      dialogRefEdit.afterClosed().subscribe(result => {
        console.log('The dialog was closed');
        this.ngOnInit();
      });
    }
   }
   
   deleteCliente(idCliente: number) {
    const idClienteDel = idCliente.toString();
      sessionStorage.setItem("idClienteDel", idClienteDel)

      if(sessionStorage.getItem("idClienteDel") == idClienteDel){
        const dialogRefEdit = this.dialog.open(DeleteClienteComponent, {width: '300px'});
        dialogRefEdit.afterClosed().subscribe(result => {
          console.log('The dialog was closed');
          this.ngOnInit();
        });
      }
   }





  
  updateAllComplete() {
    this.allCompleteProcesso = this.listTarefas != null && this.listTarefas.every(t => t.processo);
    this.allCompleteFinal = this.listTarefas != null && this.listTarefas.every(t => t.finalizado);
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
    return this.listTarefas.filter(t => t.finalizado).length > 0 && !this.allCompleteFinal;
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
    this.listTarefas.forEach(t => (t.finalizado = completed));
  }



  
    
}




