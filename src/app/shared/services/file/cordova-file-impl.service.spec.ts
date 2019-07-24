import { TestBed } from '@angular/core/testing';

import { CordovaFileServiceImpl } from './cordova-file-impl.service';

describe('CordovaFileImplService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: CordovaFileServiceImpl = TestBed.get(CordovaFileServiceImpl);
    expect(service).toBeTruthy();
  });
});
