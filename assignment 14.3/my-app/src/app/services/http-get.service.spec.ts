import { TestBed, inject } from '@angular/core/testing';

import { HttpGetService } from './http-get.service';

describe('HttpGetService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [HttpGetService]
    });
  });

  it('should be created', inject([HttpGetService], (service: HttpGetService) => {
    expect(service).toBeTruthy();
  }));
});
