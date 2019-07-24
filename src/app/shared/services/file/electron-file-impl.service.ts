import { Injectable } from '@angular/core';
import * as FseNamespace from 'fs-extra';
import * as PathNamespace from 'path';
import { AppFileServiceInterface } from './app-file.service';
import { FileUrl } from '../../models/file-url';
import { rejectedPromise } from '../../utils/rejected-promise.util';
import { Path } from '../../utils/path.util';

export type Fse = typeof FseNamespace;
export type Path  = typeof PathNamespace;

@Injectable()
export class ElectronFileServiceImpl implements AppFileServiceInterface {

  constructor() {
    this.fse = require('fs-extra');
  }
  fse: Fse | undefined;

  private checkFse(fse: Fse | undefined): fse is Fse {
    return fse !== undefined;
  }

  checkFile(file: FileUrl): Promise<FileUrl | undefined> {
    if (this.fse) {
      this.fse.promises.access(file.path);
      return this.fse.ensureFile(file.path).then(() => file);
    }
    return rejectedPromise('no fs module found!');
  }
  checkRelative(base: FileUrl, relativePath: string): Promise<FileUrl | undefined> {
    return this.checkFile(
      {
        root: base.root,
        path: Path.join(base.path, relativePath);
      }
    );
  }
  checkIsDir(file: FileUrl): Promise<boolean> {
    if (this.fse) {
      return this.fse.promises.stat(file.path).then((stat) => stat.isDirectory());
    }
    return rejectedPromise('no fs module found!');
  }
  listChildren(dir: FileUrl): Promise<FileUrl[]> {
    if (this.fse) {
      return this.fse.promises.readdir(dir.path).then((children) =>
        children.map((name) => {
          return {
            root: dir.root,
            path: dir.path + '/' + name // TODO()
          };
        })
      );
    }
    return rejectedPromise('no fs module found!');
  }
  readFile(file: FileUrl): Promise<string> {
    if (this.fse) {
      return this.fse.promises.readFile(file.path, {encoding: 'utf8'});
    }
    return rejectedPromise('no fs module found!');
  }
  writeFile(file: FileUrl, content: string, createFlags: boolean): Promise<FileUrl> {
    throw new Error('Method not implemented.');
  }
  deleteFile(file: FileUrl, deleteFlags: {}): Promise<void> {
    if (this.fse) {
      return this.fse.promises.unlink(file.path);
    }
    return rejectedPromise('no fs module found!');
  }
  deleteDir(dir: FileUrl, deleteFlags: {}): Promise<void> {
    if (this.fse) {
      return this.fse.promises.rmdir(dir.path);
    }
    return rejectedPromise('no fs module found!');
  }
}
