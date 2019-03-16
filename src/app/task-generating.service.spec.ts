import { TestBed } from '@angular/core/testing';

import { TaskGeneratingService } from './task-generating.service';

describe('TaskGeneratingService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: TaskGeneratingService = TestBed.get(TaskGeneratingService);
    expect(service).toBeTruthy();
  });
});
