import { TestBed } from '@angular/core/testing';

import { DataManipulationService } from './date-manipulation.service';

describe('DateManipulationService', () => {
  let service: DataManipulationService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(DataManipulationService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
