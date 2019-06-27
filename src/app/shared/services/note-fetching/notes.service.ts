import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { NoteFile } from '../../models/note-file.model';

@Injectable()
export class NotesService {
  notes$ = new BehaviorSubject<NoteFile[]>([]);
  constructor() {
    
  }
}
