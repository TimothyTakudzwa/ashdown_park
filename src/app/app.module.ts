import { NgModule, ErrorHandler } from "@angular/core";
import { BrowserModule } from "@angular/platform-browser";
import { IonicApp, IonicModule, IonicErrorHandler } from "ionic-angular";
import { MyApp } from "./app.component";

import { HomePage } from "../pages/home/home";

import { StatusBar } from "@ionic-native/status-bar";
import { SplashScreen } from "@ionic-native/splash-screen";
import { SignupPage } from "../pages/signup/signup";
import { LoginPage } from "../pages/login/login";
import { AlertsPage } from "../pages/alerts/alerts";
import { EmergencyPage } from "../pages/emergency/emergency";
import { ChatPage } from "../pages/chat/chat";
import { ProfilePage } from "../pages/profile/profile";
import { NoticePage } from "../pages/notice/notice";
import { SigninPage } from "../pages/signin/signin";
import { RoomPage } from "../pages/room/room";
import { AddRoomPage } from "../pages/add-room/add-room";
import { CgattingPage } from "../pages/cgatting/cgatting";

@NgModule({
  declarations: [
    MyApp,
    SigninPage,
    HomePage,
    LoginPage,
    SignupPage,
    AlertsPage,
    EmergencyPage,
    RoomPage,
    AddRoomPage,
    NoticePage,
    CgattingPage,
    ChatPage,
    ProfilePage
  ],
  imports: [BrowserModule, IonicModule.forRoot(MyApp)],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    SigninPage,
    LoginPage,
    SignupPage,
RoomPage,
CgattingPage,
AddRoomPage,
    AlertsPage,
    NoticePage,
    EmergencyPage,
    ChatPage,
    ProfilePage,
    HomePage
  ],
  providers: [
    StatusBar,
    SplashScreen,
    { provide: ErrorHandler, useClass: IonicErrorHandler }
  ]
})
export class AppModule {}
