import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { Book } from '../../models/book.model';
import { BookService } from './book.service';

type BookNavigationRoute = {book: Book, relativePath: string};
@Injectable()
export class BookNavigatorService {
  currentRoute$ = new BehaviorSubject<BookNavigationRoute | null> (null)
  constructor(bookService: BookService) { }
}
