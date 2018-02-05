import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { SemiNovosPage } from '../semi-novos/semi-novos';

/**
 * Generated class for the DetalhesXPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-detalhes-x',
  templateUrl: 'detalhes-x.html',
})
export class DetalhesXPage {

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }
  public seminovos(){
    this.navCtrl.setRoot(SemiNovosPage);
  }
  ionViewDidLoad() {
    console.log('ionViewDidLoad DetalhesXPage');
  }

}
