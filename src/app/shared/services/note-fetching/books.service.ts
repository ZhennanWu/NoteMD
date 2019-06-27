import { Injectable } from '@angular/core';
import {ShelfService} from './shelf.service';
import {BehaviorSubject} from 'rxjs';
import {Book} from '../../models/book.model';
import {Shelf} from '../../models/shelf.model';
import {File} from '@ionic-native/file/ngx';
import { FileService } from '../utils/file.service';

@Injectable()
export class BooksService {
  books$ = new BehaviorSubject<Array<Book> | null>([]);
  constructor(shelfService: ShelfService,
              private file: File,
              private fileService: FileService) {
    shelfService.currentShelf$.subscribe(
      (shelf) => {
        if (shelf !== null) {
          fileService.getShelf(shelf).then((shelfFile) =>
            this.file.listDir(shelfFile.fullPath, '')
          ).then((entries) => {
            let dirEntries = entries .filter((entry) => entry.isDirectory);
            let dirCheckTags = dirEntries.map((entry) => this.fileService.checkIsBook(entry));
            return Promise.all(dirCheckTags).then((tags) => dirEntries.filter((_, index) => tags[index] === true));
          }
          ).then((bookDirs) =>
            this.books$.next(bookDirs.map((bookDir) => new Book(shelf, bookDir.name)))
          ).catch((error) => this.books$.next(null));
        }
      }
    );
  }
  // fetchBooksFromShelf(shelf: Shelf): Array<Book> {
  //   this.file.
  // }
}
