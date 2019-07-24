import { TestBed } from '@angular/core/testing';

import { AppFileService } from './app-file.service';

describe('AppFileService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: AppFileService = TestBed.get(AppFileService);
    expect(service).toBeTruthy();
  });
});
