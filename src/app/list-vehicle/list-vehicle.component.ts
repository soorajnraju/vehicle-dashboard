import { Component, OnInit } from '@angular/core';
import { VEHICLE, VEHICLES } from '../data/vehicle';
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
    this.vehicles = vehicleServcie.vehicles = VEHICLES;
  }

  ngOnInit(): void {
  }

}
