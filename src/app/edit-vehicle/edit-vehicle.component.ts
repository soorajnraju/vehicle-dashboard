import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Vehicle } from '../models/vehicle';
import { FormBuilder } from '@angular/forms';
import { VEHICLES } from '../data/vehicle';
import { VehicleService } from '../services/vehicle.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-edit-vehicle',
  templateUrl: './edit-vehicle.component.html',
  styleUrls: ['./edit-vehicle.component.scss']
})
export class EditVehicleComponent implements OnInit {

  public _id: string;
  protected _id$: any;
  protected vehicle: Vehicle;

  submitForm: any;

  constructor(private route: ActivatedRoute,
    private formBuilder: FormBuilder,
    private vehicleService: VehicleService,
    private router: Router) {
    this.submitForm = this.formBuilder.group({
      _id: '',
      uid: '',
      name: '',
      pos_lat: '',
      pos_lon: ''
    });
  }

  ngOnInit(): void {
    this._id$ = this.route.params.subscribe(params => {
      this._id = params['id'];
      //this.vehicle = VEHICLES.find(vehicle => vehicle._id == this._id);
      this.getVehicle();
    });
  }

  getVehicle() {
    //this.vehicleService.listVehicles().subscribe((data) => {
    this.vehicleService.findVehicleById(this._id).subscribe((data) => {
      let vehicles = data.data.vehicles;
      this.vehicle = vehicles.find(vehicle => vehicle._id == this._id);
      this.submitForm.controls['_id'].setValue(this.vehicle._id);
      this.submitForm.controls['uid'].setValue(this.vehicle.uid);
      this.submitForm.controls['name'].setValue(this.vehicle.name);
      this.submitForm.controls['pos_lat'].setValue(this.vehicle.pos_lat);
      this.submitForm.controls['pos_lon'].setValue(this.vehicle.pos_lon);
    });
  }

  onSubmit(vehicleData) {
    // Process submitForm data here
    this.vehicleService.updateVehicle(vehicleData).subscribe((data) => {
      if (data.status === "success") {
        //this.submitForm.reset();
        this.router.navigate(['list-vehicle']);
      }
    });
  }

}
