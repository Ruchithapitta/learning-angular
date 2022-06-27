import { TestBed } from '@angular/core/testing';

import { DebugserviceService } from './debugservice.service';

describe('DebugserviceService', () => {
  let service: DebugserviceService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(DebugserviceService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
