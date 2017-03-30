import { TestBed, inject } from '@angular/core/testing';
import { ExpserviceService } from './expservice.service';

describe('ExpserviceService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [ExpserviceService]
    });
  });

  it('should ...', inject([ExpserviceService], (service: ExpserviceService) => {
    expect(service).toBeTruthy();
  }));
});
