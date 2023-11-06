import { NgModule } from '@angular/core';
import { CommonModule, DatePipe } from '@angular/common';

import { FeatureRoutingModule } from './feature-routing.module';
import { TableComponent } from './components/table/table.component';
import { UiModule } from '../ui/ui.module';
import { FormsModule } from '@angular/forms';
import { SharedModule } from '../shared/shared.module';


@NgModule({
  declarations: [
    TableComponent
  ],
  imports: [
    CommonModule,
    FeatureRoutingModule,
    UiModule,
    FormsModule,
    SharedModule
  ],
  providers: [
    DatePipe
  ]
})
export class FeatureModule { }
