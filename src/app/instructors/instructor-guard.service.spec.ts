import { TestBed, inject } from '@angular/core/testing';

import { InstructorGuardService } from './instructor-guard.service';

describe('InstructorGuardService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [InstructorGuardService]
    });
  });

  it('should be created', inject([InstructorGuardService], (service: InstructorGuardService) => {
    expect(service).toBeTruthy();
  }));
});
