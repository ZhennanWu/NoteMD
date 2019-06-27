import { Injectable } from '@angular/core';
import { PlatformService } from '../platform.service';
import { File, LocalFileSystem, Entry} from '@ionic-native/file/ngx';
import { Diagnostic } from '@ionic-native/diagnostic/ngx';
import { Shelf } from '../../models/shelf.model';

@Injectable({
  providedIn: 'root'
})
export class FileService {
  externalPermissionGranted = false;

  constructor(
    private platformService: PlatformService,
    private file: File,
    private localFileSystem: LocalFileSystem,
    private diagnostics: Diagnostic) {}

  getShelf(shelf: Shelf) {
    if (shelf.cdvRoot === 'PERSISTENT') {
      return this.file.resolveDirectoryUrl(this.file.dataDirectory);
    }
    return this.file.resolveDirectoryUrl(shelf.cdvRoot);
  }
  checkIsBook(entry: Entry) {
    return new Promise<boolean>(
      (resolve, reject) => {
        if (entry.isDirectory !== false) {
          resolve(false);
        } else {
          this.file.resolveDirectoryUrl(entry.fullPath).then((dirEntry) =>
            dirEntry.getFile('SUMMARY.md', {create: false, exclusive: false},
              (fileEntry) => resolve(true),
              (error) => resolve(false)
            )
          ).catch((error) => resolve(false));
        }
      }
    );
  }
  // getFile(url: string): Promise<string | null>{
  //   this.file.resolveLocalFilesystemUrl(url).then((fileEntry)=>{
  //     fileEntry.
  //     this.file.readAsText()
  //   })
  // }
  // isInternal(url: string): boolean{

  // }
  // isExternal(url: string): boolean{

  // }
}
