import { Injectable } from '@angular/core';
import { AppFileServiceInterface } from './app-file.service';
import { FileUrl } from '../../models/file-url';

@Injectable()
export class CordovaFileServiceImpl implements AppFileServiceInterface {
  checkFile(file: FileUrl): Promise<FileUrl | undefined> {
    throw new Error("Method not implemented.");
  }
  checkRelative(file: FileUrl, relativePath: string): Promise<FileUrl | undefined> {
    throw new Error("Method not implemented.");
  }
  checkIsDir(file: FileUrl): Promise<boolean> {
    throw new Error("Method not implemented.");
  }
  listChildren(dir: FileUrl): Promise<FileUrl[]> {
    throw new Error("Method not implemented.");
  }
  readFile(file: FileUrl): Promise<string> {
    throw new Error("Method not implemented.");
  }
  writeFile(file: FileUrl, content: string, createFlags: boolean): Promise<FileUrl> {
    throw new Error("Method not implemented.");
  }
  deleteFile(file: FileUrl, deleteFlags: {}): Promise<null> {
    throw new Error("Method not implemented.");
  }

  constructor() { }
}
