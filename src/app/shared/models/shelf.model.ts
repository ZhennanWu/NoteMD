import { LocalFileSystem, File } from '@ionic-native/file/ngx';

export class Shelf {
    title: string;
    cdvRoot: 'dataDirectory'
        | 'externalDataDirectory'
        | 'syncedDataDirectory'
        | 'externalRootDirectory'
        | 'documentsDirectory'
        | 'PERSISTENT';
    relativePath: string;
    constructor(file: File) {

    }
}
