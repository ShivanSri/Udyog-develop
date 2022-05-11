import { TestBed } from '@angular/core/testing';

import { ManageapplicationsService } from './manageapplications.service';

describe('ManageapplicationsService', () => {
  let service: ManageapplicationsService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ManageapplicationsService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
