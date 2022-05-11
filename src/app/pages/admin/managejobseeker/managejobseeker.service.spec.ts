import { TestBed } from '@angular/core/testing';

import { ManagejobseekerService } from './managejobseeker.service';

describe('ManagejobseekerService', () => {
  let service: ManagejobseekerService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ManagejobseekerService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
