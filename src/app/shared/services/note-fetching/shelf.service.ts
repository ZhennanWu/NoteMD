import { Injectable } from '@angular/core';
import {BehaviorSubject, Observable} from 'rxjs';
import {Shelf} from '../../models/shelf.model';
import {ShelvesService} from './shelves.service';
import { Storage } from '@ionic/storage';

@Injectable({
  providedIn: 'root'
})
export class ShelfService {
  currentShelf$ = new BehaviorSubject<Shelf|null>(null);
  constructor(shelvesService: ShelvesService, storage: Storage) {
    shelvesService.shelves$.subscribe((shelves) => {
      if (this.currentShelf$.value === null) {
        if (shelves.length !== 0 ) {
          storage.get('DEFAULT_SHELF')
          .then((value) => {
            if (value in shelves) {
              this.currentShelf$.next(value);
            } else {
              this.currentShelf$.next(shelves[1]);
            }
          });
        }
      }
    });
  }
  setShelf(shelf: Shelf): void {
    this.currentShelf$.next(shelf);
  }
}
