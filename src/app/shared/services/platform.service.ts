import { Injectable } from '@angular/core';
import {Platform} from '@ionic/angular';
import {Device} from '@ionic-native/device';

@Injectable({
  providedIn: 'root'
})
export class PlatformService {
  platform: 'android' | 'ios' | 'electron' | 'unsupported';
  constructor(ionicPlatform: Platform) {
    if (ionicPlatform.is('android')) {
      this.platform = 'android';
    } else if (ionicPlatform.is('ios')) {
      this.platform = 'ios';
    } else if (ionicPlatform.is('desktop') &&
        ionicPlatform.is('cordova') &&
        Device.platform === 'browser') {
      this.platform = 'electron';
    } else {
      this.platform = 'unsupported';
    }
  }
}


