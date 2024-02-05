import { TestBed } from '@angular/core/testing';

import { LivaisonService } from './livaison.service';

describe('LivaisonService', () => {
  let service: LivaisonService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(LivaisonService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
