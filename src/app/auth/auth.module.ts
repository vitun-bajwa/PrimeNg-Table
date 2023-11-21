import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AuthRoutingModule } from './auth-routing.module';
import { DataComponent } from './components/data/data.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { FormArrayComponent } from './components/form-array/form-array.component';
import { RemoveRowsComponent } from './components/remove-rows/remove-rows.component';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatDatepickerModule} from '@angular/material/datepicker';
import {MatCheckboxModule} from '@angular/material/checkbox';
import { ConfirmDialogComponentComponent } from './components/confirm-dialog-component/confirm-dialog-component.component';
import {MatDialogModule} from '@angular/material/dialog';
import {MatTableModule} from '@angular/material/table';
@NgModule({
  declarations: [
    DataComponent,
    FormArrayComponent,
    RemoveRowsComponent,
    ConfirmDialogComponentComponent
  ],
  imports: [
    CommonModule,
    AuthRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    MatFormFieldModule,
    MatDatepickerModule,
    MatCheckboxModule,
    MatDialogModule,
    MatTableModule
  ]
})
export class AuthModule { }
