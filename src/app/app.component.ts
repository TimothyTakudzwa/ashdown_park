import { Component } from '@angular/core';
import { Platform } from 'ionic-angular';
import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';
import * as firebase from 'firebase';

import { LoginPage } from '../pages/login/login';
import { HomePage } from '../pages/home/home';
import { ChatPage } from '../pages/chat/chat';
import { SigninPage } from '../pages/signin/signin';
import { RoomPage } from '../pages/room/room';
import { CgattingPage } from '../pages/cgatting/cgatting';

const config = {
  apiKey: "AIzaSyBOf0mKGSLSHX1Adg068dLArLkbd5pk2vE",
  authDomain: "ashdwon-park.firebaseapp.com",
  databaseURL: "https://ashdwon-park.firebaseio.com",
  projectId: "ashdwon-park",
  storageBucket: "ashdwon-park.appspot.com"
};

@Component({
  templateUrl: 'app.html'
})
export class MyApp {
  rootPage:any = CgattingPage;

  constructor(platform: Platform, statusBar: StatusBar, splashScreen: SplashScreen) {
    platform.ready().then(() => {
      // Okay, so the platform is ready and our plugins are available.
      // Here you can do any higher level native things you might need.
      statusBar.styleDefault();
      splashScreen.hide();
    });
    firebase.initializeApp(config);
  }
}
