import { Component, OnInit } from '@angular/core';
import {ThemePalette} from '@angular/material/core';
import { Cliente } from '../model/cliente';
import { ClienteService } from '../service/cliente.service';
import {MatRadioButtonHarness, MatRadioGroupHarness} from '@angular/material/radio/testing'
import { MatRadioButton } from '@angular/material/radio';
import { MatDialog } from '@angular/material/dialog';
import { CadastroClienteComponent } from '../cadastro-cliente/cadastro-cliente.component';

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
    public dialog:MatDialog
  ) {
    this.sortedData = this.listTarefas.slice();
  }
  ngOnInit(): void {this.clienteService.findAll().subscribe(element => {this.listClientes = element})}

   // Seleção de cliente
   selectClient(idCliente: number) {
    console.log(idCliente)
      this.clienteService.findId(idCliente).subscribe(element => {this.clienteSelect = element})
      this.ngOnInit()
   }

   // Criando Cliente
   createCliente(): void {
    const dialogRef = this.dialog.open(CadastroClienteComponent, {width: '500px'});

    dialogRef.afterClosed().subscribe(result => {
      console.log('The dialog was closed');
      this.ngOnInit();
    });
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




