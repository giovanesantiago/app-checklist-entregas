import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
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

import { MainRoutingModule } from './main-routing.module';
import { MainComponent } from './main/main.component';
import { HttpClientModule } from '@angular/common/http';
import { CadastroClienteComponent } from './cadastro-cliente/cadastro-cliente.component';




@NgModule({
  declarations: [
    MainComponent,
    CadastroClienteComponent
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
    FormsModule
    
  ]
})
export class MainModule { }
