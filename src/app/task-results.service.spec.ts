import { TestBed } from '@angular/core/testing';

import { TaskResultsService } from './task-results.service';

describe('TaskResultsService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: TaskResultsService = TestBed.get(TaskResultsService);
    expect(service).toBeTruthy();
  });
});
