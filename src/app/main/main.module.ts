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

import { MainRoutingModule } from './main-routing.module';
import { MainComponent } from './main/main.component';
import { HttpClientModule } from '@angular/common/http';




@NgModule({
  declarations: [
    MainComponent
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
    HttpClientModule
    
  ]
})
export class MainModule { }
