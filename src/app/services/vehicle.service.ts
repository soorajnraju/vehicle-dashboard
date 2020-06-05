import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { Vehicle } from '../models/vehicle';

@Injectable({
  providedIn: 'root'
})
export class VehicleService {

  private readonly _vehicles = new BehaviorSubject<Vehicle[]>([]);

  readonly vehicles$ = this._vehicles.asObservable();

  constructor() {
  }

  get vehicles(): Vehicle[] {
    return this._vehicles.getValue();
  }

  set vehicles(val: Vehicle[]) {
    this._vehicles.next(val);
  }
  
}
