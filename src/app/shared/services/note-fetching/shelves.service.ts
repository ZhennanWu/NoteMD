import { Injectable } from '@angular/core';
import {PlatformService} from '../platform.service';
import {Storage} from '@ionic/storage';
import {BehaviorSubject} from 'rxjs';
import {Shelf} from '../../models/shelf.model';

@Injectable({
  providedIn: 'root'
})
export class ShelvesService {
  static readonly defaultShelves = [];
  private static readonly shelvesKey = 'SHELFS';

  shelves$ = new BehaviorSubject<Array<Shelf>>(ShelvesService.defaultShelves);
  constructor(private platform: PlatformService, private storage: Storage) {
    this.storage.get(ShelvesService.shelvesKey)
        .then((value) => value || ShelvesService.defaultShelves)
        .then((value) => {this.shelves$.next(value); });
  }
}
