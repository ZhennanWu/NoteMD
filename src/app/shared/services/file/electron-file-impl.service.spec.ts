import { TestBed } from '@angular/core/testing';

import { ElectronFileService } from './electron-file.service';

describe('ElectronFileService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: ElectronFileService = TestBed.get(ElectronFileService);
    expect(service).toBeTruthy();
  });
});
