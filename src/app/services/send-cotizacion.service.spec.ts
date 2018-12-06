import { TestBed } from '@angular/core/testing';

import { SendCotizacionService } from './send-cotizacion.service';

describe('SendCotizacionService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: SendCotizacionService = TestBed.get(SendCotizacionService);
    expect(service).toBeTruthy();
  });
});
