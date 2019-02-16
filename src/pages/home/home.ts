import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { AlertController } from 'ionic-angular';
import { AlertsPage } from '../alerts/alerts';
import { ChatPage } from '../chat/chat';
import { EmergencyPage } from '../emergency/emergency';
import { ProfilePage } from '../profile/profile';
import { NoticePage } from '../notice/notice';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  constructor(public navCtrl: NavController, public alertCtrl: AlertController) {

  }

  viewAlerts() {
    this.navCtrl.push(AlertsPage)
  }

  chat() {
    this.navCtrl.push(ChatPage)
  }

  emergency() {
    this.navCtrl.push(EmergencyPage)
  }
  profile() {
    this.navCtrl.push(ProfilePage)
  }
  notice() {
    this.navCtrl.push(NoticePage)
  }

  makeCall() {
    const confirm = this.alertCtrl.create({
      title: 'Call Night Guard',
      message: 'Please Select the Guard you want to call. By clicking the call button, the call will be redirected to the select guard and normal call tarrifs apply.',
      buttons: [
        {
          text: 'Call Guard 1',
          handler: () => {
            console.log('Disagree clicked');
          }
        },
        {
          text: 'Call Guard 2',
          handler: () => {
            console.log('Agree clicked');
          }
        },
        {
          text: 'Call Guard 3',
          handler: () => {
            console.log('Agree clicked');
          }
        }
      ]
    });
    confirm.present();
  }
}
