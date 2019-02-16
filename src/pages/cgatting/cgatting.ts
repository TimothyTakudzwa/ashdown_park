import { Component, ViewChild } from '@angular/core';
import { NavController, NavParams, Content } from 'ionic-angular';
import { RoomPage } from '../room/room';
import * as firebase from 'Firebase';
/**
 * Generated class for the CgattingPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */


@Component({
  selector: 'page-cgatting',
  templateUrl: 'cgatting.html',
})
export class CgattingPage {
  @ViewChild(Content) content: Content;
  data = { type:'', nickname:'', message:'' };
  chats = [];
  roomkey:string;
  nickname:string;
  offStatus:boolean = false;
  constructor(public navCtrl: NavController, public navParams: NavParams) {
    this.roomkey = "-LYs9usVYMTpFxs3ZtYv" as string;
    this.nickname = "Timothy Ngorima" as string;
    this.data.type = 'message';
    this.data.nickname = this.nickname;
  
    this.data.message = '';
  
    firebase.database().ref('chatrooms/'+this.roomkey+'/chats').on('value', resp => {
      this.chats = [];
      this.chats = snapshotToArray(resp);
      setTimeout(() => {
        if(this.offStatus === false) {
          this.content.scrollToBottom(300);
        }
      }, 1000);
    });
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad CgattingPage');
  }
sendMessage() {
  let newData = firebase.database().ref('chatrooms/'+this.roomkey+'/chats').push();
  newData.set({
    type:this.data.type,
    user:this.data.nickname,
    message:this.data.message,
    sendDate:Date()
  });
  this.data.message = '';
}
exitChat() {
  let exitData = firebase.database().ref('chatrooms/'+this.roomkey+'/chats').push();
  exitData.set({
    type:'exit',
    user:this.nickname,
    message:this.nickname+' has exited this room.',
    sendDate:Date()
  });

  this.offStatus = true;

  this.navCtrl.setRoot(RoomPage, {
    nickname:this.nickname
  });
}
}
export const snapshotToArray = snapshot => {
  let returnArr = [];

  snapshot.forEach(childSnapshot => {
      let item = childSnapshot.val();
      item.key = childSnapshot.key;
      returnArr.push(item);
  });

  return returnArr;
};
