import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ListVehicleComponent } from './list-vehicle/list-vehicle.component';
import { EditVehicleComponent } from './edit-vehicle/edit-vehicle.component';

const routes: Routes = [
  { path: '', component: ListVehicleComponent },
  { path: 'list-vehicle', component: ListVehicleComponent },
  { path: 'edit-vehicle/:id', component: EditVehicleComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
