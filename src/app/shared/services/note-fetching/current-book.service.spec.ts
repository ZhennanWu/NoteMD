import { TestBed } from '@angular/core/testing';

import { CurrentBookService } from './current-book.service';

describe('CurrentBookService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: CurrentBookService = TestBed.get(CurrentBookService);
    expect(service).toBeTruthy();
  });
});
