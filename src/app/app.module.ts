import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ListVehicleComponent } from './list-vehicle/list-vehicle.component';
import { EditVehicleComponent } from './edit-vehicle/edit-vehicle.component';

@NgModule({
  declarations: [
    AppComponent,
    ListVehicleComponent,
    EditVehicleComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
