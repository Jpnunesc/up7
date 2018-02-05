import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { DetalhesXPage } from '../detalhes-x/detalhes-x';
import { EventosPage } from '../eventos/eventos';
import { LoginPage } from '../login/login';
import { MaisPage } from '../mais/mais';

/**
 * Generated class for the SemiNovosPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-semi-novos',
  templateUrl: 'semi-novos.html',
})
export class SemiNovosPage {

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }
public detalhesx()
{
  this.navCtrl.setRoot(DetalhesXPage);
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
    console.log('ionViewDidLoad SemiNovosPage');
  }

}
