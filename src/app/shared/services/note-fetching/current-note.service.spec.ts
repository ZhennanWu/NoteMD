import { TestBed } from '@angular/core/testing';

import { CurrentNoteService } from './current-note.service';

describe('CurrentNoteService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: CurrentNoteService = TestBed.get(CurrentNoteService);
    expect(service).toBeTruthy();
  });
});
