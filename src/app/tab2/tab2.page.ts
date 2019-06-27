import { Component } from '@angular/core';
import {Platform} from '@ionic/angular';
import {Device} from '@ionic-native/device';
// import 'cordova-plugin-device';
// import '/plugins/cordova-plugin-device/';

@Component({
  selector: 'app-tab2',
  templateUrl: 'tab2.page.html',
  styleUrls: ['tab2.page.scss']
})
export class Tab2Page {
  platform: Platform;
  cdvDevice: typeof Device;
  constructor(platform: Platform) {
    this.platform = platform;
    this.cdvDevice = Device;
  }
}
