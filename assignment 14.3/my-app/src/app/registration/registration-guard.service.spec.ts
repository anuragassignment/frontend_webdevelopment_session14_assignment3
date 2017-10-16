import { TestBed, inject } from '@angular/core/testing';

import { RegistrationGuardService } from './registration-guard.service';

describe('RegistrationGuardService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [RegistrationGuardService]
    });
  });

  it('should be created', inject([RegistrationGuardService], (service: RegistrationGuardService) => {
    expect(service).toBeTruthy();
  }));
});
