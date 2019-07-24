import { LocalFileSystem, File } from '@ionic-native/file/ngx';
import { BehaviorSubject } from 'rxjs';
import { Book } from './book.model';
import { map } from 'rxjs/operators';
import { Injectable } from '@angular/core';
import { FileUrl } from './file-url';
import { DataClass } from '../utils/data-class.util';


export class Shelf implements FileUrl, DataClass {
    title: string;
    root: 'internal' | 'external' | 'github' | 'onedrive';
    path: string;
    equals(other: this): boolean {
        return this.root === other.root && this.path === other.path;
    }
}
