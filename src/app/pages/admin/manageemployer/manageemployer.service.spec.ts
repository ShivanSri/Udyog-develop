import { TestBed } from '@angular/core/testing';

import { ManageemployerService } from './manageemployer.service';

describe('ManageemployerService', () => {
  let service: ManageemployerService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ManageemployerService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
