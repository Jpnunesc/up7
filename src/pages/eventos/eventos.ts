import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { LoginPage } from '../login/login';
import { EventosXPage } from '../eventos-x/eventos-x';
import { SemiNovosPage } from '../semi-novos/semi-novos';
import { MaisPage } from '../mais/mais';

/**
 * Generated class for the EventosPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-eventos',
  templateUrl: 'eventos.html',
})
export class EventosPage {

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }
  public login(){
    this.navCtrl.setRoot(LoginPage);
  }
  public eventosx(){
    this.navCtrl.setRoot(EventosXPage);
  }
  public eventos(){
   this.navCtrl.setRoot(EventosPage);
 }
 public seminovos(){
   this.navCtrl.setRoot(SemiNovosPage);
 }
 public antigos(){
   this.navCtrl.setRoot(LoginPage);
 }
 public mais(){
  this.navCtrl.setRoot(MaisPage);
}
  ionViewDidLoad() {
    console.log('ionViewDidLoad EventosPage');
  }

}
