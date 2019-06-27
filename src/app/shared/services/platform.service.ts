import { Injectable } from '@angular/core';
import {Platform} from '@ionic/angular';
import {Device} from '@ionic-native/device';

enum SupportedPlatforms {
  Android = 'android',
  IOS = 'ios',
  Electron = 'electron',
  Unsupported = 'unsupported'
}

@Injectable({
  providedIn: 'root'
})
export class PlatformService {
  platform: SupportedPlatforms;
  constructor(ionicPlatform: Platform) {
    if (ionicPlatform.is('android')) {
      this.platform = SupportedPlatforms.Android;
    } else if (ionicPlatform.is('ios')) {
      this.platform = SupportedPlatforms.IOS;
    } else if (ionicPlatform.is('desktop') &&
        ionicPlatform.is('cordova') &&
        Device.platform === 'browser') {
      this.platform = SupportedPlatforms.Electron;
    } else {
      this.platform = SupportedPlatforms.Unsupported;
    }
  }
}


