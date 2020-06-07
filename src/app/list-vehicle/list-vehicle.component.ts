import { Component, OnInit } from '@angular/core';
import { VEHICLES } from '../data/vehicle';
import { VehicleService } from '../services/vehicle.service';
import { Vehicle } from '../models/vehicle';
import { of } from 'rxjs';

@Component({
  selector: 'app-list-vehicle',
  templateUrl: './list-vehicle.component.html',
  styleUrls: ['./list-vehicle.component.scss']
})
export class ListVehicleComponent implements OnInit {

  vehicles: Vehicle[];

  constructor(private vehicleServcie: VehicleService) {
    //this.vehicles = vehicleServcie.vehicles = VEHICLES;
    this.vehicleServcie.listVehicles().subscribe((data)=>{
      //console.log(data);
      if(data.status==="success"){
        this.vehicles = this.vehicleServcie.vehicles = data.data.vehicles;
      }else{
        this.vehicles = [];
      }
    });
  }

  ngOnInit(): void {
  }

}
