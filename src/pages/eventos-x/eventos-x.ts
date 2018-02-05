import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { EventosPage } from '../eventos/eventos';

/**
 * Generated class for the EventosXPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-eventos-x',
  templateUrl: 'eventos-x.html',
})
export class EventosXPage {

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }
public eventos(){
  this.navCtrl.setRoot(EventosPage);
}
  ionViewDidLoad() {
    console.log('ionViewDidLoad EventosXPage');
  }

}
