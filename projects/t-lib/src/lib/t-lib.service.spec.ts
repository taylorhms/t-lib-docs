import { TestBed } from '@angular/core/testing';

import { TLibService } from './t-lib.service';

describe('TLibService', () => {
  let service: TLibService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(TLibService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
