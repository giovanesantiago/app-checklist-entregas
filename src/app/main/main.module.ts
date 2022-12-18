import { NgModule } from '@angular/core';
import { CommonModule, DatePipe } from '@angular/common';
import {MatSidenavModule} from '@angular/material/sidenav';
import {MatButtonModule} from '@angular/material/button';
import {MatRadioModule} from '@angular/material/radio';
import { FormsModule } from '@angular/forms';
import {MatToolbarModule} from '@angular/material/toolbar';
import {MatIconModule} from '@angular/material/icon';
import {MatSortModule} from '@angular/material/sort';
import {MatChipsModule} from '@angular/material/chips';
import {MatCheckboxModule} from '@angular/material/checkbox';
import {MatDialogModule} from '@angular/material/dialog';
import {MatInputModule} from '@angular/material/input';
import {MatMenuModule} from '@angular/material/menu';
import {MatProgressSpinnerModule} from '@angular/material/progress-spinner';
import {MatDatepickerModule} from '@angular/material/datepicker';

import { MainRoutingModule } from './main-routing.module';
import { MainComponent } from './main/main.component';
import { HttpClientModule } from '@angular/common/http';
import { CadastroClienteComponent } from './cadastro-cliente/cadastro-cliente.component';
import { EditClienteComponent } from './edit-cliente/edit-cliente.component';
import { DeleteClienteComponent } from './delete-cliente/delete-cliente.component';
import { MatNativeDateModule } from '@angular/material/core';
import { AddObsComponent } from './add-obs/add-obs.component';





@NgModule({
  declarations: [
    MainComponent,
    CadastroClienteComponent,
    EditClienteComponent,
    DeleteClienteComponent,
    AddObsComponent
  ],
  imports: [
    CommonModule,
    MainRoutingModule,
    MatSidenavModule,
    MatButtonModule,
    MatRadioModule,
    FormsModule,
    MatToolbarModule,
    MatIconModule,
    MatSortModule,
    MatChipsModule,
    MatCheckboxModule,
    HttpClientModule,
    MatDialogModule,
    MatInputModule,
    FormsModule,
    MatMenuModule,
    CommonModule,
    MatProgressSpinnerModule,
    MatDatepickerModule,
    MatNativeDateModule,
    
    
  ]
})
export class MainModule { }
