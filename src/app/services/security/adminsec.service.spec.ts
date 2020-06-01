import { TestBed } from '@angular/core/testing';

import { AdminsecService } from './adminsec.service';

describe('AdminsecService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: AdminsecService = TestBed.get(AdminsecService);
    expect(service).toBeTruthy();
  });
});
