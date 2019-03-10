import { TestBed } from '@angular/core/testing';

import { ExampleResultsService } from './example-results.service';

describe('ExampleResultsService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: ExampleResultsService = TestBed.get(ExampleResultsService);
    expect(service).toBeTruthy();
  });
});
