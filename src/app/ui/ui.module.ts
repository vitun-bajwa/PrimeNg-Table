import { NgModule, forwardRef } from '@angular/core';
import { CommonModule } from '@angular/common';
import {ButtonModule} from 'primeng/button';
import { TableService } from '../core/api/table-service/table.service';
import { HttpClientModule } from '@angular/common/http';
import { TableModule } from 'primeng/table';
import { FormsModule, NG_VALUE_ACCESSOR } from '@angular/forms';
import {TooltipModule} from 'primeng/tooltip';
import { ToggleButtonModule } from 'primeng/togglebutton';
import { InputTextModule } from 'primeng/inputtext';
import { InputSwitchModule } from 'primeng/inputswitch';
import { DropdownModule } from 'primeng/dropdown';
import { MenuModule } from 'primeng/menu';
import { ToastModule } from 'primeng/toast';
import { CalendarModule } from 'primeng/calendar';
import { CheckboxModule } from 'primeng/checkbox';
import { CsvService } from '../core/csvfile/csv.service';

const material = [
  ButtonModule,
  TableModule,
  TooltipModule,
  ToggleButtonModule,
  InputTextModule,
  InputSwitchModule,
  DropdownModule,
  MenuModule,
  ToastModule,
  CalendarModule,
  CheckboxModule
]
@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    HttpClientModule,
    FormsModule,
    ...material,
    
  ],
  exports: [
    ...material
  ],
  providers: [
    TableService,
    CsvService
  ]
})
export class UiModule { }
