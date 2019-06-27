import {Component} from '@angular/core';
import {IonIcon} from '@ionic/angular';

const INSANELY_LARGE_NUM = 99990;
export class MenuItem {
    constructor(
        public text: string,
        public order: number,
        public displayMode: 'always' | 'never' | 'conditional',
        public icon: MenuItem['displayMode'] extends 'never' ? Component | string | null : Component | string,
    ) {}

    static compare(item1: MenuItem, item2: MenuItem): number {
        if (item1.displayMode === 'never' && item2.displayMode !== 'never') {
            return INSANELY_LARGE_NUM;
        } else if (item1.displayMode !== 'never' && item2.displayMode === 'never') {
            return -INSANELY_LARGE_NUM;
        } else if (item1.displayMode === 'always' && item2.displayMode !== 'always') {
            return -INSANELY_LARGE_NUM;
        } else if (item1.displayMode !== 'always' && item2.displayMode === 'always') {
            return INSANELY_LARGE_NUM;
        } else {
            return item1.order - item2.order;
        }
    }
}
