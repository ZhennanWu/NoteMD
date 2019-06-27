import { Shelf } from './shelf.model';

export class Book{
    constructor(public shelf: Shelf, public relativePath: string) {}
    title: string;
}
