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

  idTarefa!: number;
  idSequencia!: number;
  idCliente!: number;
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
    const idTarefaAddObs = sessionStorage.getItem("idTarefaAddObs");
    const idSequenciaAddObs = sessionStorage.getItem("idSequenciaAddObs");
    const idClienteAddObs = sessionStorage.getItem("idClienteAddObs");

    if(idClienteAddObs != null && idTarefaAddObs != null && idSequenciaAddObs != null) {
      this.idTarefa = parseInt(idTarefaAddObs);
      this.idSequencia = parseInt(idSequenciaAddObs);
      this.idCliente = parseInt(idClienteAddObs);
    }

    this.tarefaService.findById(this.idTarefa, this.idSequencia, this.idCliente).subscribe(element => this.tarefaEdit = element);
  }

  addObs() {
    this.tarefaService.editTarefa(this.idTarefa, this.idSequencia, this.idCliente, this.tarefaEdit).subscribe(element => console.log(element))
    console.log(this.tarefaEdit)
    this.diaolgRef.close(); 
  }


}
