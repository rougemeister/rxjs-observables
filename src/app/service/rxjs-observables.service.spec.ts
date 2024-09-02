import { TestBed } from '@angular/core/testing';

import { RxjsObservablesService } from './rxjs-observables.service';

describe('RxjsObservablesService', () => {
  let service: RxjsObservablesService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(RxjsObservablesService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
