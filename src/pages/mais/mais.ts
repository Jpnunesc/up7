import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { EventosPage } from '../eventos/eventos';
import { SemiNovosPage } from '../semi-novos/semi-novos';
import { LoginPage } from '../login/login';

/**
 * Generated class for the MaisPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-mais',
  templateUrl: 'mais.html',
})
export class MaisPage {

  constructor(public navCtrl: NavController, public navParams: NavParams) {
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
    console.log('ionViewDidLoad MaisPage');
  }

}
