import { Component } from '@angular/core';
import {ThemePalette} from '@angular/material/core';

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


export class MainComponent{
  // Menu
  favoriteSeason!: string;
  seasons: string[] = ['Cliente 1 ', 'Cliente 2', 'Cliente 3', 'Cliente 4'];

  // Tabela
  listTarefas: listTarefas[] = [
    {tarefas: "Proposta", processo: false, final: false, obs: "Falta 10mil"}
    
  ];

  // Checkd
  allCompleteProcesso: boolean = false;
  allCompleteFinal: boolean = false;

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



  sortedData: listTarefas[];

  constructor() {
    this.sortedData = this.listTarefas.slice();
  }
    
}




