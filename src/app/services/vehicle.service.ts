import { Injectable } from '@angular/core';
import { Vehicle } from '../models/vehicle';
import { environment } from '../../environments/environment';
import { HttpClient } from '@angular/common/http';


@Injectable({
  providedIn: 'root'
})
export class VehicleService {
  apiBaseURL: string;
  lastVehicle: Vehicle;

  constructor(private http: HttpClient) {
    this.apiBaseURL = environment.apiBaseURL;
  }

  listVehicles() {
    return this.http.get<any>(this.apiBaseURL+"vehicle/list");
  }

  findVehicleById(_id){
    return this.http.get<any>(this.apiBaseURL+"vehicle/"+_id);
  }

  createVehicle(vehicle: Vehicle) {
    this.http.post<any>(this.apiBaseURL + "vehicle/create", vehicle).subscribe((data)=>{
      if(data.status==="success"){
        this.lastVehicle = data.data.vehicle;
      }else{
        this.lastVehicle = null;
      }
      return this.lastVehicle;
    });
  }

}
