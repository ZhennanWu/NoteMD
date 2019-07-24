import { Injectable, Injector, InjectionToken, Inject } from '@angular/core';
import { File } from '@ionic-native/file/ngx';
import { PlatformService } from '../platform.service';
import { FileUrl } from '../../models/file-url';
import { CordovaFileServiceImpl } from './cordova-file-impl.service';
import { ElectronFileServiceImpl } from './electron-file-impl.service';

export interface AppFileServiceInterface {
    checkFile(file: FileUrl): Promise<FileUrl | undefined>;
    checkRelative(file: FileUrl, relativePath: string): Promise<FileUrl | undefined>;
    checkIsDir(file: FileUrl): Promise<boolean>;
    listChildren(dir: FileUrl): Promise<FileUrl[]>;
    readFile(file: FileUrl): Promise<string>;
    writeFile(file: FileUrl, content: string, createFlags: boolean): Promise<FileUrl>;
    deleteFile(file: FileUrl, deleteFlags: {}): Promise<void>;
    deleteDir(dir: FileUrl, deleteFlages: {}): Promise<void>;
}

export const LOCAL_FILE_SERVICE = new InjectionToken<AppFileServiceInterface>('app-file-service-interface');
const localFileServiceFactory = (platformService: PlatformService): AppFileServiceInterface => {
    switch (platformService.platform) {
        case 'android': case 'ios':
            return new CordovaFileServiceImpl();
        case 'electron':
            return new ElectronFileServiceImpl();
        case 'unsupported':
            return new CordovaFileServiceImpl();
    }
};
export const localFileServiceProvider = {
    provide: LOCAL_FILE_SERVICE,
    useFactory: localFileServiceFactory,
    deps: [PlatformService]
};

@Injectable()
export class AppFileService implements AppFileServiceInterface {
    onedriveFileServiceImpl: AppFileServiceInterface;
    githubFileServiceImpl: AppFileServiceInterface;

    constructor(
        @Inject(LOCAL_FILE_SERVICE) public localFileServiceImpl: AppFileServiceInterface,
    ) {}

    private selectImpl(file: FileUrl): AppFileServiceInterface {
        switch (file.root) {
            case 'external': case 'internal' :
                return this.localFileServiceImpl;
            case 'github':
                return this.githubFileServiceImpl;
            case 'onedrive':
                return this.onedriveFileServiceImpl;
        }
    }
    checkFile(file: FileUrl): Promise<FileUrl | undefined> {
        return this.selectImpl(file).checkFile(file);
    }
    checkRelative(file: FileUrl, relativePath: string): Promise<FileUrl | undefined> {
        return this.selectImpl(file).checkRelative(file, relativePath);
    }
    checkIsDir(file: FileUrl): Promise<boolean> {
        return this.selectImpl(file).checkIsDir(file);
    }
    listChildren(dir: FileUrl): Promise<FileUrl[]> {
        return this.selectImpl(dir).listChildren(dir);
    }
    readFile(file: FileUrl): Promise<string> {
        return this.selectImpl(file).readFile(file);
    }
    writeFile(file: FileUrl, content: string, createFlags: boolean): Promise<FileUrl> {
        return this.selectImpl(file).writeFile(file, content, createFlags);
    }
    deleteFile(file: FileUrl, deleteFlags: {}): Promise<void> {
        return this.selectImpl(file).deleteFile(file, deleteFlags);
    }
    deleteDir(dir: FileUrl, deleteFlags: {}): Promise<void> {
        return this.selectImpl(dir).deleteDir(dir, deleteFlags);
    }
}

/*

export interface AppFileService {

}

let appFileServiceFactory = (platformService: PlatformService) => {
    return
}

export const AppFileServiceProvider = {
    provide: AppFileService,
    useFactory: appFileServiceFactory,
    deps: [PlatformService]
}
 */
