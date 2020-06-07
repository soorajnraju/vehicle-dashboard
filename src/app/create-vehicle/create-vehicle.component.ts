import { Component, OnInit } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { VehicleService } from '../services/vehicle.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-create-vehicle',
  templateUrl: './create-vehicle.component.html',
  styleUrls: ['./create-vehicle.component.scss']
})
export class CreateVehicleComponent implements OnInit {

  submitForm: any;

  constructor(private formBuilder: FormBuilder,
     private vehicleService: VehicleService,
      private router: Router) {
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
    this.vehicleService.createVehicle(vehicleData).subscribe((data)=>{
      if(data.status === "success"){
        //this.submitForm.reset()
        this.router.navigate(['list-vehicle']);
      }
    });
  }

}
