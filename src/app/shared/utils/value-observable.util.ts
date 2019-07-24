import { Observable } from 'rxjs';
export interface ValueObservable<T> extends Observable<T> {
    value: T;
}
