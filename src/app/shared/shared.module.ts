import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PageScaffoldComponent } from './components/page-scaffold/page-scaffold.component';
import {FormsModule} from '@angular/forms';
import {IonicModule} from '@ionic/angular';
import { OverflowHeaderComponent } from './components/overflow-header/overflow-header.component';
import {RouterModule} from '@angular/router';

@NgModule({
    declarations: [
        PageScaffoldComponent,
        OverflowHeaderComponent
    ],
    exports: [
        PageScaffoldComponent,
        OverflowHeaderComponent
    ],
    imports: [
        CommonModule,
        FormsModule,
        IonicModule
    ]
})
export class SharedModule { }
