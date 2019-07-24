export interface FileUrl {
    root: 'internal' | 'external' | 'github' | 'onedrive';
    path: string;
}
