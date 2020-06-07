import { Injectable } from '@angular/core';
import { Vehicle } from '../models/vehicle';
import { environment } from '../../environments/environment';
import { HttpClient } from '@angular/common/http';
import { BehaviorSubject } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class VehicleService {
  /**
   * Store vars
   */
  private readonly _vehicles = new BehaviorSubject<Vehicle[]>([]);
  readonly vehicles$ = this._vehicles.asObservable();
  //End of store vars

  apiBaseURL: string;

  constructor(private http: HttpClient) {
    this.apiBaseURL = environment.apiBaseURL;
  }

  /**
   * Getters and Setters
   */
  get vehicles(): Vehicle[] {
    return this._vehicles.getValue();
  }

  set vehicles(val: Vehicle[]) {
    this._vehicles.next(val);
  }
  //End of Getters and Setters

  listVehicles() {
    return this.http.get<any>(this.apiBaseURL + "vehicle/list");
  }

  findVehicleById(_id) {
    return this.http.get<any>(this.apiBaseURL + "vehicle/fetch-one/" + _id);
  }

  createVehicle(vehicle: Vehicle) {
    return this.http.post<any>(this.apiBaseURL + "vehicle/create", vehicle);
  }

  updateVehicle(vehicle: Vehicle) {
    return this.http.post<any>(this.apiBaseURL + "vehicle/update", vehicle);
  }

}
