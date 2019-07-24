import { TestBed } from '@angular/core/testing';

import { CurrentShelfService } from './current-shelf.service';

describe('CurrentShelfService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: CurrentShelfService = TestBed.get(CurrentShelfService);
    expect(service).toBeTruthy();
  });
});
