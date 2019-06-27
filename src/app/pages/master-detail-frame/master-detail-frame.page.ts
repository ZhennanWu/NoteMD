import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';
import { Platform, IonSplitPane} from '@ionic/angular';
import { RouterOutlet } from '@angular/router';

const CLASS_TAG_SHOW_DETAIL = 'split-pane-show-detail';

@Component({
  selector: 'app-master-detail-frame',
  templateUrl: './master-detail-frame.page.html',
  styleUrls: ['./master-detail-frame.page.scss'],
})
export class MasterDetailFramePage {
  private static readonly masterOutletName = 'primary';
  private static readonly detailOutletName = 'editor';

  public isSplitPaneActivated: boolean;
  public isShowingDetail: boolean;

  @ViewChild(MasterDetailFramePage.masterOutletName) masterOutlet: RouterOutlet;
  @ViewChild(MasterDetailFramePage.detailOutletName) detailOutlet: RouterOutlet;
  @ViewChild('split-pane-main') splitPaneMain: HTMLElement;
  @ViewChild('split-pane-side') splitPaneSide: HTMLElement;

  constructor() {}

  onSplitPaneChanged(isSplitPaneActivated: boolean){
    this.isSplitPaneActivated = isSplitPaneActivated;
    // if (this.masterOutlet && this.detailOutlet){
    //     switch (isActivated){
    //     case true: this.activateSplitPane(); break;
    //     case false: this.deactivateSpliePane(); break;
    //   }
    // }
  }

  showDetail(){
    this.isShowingDetail = true;
    this.splitPaneMain.className += ' ' + CLASS_TAG_SHOW_DETAIL;
    this.splitPaneSide.className += ' ' + CLASS_TAG_SHOW_DETAIL;
  }
  hideDetail(){
    this.isShowingDetail = false;
    this.splitPaneMain.className = this.splitPaneMain.className.replace(' ' + CLASS_TAG_SHOW_DETAIL, '');
    this.splitPaneSide.className = this.splitPaneSide.className.replace(' ' + CLASS_TAG_SHOW_DETAIL, '');
  }
}
