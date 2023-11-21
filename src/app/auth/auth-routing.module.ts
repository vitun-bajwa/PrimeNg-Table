import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DataComponent } from './components/data/data.component';
import { FormArrayComponent } from './components/form-array/form-array.component';
import { RemoveRowsComponent } from './components/remove-rows/remove-rows.component';

const routes: Routes = [
  {
    path:'',component:DataComponent
  },
  {
    path:'form',component:FormArrayComponent
  },
  {
    path:'remove',component:RemoveRowsComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AuthRoutingModule { }
