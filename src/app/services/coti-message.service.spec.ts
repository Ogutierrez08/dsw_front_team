import { TestBed } from '@angular/core/testing';

import { CotiMessageService } from './coti-message.service';

describe('CotiMessageService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: CotiMessageService = TestBed.get(CotiMessageService);
    expect(service).toBeTruthy();
  });
});
