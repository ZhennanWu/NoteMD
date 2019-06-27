import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import { Book } from '../../models/book.model';
import { NoteFile } from '../../models/note-file.model';
import { DisplayableSummaryEntity, SummaryArticle, SummaryRoot } from '../../models/summary-entity.model';

type BookNavigationRoute = {book: Book, relativePath: string};
@Injectable()
export class BookService {
  currentBook$ = new BehaviorSubject<Book | null> (null);
  test: Observable<number>
  // currentRoute$ = new BehaviorSubject<BookNavigationRoute | null>(null);
  currentSection$ = new BehaviorSubject<SummaryArticle | SummaryRoot | null>(null);
  displayableEntities$ = new BehaviorSubject<DisplayableSummaryEntity[] | null>(null);
  constructor() {
    this.currentBook$.subscribe((book)=>{
      if(book !== null){
        //TODO filter mechanism
        // this.currentRoute$.next({book: book, relativePath: ''});
        this.currentSection$.next()
      }
    });
    this.currentRoute$.subscribe((route)=>{
      
    })
  }
}
