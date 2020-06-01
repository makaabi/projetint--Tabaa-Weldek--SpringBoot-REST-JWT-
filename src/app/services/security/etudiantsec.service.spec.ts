import { TestBed } from '@angular/core/testing';

import { EtudiantsecService } from './etudiantsec.service';

describe('EtudiantsecService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: EtudiantsecService = TestBed.get(EtudiantsecService);
    expect(service).toBeTruthy();
  });
});
