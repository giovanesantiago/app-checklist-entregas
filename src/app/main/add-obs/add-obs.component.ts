import { Component, OnInit } from '@angular/core';
import { MatDialogRef } from '@angular/material/dialog';
import { Tarefa } from '../model/tarefa';
import { TarefaService } from '../service/tarefa.service';

@Component({
  selector: 'app-add-obs',
  templateUrl: './add-obs.component.html',
  styleUrls: ['./add-obs.component.css']
})
export class AddObsComponent  implements OnInit{

  idCliente!: number;
  idTarefa!: number;
  tarefaEdit!: Tarefa;

  constructor(
    public diaolgRef: MatDialogRef<AddObsComponent>,
    private tarefaService: TarefaService,
    
  ) {}
  ngOnInit(): void {
    this.recebendoTarefa()
    
  }

  cancel(): void {
    this.diaolgRef.close();
  }

  

  recebendoTarefa(){
    const idClienteAddObs = sessionStorage.getItem("idClienteAddObs");
    const idTarefaAddObs = sessionStorage.getItem("idTarefaAddObs");

    if(idClienteAddObs != null && idTarefaAddObs != null) {
      this.idCliente = parseInt(idClienteAddObs);
      this.idTarefa = parseInt(idTarefaAddObs);
    }

    this.tarefaService.findById(this.idCliente, this.idTarefa).subscribe(element => this.tarefaEdit = element);
  }

  addObs() {
    this.tarefaService.editTarefa(this.idCliente, this.idTarefa, this.tarefaEdit).subscribe(element => console.log(element))
    console.log(this.tarefaEdit)
    this.diaolgRef.close(); 
  }


}
