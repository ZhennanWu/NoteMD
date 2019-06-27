import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';

import { IonicModule } from '@ionic/angular';

import { EditorMdPage } from './editor-md.page';
import {HypermdComponent} from './hypermd/hypermd.component';

// import { CodemirrorModule } from '@ctrl/ngx-codemirror';

const routes: Routes = [
  {
    path: '',
    component: EditorMdPage
  }
];

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    // CodemirrorModule,
    RouterModule.forChild(routes)
  ],
  declarations: [
      EditorMdPage,
      HypermdComponent,
  ]
})
export class EditorMdPageModule {}
