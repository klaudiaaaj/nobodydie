import { TestBed } from '@angular/core/testing';

import { ApiTokenServiceService } from './api-token-service.service';

describe('ApiTokenServiceService', () => {
  let service: ApiTokenServiceService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ApiTokenServiceService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
//test