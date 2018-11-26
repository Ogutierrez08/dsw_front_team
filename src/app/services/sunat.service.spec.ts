import { TestBed } from '@angular/core/testing';

import { SunatService } from './sunat.service';

describe('SunatService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: SunatService = TestBed.get(SunatService);
    expect(service).toBeTruthy();
  });
});
