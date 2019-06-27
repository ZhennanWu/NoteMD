import { TestBed } from '@angular/core/testing';

import { ShelvesService } from './shelves.service';

describe('ShelvesService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: ShelvesService = TestBed.get(ShelvesService);
    expect(service).toBeTruthy();
  });
});
