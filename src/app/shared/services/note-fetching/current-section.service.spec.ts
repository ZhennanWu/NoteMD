import { TestBed } from '@angular/core/testing';

import { CurrentSectionService } from './current-section.service';

describe('CurrentSectionService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: CurrentSectionService = TestBed.get(CurrentSectionService);
    expect(service).toBeTruthy();
  });
});
