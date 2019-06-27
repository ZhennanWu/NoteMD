import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';

import { IonicModule } from '@ionic/angular';

import { MasterDetailFramePage } from './master-detail-frame.page';


const routes: Routes = [
  {
    path: '',
    component: MasterDetailFramePage
  }
];
@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RouterModule.forChild(routes)
  ],
  declarations: [MasterDetailFramePage],
  providers: []
})
export class MasterDetailFramePageModule {}
