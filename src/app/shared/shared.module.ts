import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CommonTableComponent } from './components/common-table/common-table.component';
import { UiModule } from '../ui/ui.module';
import { FormsModule } from '@angular/forms';



@NgModule({
  declarations: [
    CommonTableComponent
  ],
  imports: [
    CommonModule,
    UiModule,
    FormsModule,
  ],
  exports: [CommonTableComponent]
})
export class SharedModule { }
