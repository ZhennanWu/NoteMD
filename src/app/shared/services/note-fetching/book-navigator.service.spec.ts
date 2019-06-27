import { TestBed } from '@angular/core/testing';

import { BookNavigatorService } from './book-navigator.service';

describe('BookNavigatorService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: BookNavigatorService = TestBed.get(BookNavigatorService);
    expect(service).toBeTruthy();
  });
});
