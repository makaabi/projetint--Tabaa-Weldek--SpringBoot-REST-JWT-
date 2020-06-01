import { TestBed } from '@angular/core/testing';

import { EnseignantsecService } from './enseignantsec.service';

describe('EnseignantsecService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: EnseignantsecService = TestBed.get(EnseignantsecService);
    expect(service).toBeTruthy();
  });
});
