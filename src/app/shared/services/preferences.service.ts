import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { Shelf } from '../models/shelf.model';
import {Storage} from '@ionic/storage';
import { ValueObservable } from '../utils/value-observable.util';


@Injectable({
  providedIn: 'root'
})
export class PreferencesService {

  private static readonly shelvesKey = 'SHELFS';
  private static readonly defaultShelves = [];
  private readonly _shelves$ = new BehaviorSubject<Shelf[] | null>(null);
  public get shelves$(): ValueObservable<Shelf[] | null> {
    return this._shelves$;
  }

  constructor(private storage: Storage) {
    this.storage.get(PreferencesService.shelvesKey)
        .then((value) => value || PreferencesService.defaultShelves)
        .then((value) => {this._shelves$.next(value); });
  }
}


