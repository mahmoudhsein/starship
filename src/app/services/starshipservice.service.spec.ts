import { TestBed } from '@angular/core/testing';

import { StarshipserviceService } from './starshipservice.service';

describe('StarshipserviceService', () => {
  let service: StarshipserviceService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(StarshipserviceService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
