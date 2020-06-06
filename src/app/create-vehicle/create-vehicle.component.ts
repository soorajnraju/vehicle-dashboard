import { Component, OnInit } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { VehicleService } from '../services/vehicle.service';

@Component({
  selector: 'app-create-vehicle',
  templateUrl: './create-vehicle.component.html',
  styleUrls: ['./create-vehicle.component.scss']
})
export class CreateVehicleComponent implements OnInit {

  submitForm;

  constructor(private formBuilder: FormBuilder, private vehicleService: VehicleService) {
    this.submitForm = this.formBuilder.group({
      _id: '',
      uid: '',
      name: '',
      pos_lat: '',
      pos_lon: ''
    });

    this.vehicleService = vehicleService;
  }

  ngOnInit(): void {
  }

  onSubmit(vehicleData) {
    // Process submitForm data here
    let lastVehicle = this.vehicleService.createVehicle(vehicleData);
    lastVehicle!==null?this.submitForm.reset():'';
  }

}
