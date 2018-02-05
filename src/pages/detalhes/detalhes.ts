import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { LoginPage } from '../login/login';

/**
 * Generated class for the DetalhesPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-detalhes',
  templateUrl: 'detalhes.html',
})
export class DetalhesPage {

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }
public login(){
  this.navCtrl.setRoot(LoginPage);
}
  ionViewDidLoad() {
    console.log('ionViewDidLoad DetalhesPage');
  }

}
