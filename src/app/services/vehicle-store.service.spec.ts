import { TestBed } from '@angular/core/testing';

import { VehicleStoreService } from './vehicle-store.service';

describe('VehicleStoreService', () => {
  let service: VehicleStoreService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(VehicleStoreService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
