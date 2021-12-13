import { TestBed } from '@angular/core/testing';

import { ApiUserServiceService } from './api-user-service.service';

describe('ApiUserServiceService', () => {
  let service: ApiUserServiceService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ApiUserServiceService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
