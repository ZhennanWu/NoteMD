import { Injectable, OnDestroy } from '@angular/core';
import { BehaviorSubject, Subscription } from 'rxjs';
import { PreferencesService } from '../preferences.service';
import { Shelf } from '../../models/shelf.model';
import { Storage } from '@ionic/storage';
import { ValueObservable } from '../../utils/value-observable.util';


@Injectable({
  providedIn: 'root'
})
export class CurrentShelfService implements OnDestroy {
  private readonly _currentShelf$ = new BehaviorSubject<Shelf | null>(null);
  public readonly currentShelf$: ValueObservable<Shelf | null> = this._currentShelf$;
  private subscription = new Subscription();
  constructor(preferencesService: PreferencesService, storage: Storage) {
    this.subscription.add(
      preferencesService.shelves$.subscribe((shelves) => {
        if (this._currentShelf$.value === null && shelves) { // Initialization process
          if (shelves.length !== 0 ) {
            storage.get('DEFAULT_SHELF')
            .then((defaultShelf) => {
              if (shelves.some((value) => value.equals(defaultShelf))) {
                this._currentShelf$.next(defaultShelf);
              } else {
                this._currentShelf$.next(shelves[0]);
              }
            });
          }
        } // Do nothing when preferences changed while a shelf was already open.
      })
    );
  }
  setShelf(shelf: Shelf): void {
    this._currentShelf$.next(shelf);
  }
  ngOnDestroy(): void {
    this.subscription.unsubscribe();
  }
}
