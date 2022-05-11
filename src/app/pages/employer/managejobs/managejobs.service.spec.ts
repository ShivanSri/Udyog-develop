import { TestBed } from '@angular/core/testing';

import { ManagejobsService } from './managejobs.service';

describe('ManagejobsService', () => {
  let service: ManagejobsService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ManagejobsService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
